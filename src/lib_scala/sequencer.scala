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
  var notes = Seq.empty[SeqNote[T]]
  var duration = 0.0

  for seq <- seqs do
    for note <- seq.notes do
      notes = notes :+ SeqNote(
        start = duration + note.start,
        duration = note.duration,
        data = note.data
      )
    duration += seq.duration

  Sequence(notes, duration)

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

private case class Period(start: Double, finish: Double)

/** Creates a sequencer function that returns playable notes at each call.
  *
  * @param sequence
  *   The sequence to play
  * @param initData
  *   Initial data for tracks
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
  * @return
  *   Function that takes current time and returns playable notes
  */
def createSequencer[T](
    sequence: Sequence[T],
    initData: T,
    trackCount: Int = 2,
    bpm: Double = 120.0,
    repetitions: Int = 0,
    startTime: Double = 0.0,
    seqKey: String = "seq_trigger",
    debug: Boolean = false
): Double => Seq[PlayableNote[T]] =
  val secPerBeat = 60.0 / bpm
  val seqDuration = sequence.duration * secPerBeat

  // Create note intervals with wraparound for seamless looping
  var noteIntervals = sequence.notes.zipWithIndex.map((note, i) =>
    val start = note.start * secPerBeat
    val finish = start + note.duration * secPerBeat
    (Period(start, finish), i)
  )

  // Add previous loop's tail notes for seamless transitions
  val prevLoopNotes = noteIntervals
    .map((period, i) =>
      (Period(period.start - seqDuration, period.finish - seqDuration), i)
    )
    .filter(_._1.finish > 0)

  noteIntervals = prevLoopNotes ++ noteIntervals

  // Initialize tracks
  val tracks = (0 until trackCount)
    .map(i =>
      PlayableNote(
        data = initData,
        idx = i,
        gate = timedTrigger(0, 0, seqKey + i)
      )
    )
    .toArray

  // Track state
  var currentTrackIdx = 0
  val playingNotes = scala.collection.mutable.Map.empty[Int, Boolean]

  def getNextTrackIdx(): Int =
    val idx = currentTrackIdx
    currentTrackIdx = (currentTrackIdx + 1) % trackCount
    idx

  // Return the sequencer function
  (currentTime: Double) =>
    val currentLoop = floor((currentTime - startTime) / seqDuration)

    if repetitions == 0 || currentLoop < repetitions then
      val seqTime = currentTime - currentLoop * seqDuration

      noteIntervals.foreach { case (period, noteIdx) =>
        if period.start - 0.1 <= seqTime && period.finish > seqTime then
          if !playingNotes.getOrElse(noteIdx, false) then
            val note = sequence.notes(noteIdx)
            val start = period.start + currentLoop * seqDuration
            val nextTrackIdx = getNextTrackIdx()
            tracks(nextTrackIdx) = PlayableNote(
              data = note.data,
              idx = nextTrackIdx,
              gate = timedTrigger(
                start,
                note.duration * secPerBeat,
                seqKey + nextTrackIdx
              )
            )
            playingNotes(noteIdx) = true
        else playingNotes(noteIdx) = false
      }

      if debug then
        val playing = playingNotes.filter(_._2).keys.toSeq
        println(s"$seqKey $currentTrackIdx $playing")

    tracks.toSeq

// ============================================================================
// Elementary Audio Helper
// ============================================================================

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
  val t = time
  val startNode = start ° (key + "_start")
  val endNode = (start + duration) ° (key + "_end")
  (t >= startNode) && (t < endNode)
