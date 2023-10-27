module Tracks.FsBasic

open FsAudio

let render () =
  let f1 = cycle (num 440)
  let f2 = cycle (num 441)
  let n = (f1 + f2) / num 2
  n.n
