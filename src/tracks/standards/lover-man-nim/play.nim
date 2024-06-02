import ../../../lib_nim/elemaudio
import ../../../lib_nim/music
import ../../../lib_nim/sequencer

# === A === (2 times)

# Dm7 G7
# Dm7 G7
# Gm7 C7
# Gm7 C7

# F7
# Bb7
# Abm7 Db7 Gm7 C7
# 1. Fmaj7 E0 A7, 2. Fmaj7 E7b9

# === B ===

# Am Am#7
# Am7 D7
# Gmaj7 Am7
# Bm7 Am7 D7

# Gm Gm#7
# Gm7 C7
# Fmaj7
# E07 A7b9

# === A ===

# Dm7 G7
# Dm7 G7
# Gm7 C7
# Gm7 C7

# F7
# Bb7
# Abm7 Db7 Gm7 C7
# Fmaj7


let s = (F, 2).scale major

proc chrd (scaleNote: int, chordName: Chord, flat = false): seq[int] =
  var n = s.note scaleNote

  if flat:
    n -= 1

  n.chord chordName

let
  c = -3.chrd maj # !
  d = -2.chrd maj
  dm = -2.chrd min # !
  e = -1.chrd maj
  ed = -1.chrd dim # !
  f = 1.chrd maj # !
  g = 2.chrd maj
  gm = 2.chrd min # !
  a = 3.chrd maj
  am = 3.chrd min # !
  bb = 4.chrd maj # !
  bm = 5.chrd(min, true)

let beat = @[
  (0/6, 1.5),
  (4/6, 0.5),
  (5/6, 0.5)
]

proc p (chord: seq[int]): Sequence[int] =
  chord.withBeat(beat).toSequence(4.0)

let bassNotesA =
  dm.p &
  g.invert(-2).reverse.p &
  dm.p &
  g.invert(-2).reverse.p &

  gm.p &
  c.invert.reverse.p &
  gm.p &
  c.invert.reverse.p &

  f.p &
  f.invert.reverse.p &
  bb.p &
  bb.invertDown.reverse.p &

  @[s.note(3).flat, s.note(-2).flat, s.note(1)].p &
  @[s.note(2), s.note(-3), s.note(-1)].p &
  f.p

let bassAEnd1 = @[s.note(-1), s.note(3), s.note(2)].p
let bassAEnd2 = e.reverse.p
let bassAEnd3 = @[s.note(1)].withBeat(@[(0.0, 1.5)]).toSequence(4.0)

let bassNotesB =
  am.p &
  am.invertDown.reverse.p &
  am.p &
  d.reverse.p &

  g.p &
  am.reverse.p &
  bm.p &
  @[s.note(7), s.note(3), s.note(1).sharp].p &

  gm.p &
  gm.invertDown.reverse.p &
  gm.p &
  d.reverse.p &

  f.p &
  am.invertDown.reverse.p &
  ed.p &
  a.invertDown.reverse.p

let bassSequence =
  bassNotesA &
  bassAEnd1 &
  bassNotesA &
  bassAEnd2 &
  bassNotesB &
  bassNotesA &
  bassAEnd3

var bassSeq = createSequencer(bassSequence, 0)

let release = 1.5

proc play* (time: float): AudioNode =
  let bassNotes = bassSeq.currentNotes time

  var bassSound = 0.0 @ "bass"

  for n in bassNotes:
    let env = adsr(@0.1, @0.2, @0.6, @release, n.gate)
    let sound = (n.data.toFrequency.cycle + (n.data + 12).toFrequency.cycle) * 0.5

    bassSound += sound * env

  bassSound * 0.7


{. emit: "export {`play` as play}" .}
