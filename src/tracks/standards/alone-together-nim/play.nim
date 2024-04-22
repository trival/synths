import ../../../lib_nim/elemaudio
import ../../../lib_nim/music
import ../../../lib_nim/sequencer

let s = (G, 2).scale minor

let null = 0
proc note (duration: float, scaleIndex: int): MelodyNote[int] = (duration, s[scaleIndex - 1])
proc sharp (n: MelodyNote[int]): MelodyNote[int] = (n[0], n[1] + 1)
proc brk (duration: float): MelodyNote[int] = (duration, null)

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
].toSequence null

let bpm = 105.0
let release = 2.5

var bassSeq = createSequencer(bassA, null, bpm=bpm, seqKey="bass")

proc play* (time: float): AudioNode =
  let bassNotes = bassSeq.currentNotes time

  var bass = @0.0
  for n in bassNotes:
    let fq = n.data.toFrequency @ ("b" & $n.idx)
    let amount = fq * 2.41

    let fq2 = fq + saw(fq + 0.5.cycle * fq * 0.015) * amount

    let sound = lowpass(fq * 2.5, @2.0, fq2.triangle * 0.5)

    let env = adsr(@0.3, @0.3, @0.6, @release, n.gate)

    bass += sound * env

  bass * 0.5
  # (G, 2).toFrequency.cycle

{. emit: "export {`play` as play}" .}
