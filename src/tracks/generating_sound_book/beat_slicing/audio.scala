package audio.gsb.beat_slicing

import audio.libs.elemaudio.{*, given}

import scala.scalajs.js.annotation.*

@JSExportTopLevel("gsbBeatSlicing")
def renderAudio(bpm: Double, slices: Double, rate: Double, scrub: Double) =
  val beatsInSample = 8
  val phase = bpm / 60 / beatsInSample

  val sig = phase.phasor * rate + scrub

  // Todo: Add the code to slice the beat

  sig.wrap01.table("sample1").lowpass(2000, 1)
