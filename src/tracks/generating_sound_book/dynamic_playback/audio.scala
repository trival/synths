package audio.gsb.dynamic_playback

import scala.scalajs.js.annotation.*
import audio.libs.elemaudio.{*, given}

@JSExportTopLevel("gsbDynPlayback")
def renderAudio() =
  val rate = 0.1.cycle.fit1101

  rate.table("sample1")
