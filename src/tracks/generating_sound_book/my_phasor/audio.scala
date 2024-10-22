package audio.gsb.my_phasor

import scala.scalajs.js.annotation.*
import audio.libs.elemaudio.{*, given}

def myPhasor(hz: AudioNode) =
  (hz / sr).accum((hz * 1.0).train)

@JSExportTopLevel("gsbMyPhasor")
def renderAudio(hz: Double) = myPhasor(hz).table("sample1")
