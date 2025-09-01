package audio.gsb.my_phasor

import audio.libs.elemaudio.{*, given}

import scala.scalajs.js.annotation.*

def myPhasor(hz: AudioNode) =
  (hz / sr).accum((hz * 1.0).train)

@JSExportTopLevel("gsbMyPhasor")
def renderAudio(hz: Double) = myPhasor(hz).table("sample1")
