import ../../../lib_nim/elemaudio
import ../../../lib_nim/music
import ../../../lib_nim/sequencer

let s = (G, 2).scale minor

proc note (duration: float, scaleIndex: int): MelodyNote[int] = (duration, s[scaleIndex])
func sharp (n: MelodyNote[int]): MelodyNote[int] = (n[0], n[1] + 1)
func brk (duration: float): MelodyNote[int] = (duration, 0)

let bassA = @[
  3.0.note 1,
  1.0.brk,
  3.0.note 2,
  1.0.note 5,

  3.0.note 1,
  1.0.brk,
  3.0.note 2,
  1.0.note 5,

  3.0.note 1,
  1.0.brk,
  3.0.note 5,
  1.0.note 1,

  3.0.note 4,
  1.0.brk,
  3.0.note 4,
  1.0.brk,

  3.0.note(6).sharp,
  1.0.note 2,
  3.0.note 4,
  1.0.note 7,

  3.0.note 3,
  1.0.brk,
  3.0.note 2,
  1.0.note 5,

  2.0.note 1,
  2.0.note(3).sharp,
  3.0.note 2,
  1.0.brk,
]

let bpm = 105.0
let release = 2.5

proc play* (time: float): AudioNode =
  cycle 440.0

{. emit: "export {`play` as play}" .}
