package audio.libs.sequencer

import audio.libs.elemaudio.*

import scala.math.floor
import scala.scalajs.js
import scala.scalajs.js.annotation.*

// === Core Data Types ===

/** A note with start time, duration, and associated data. */
case class SeqNote[T](
    start: Double,
    duration: Double,
    data: T
)

/** A sequence containing multiple notes and total duration. */
case class Sequence[T](
    notes: Seq[SeqNote[T]],
    duration: Double
)

// === Melody Types and Functions ===

/** A melody note with duration and optional data (null represents a rest). */
case class MelodyNote[T](
    duration: Double,
    data: Option[T]
)

def rest[T](duration: Double): MelodyNote[T] =
  MelodyNote(duration, None)

/** A melody is a sequence of melody notes. */
type Melody[T] = Seq[MelodyNote[T]]

/** Converts a melody to a sequence, filtering out rests. */
def melodyToSequence[T](melody: Melody[T]): Sequence[T] =
  var notes = Seq.empty[SeqNote[T]]
  var duration = 0.0

  for note <- melody do
    for d <- note.data do notes = notes :+ SeqNote(duration, note.duration, d)
    duration += note.duration

  Sequence(notes, duration)

// === Sequence Combination ===

/** Combines multiple sequences sequentially. */
def combine[T](seqs: Sequence[T]*): Sequence[T] =
  if seqs.isEmpty then Sequence(Seq.empty, 0.0)
  else
    var allNotes = seqs.head.notes
    var duration = seqs.head.duration

    for seq <- seqs.tail do
      allNotes =
        allNotes ++ seq.notes.map(n => n.copy(start = n.start + duration))
      duration += seq.duration

    Sequence(allNotes, duration)

inline def +(seq1: Sequence[Int], seq2: Sequence[Int]): Sequence[Int] =
  combine(seq1, seq2)

// === Pattern Types and Functions ===

/** A pattern note with position, duration, and data. */
case class PatternNote[T](
    position: Double,
    duration: Double,
    data: T
)

/** A beat note defines timing without data. */
case class BeatNote(
    position: Double,
    duration: Double
)

/** Combines data with beat timing to create a pattern. */
def withBeat[T](data: Seq[T], beat: Seq[BeatNote]): Seq[PatternNote[T]] =
  beat.zipWithIndex.map((b, i) =>
    val d = data(i % data.length)
    PatternNote(b.position, b.duration, d)
  )

/** Converts a pattern to a sequence with specified duration. */
def patternToSequence[T](
    pattern: Seq[PatternNote[T]],
    duration: Double
): Sequence[T] =
  val notes = pattern.map(note =>
    SeqNote(
      start = note.position * duration,
      duration = note.duration,
      data = note.data
    )
  )
  Sequence(notes, duration)

// === Sequencer - Playable Note ===

/** A playable note containing data, track index, and gate signal. */
case class PlayableNote[T](
    data: T,
    idx: Int,
    gate: AudioNode
)

// === Sequencer Implementation ===

/** A stateful sequencer that manages playback of a sequence with polyphonic
  * tracks.
  *
  * @param sequence
  *   The sequence to play
  * @param trackCount
  *   Number of simultaneous tracks for polyphony
  * @param bpm
  *   Beats per minute
  * @param repetitions
  *   Number of times to repeat (0 = infinite)
  * @param startTime
  *   Time to start the sequence
  * @param seqKey
  *   Unique key for trigger signals
  * @param debug
  *   Enable debug logging
  */
class Sequencer[T](
    val sequence: Sequence[T],
    val trackCount: Int = 2,
    val bpm: Double = 120.0,
    val repetitions: Int = 0,
    val startTime: Double = 0.0,
    val seqKey: String = "seq_trigger",
    val debug: Boolean = false
):
  val secPerBeat: Double = 60.0 / bpm
  val seqDuration: Double = sequence.duration * secPerBeat

  // Convert notes to Vector for O(1) access
  private val indexedNotes = sequence.notes.toVector

  // Named tuple type for iterator
  type NoteWithTiming = (note: SeqNote[T], start: Double, finish: Double)

  // Lazy infinite iterator that yields notes with absolute timestamps
  private var noteStream: BufferedIterator[NoteWithTiming] =
    Iterator
      .unfold((0, 0)): (loop, idx) =>
        if repetitions > 0 && loop >= repetitions then None
        else
          val note = indexedNotes(idx)
          val loopOffset = loop * seqDuration
          val start = note.start * secPerBeat + loopOffset
          val finish = start + note.duration * secPerBeat

          val nextState =
            if idx + 1 >= indexedNotes.length then (loop + 1, 0)
            else (loop, idx + 1)

          Some(((note, start, finish), nextState))
      .buffered

  // Initialize tracks with notes from the sequence (cycling if needed)
  private val tracks = (0 until trackCount)
    .map(i =>
      val note = indexedNotes(i % indexedNotes.length)
      PlayableNote(
        data = note.data,
        idx = i,
        gate = timedTrigger(0, 0, seqKey + i)
      )
    )
    .toArray

  // Track state
  private var currentTrackIdx = 0

  private def getNextTrackIdx(): Int =
    val idx = currentTrackIdx
    currentTrackIdx = (currentTrackIdx + 1) % trackCount
    idx

  /** Returns the current playable notes at the given time. */
  def currentNotes(currentTime: Double): Seq[PlayableNote[T]] =
    val lookAhead = currentTime + 0.1

    // Consume notes from the iterator up to the lookahead window
    while noteStream.hasNext && noteStream.head.start <= lookAhead do
      val timing = noteStream.next()

      // Only schedule notes that are still active (haven't finished yet)
      if timing.finish > currentTime then
        val nextTrackIdx = getNextTrackIdx()
        tracks(nextTrackIdx) = PlayableNote(
          data = timing.note.data,
          idx = nextTrackIdx,
          gate = timedTrigger(
            timing.start - startTime,
            timing.note.duration * secPerBeat,
            seqKey + nextTrackIdx
          )
        )

        if debug then
          println(
            s"$seqKey scheduled note on track $nextTrackIdx at ${timing.start}"
          )

    tracks.toSeq

// === helpers ===

/** Creates a timed trigger signal for Elementary Audio.
  *
  * @param start
  *   Start time in seconds
  * @param duration
  *   Duration in seconds
  * @param key
  *   Unique key for memoization
  */
def timedTrigger(start: Double, duration: Double, key: String): AudioNode =
  val t = time / sr
  val startNode = start ° (key + "_start")
  val endNode = (start + duration) ° (key + "_end")
  (t >= startNode) * (t < endNode)
