package audio.tracks.scala.sequencer

import audio.libs.elemaudio.{*, given}
import audio.libs.music.NoteName.*
import audio.libs.music.ScaleName.*
import audio.libs.music.{*, given}
import audio.libs.sequencer.{*, given}

import scala.scalajs.js.annotation.*

// === Helper Functions ===

/** A synthesizer signal with sound and envelope components. */
case class SynthSignal(sound: AudioNode, env: AudioNode)

/** Composes multiple polyphonic synthesizer signals into a single output.
  *
  * Implements amplitude-weighted mixing to maintain consistent volume as voices
  * are added or removed.
  */
def composePolySynth(signals: Seq[SynthSignal]): AudioNode =
  if signals.isEmpty then 0.0
  else
    val sum = signals
      .map(s => s.sound * s.env * s.env)
      .reduce((a, b) => El.add(a, b))
    val volume = signals.map(_.env).reduce((a, b) => El.add(a, b))
    sum / volume

// === Main Audio Function ===

@JSExportTopLevel("scalaSequencerTest")
def scalaSequencerTest(tick: Double): AudioNode =
  val releaseTime = 0.5

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
  val sequencer = new Sequencer(sequence, trackCount = 3, bpm = 140.0)

  val activeNotes = sequencer.currentNotes(tick)

  if activeNotes.isEmpty then 0.0
  else
    composePolySynth(
      activeNotes.map(n =>
        SynthSignal(
          sound = n.data.toFrequency.cycle,
          env = n.gate.adsr(0.1, 0.2, 0.6, releaseTime)
        )
      )
    ) * 0.7
