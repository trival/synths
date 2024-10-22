package audio.gsb.my_phasor

import scala.scalajs.js.annotation.*
import scala.scalajs.js
import audio.libs.elemaudio.{*, given}

def myPhasor(hz: AudioNode) =
  (hz / sr).accum((hz * 1.0).train)

val playback = myPhasor(0.25).table("sample1")

@JSExportTopLevel("gsbMyPhasor")
def audioChannels() = js.Array(playback, playback)
