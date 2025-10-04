package audio.tracks.scala.sequencer

import audio.libs.elemaudio.{*, given}
import audio.libs.music.NoteName.*
import audio.libs.music.ScaleName.*
import audio.libs.music.{*, given}
import audio.libs.sequencer.{*, given}

import scala.scalajs.js.annotation.*

// === Helper Functions ===

case class SynthSignal(sound: AudioNode, env: AudioNode)

def composePolySynth(signals: Seq[SynthSignal]): AudioNode =
  if signals.isEmpty then 0.0
  else
    val sum = signals
      .map(s => s.sound * s.env * s.env)
      .reduce(_ + _)
    val volume = signals.map(_.env).reduce(_ + _)
    sum / volume

// Create the melody: chords with rests in between
val cMaj = (C, 3).toMidi.chord(Chord.Major)
val fMaj = (F, 2).toMidi.chord(Chord.Major)
val gMaj = (G, 2).toMidi.chord(Chord.Major)
val aMin = (A, 2).toMidi.chord(Chord.Minor)

val notes: Melody[Int] = Seq(
  MelodyNote(1.0, Some(cMaj(0))),
  MelodyNote(1.0, Some(cMaj(1))),
  MelodyNote(1.0, Some(cMaj(2))),
  MelodyNote(1.0, None), // rest
  MelodyNote(1.0, Some(fMaj(0))),
  MelodyNote(1.0, Some(fMaj(1))),
  MelodyNote(1.0, Some(fMaj(2))),
  MelodyNote(1.0, None), // rest
  MelodyNote(1.0, Some(gMaj(0))),
  MelodyNote(1.0, Some(gMaj(1))),
  MelodyNote(1.0, Some(gMaj(2))),
  MelodyNote(1.0, None), // rest
  MelodyNote(1.0, Some(aMin(0))),
  MelodyNote(1.0, Some(aMin(1))),
  MelodyNote(1.0, Some(aMin(2))),
  MelodyNote(1.0, None) // rest
)

val sequence = melodyToSequence(notes)
val sequencer =
  new Sequencer(sequence, trackCount = 2, bpm = 140.0, debug = true)

// === Main Audio Function ===

@JSExportTopLevel("scalaSequencerTest")
def scalaSequencerTest(tick: Double): AudioNode =
  val activeNotes = sequencer.currentNotes(tick)

  activeNotes
    .map: n =>
      220.cycle * n.gate
    .reduce:
      _ + _
  // 120.cycle
