package audio.gsb.dynamic_playback

import scala.scalajs.js.annotation.*
import scala.scalajs.js
import audio.libs.elemaudio.{*, given}

val rate = (0.1.cycle + 1) * 0.5

val playback = rate.table("sample1")

@JSExportTopLevel("gsbMyDynPlayback")
def audioChannels() = js.Array(playback, playback)
