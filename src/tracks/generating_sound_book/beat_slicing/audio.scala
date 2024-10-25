package audio.gsb.beat_slicing

import audio.libs.elemaudio.{*, given}

import scala.scalajs.js.annotation.*

@JSExportTopLevel("gsbBeatSlicing")
def renderAudio(bpm: Double, slices: Double) =
  val beatsInSample = 8
  val freq = bpm / 60 / beatsInSample

  val phase = freq.phasor * slices

  val beatPhase = phase.wrap01

  val train = (beatPhase - beatPhase.z).abs > 0.5

  val sig = beatPhase
    // .add((noise * slices).floor.latch(train))
    .add((phase * 1.2 + (noise * 0.2).fit0111).floor.latch(train))
    .div(slices)

  sig.wrap01.table("sample1") // .lowpass(2000, 1)
