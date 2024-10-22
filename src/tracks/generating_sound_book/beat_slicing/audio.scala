package audio.gsb.beat_slicing

import scala.scalajs.js.annotation.*
import audio.libs.elemaudio.{*, given}

@JSExportTopLevel("gsbBeatSlicing")
def renderAudio() =
  val rate = 0.1.phasor

  // Todo: Add the code to slice the beat

  rate.table("sample1")
