package audio.libs.music

enum NoteName:
  case C, Cx, Db, D, Dx, Eb, E, F, Fx, Gb, G, Gx, Ab, A, Ax, Bb, B

export NoteName.*

type Note = (name: NoteName, octave: Int)

def noteToMidi(note: Note): Int =
  val (name, octave) = note
  val base = name match
    case C  => 0
    case Cx => 1
    case Db => 1
    case D  => 2
    case Dx => 3
    case Eb => 3
    case E  => 4
    case F  => 5
    case Fx => 6
    case Gb => 6
    case G  => 7
    case Gx => 8
    case Ab => 8
    case A  => 9
    case Ax => 10
    case Bb => 10
    case B  => 11
  base + (octave + 1) * 12

def midiToFrequency(midi: Int): Double =
  440.0 * Math.pow(2.0, (midi - 69) / 12.0)

def noteToFrequency(note: Note): Double =
  midiToFrequency(noteToMidi(note))

extension (note: Note)
  def toMidi: Int = noteToMidi(note)
  def toFrequency: Double = noteToFrequency(note)

val cmidi = (C, 3).toMidi
