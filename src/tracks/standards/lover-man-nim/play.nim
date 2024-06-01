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
  var note =
    if scaleNote >= 1:
      s[scaleNote - 1]
    elif scaleNote == 0:
      s[scaleNote]
    else:
      s[7 + scaleNote].octaveDown

  if flat:
    note -= 1

  note.chord chordName

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


let bassNull = 0
proc note (duration: int, scaleIndex: int): MelodyNote[int] = (duration.float, s[scaleIndex - 1])
proc sharp (n: MelodyNote[int]): MelodyNote[int] = (n[0], n[1] + 1)
proc brk (duration: float): MelodyNote[int] = (duration, bassNull)

proc play* (time: float): AudioNode =

  440.0.cycle

{. emit: "export {`play` as play}" .}
