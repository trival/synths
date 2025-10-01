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
  inline def toMidi: Int = noteToMidi(note)
  inline def toFrequency: Double = noteToFrequency(note)

extension (midi: Int)
  inline def toFrequency: Double = midiToFrequency(midi)
  inline def sharp: Int = midi + 1
  inline def flat: Int = midi - 1

extension (midiChord: List[Int])
  def sharp3th: List[Int] =
    if midiChord.length >= 2 then midiChord.updated(1, midiChord(1) + 1)
    else midiChord

  def flat3th: List[Int] =
    if midiChord.length >= 2 then midiChord.updated(1, midiChord(1) - 1)
    else midiChord

  def sharp5th: List[Int] =
    if midiChord.length >= 3 then midiChord.updated(2, midiChord(2) + 1)
    else midiChord

  def flat5th: List[Int] =
    if midiChord.length >= 3 then midiChord.updated(2, midiChord(2) - 1)
    else midiChord

  def sharp7th: List[Int] =
    if midiChord.length >= 4 then midiChord.updated(3, midiChord(3) + 1)
    else midiChord

  def flat7th: List[Int] =
    if midiChord.length >= 4 then midiChord.updated(3, midiChord(3) - 1)
    else midiChord

  def sharp9th: List[Int] =
    if midiChord.length >= 5 then midiChord.updated(4, midiChord(4) + 1)
    else midiChord

  def flat9th: List[Int] =
    if midiChord.length >= 5 then midiChord.updated(4, midiChord(4) - 1)
    else midiChord

  def sharp11th: List[Int] =
    if midiChord.length >= 6 then midiChord.updated(5, midiChord(5) + 1)
    else midiChord

  def flat11th: List[Int] =
    if midiChord.length >= 6 then midiChord.updated(5, midiChord(5) - 1)
    else midiChord

  /** Skip the specified chord note (1-based index).
    *
    * For example, to skip the third note of a chord, use `skip(3)`.
    *
    * @param chordNote
    *   1-based index of the chord note to skip (e.g., 1 = root, 2 = third, 3 =
    *   fifth, etc.)
    * @return
    *   New list of MIDI notes with the specified note removed.
    */
  def skip(chordNote: Int): List[Int] =
    midiChord.zipWithIndex.collect {
      case (note, idx) if idx != chordNote - 1 => note
    }

  /** Skip all chord notes in the specified set (1-based indices). For example,
    * to skip the third and fifth notes of a chord, use `skip(Set(3, 5))`.
    *
    * @param chordNotes
    *   Set of 1-based indices of the chord notes to skip (e.g., 1 = root, 2 =
    *   third, 3 = fifth, etc.)
    * @return
    *   New list of MIDI notes with the specified notes removed.
    */
  def skip(chordNotes: Set[Int]): List[Int] =
    midiChord.zipWithIndex.collect {
      case (note, idx) if !chordNotes.map(_ - 1).contains(idx) => note
    }

enum ScaleName:
  case Major, Minor, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian,
    PentatonicMajor, PentatonicMinor, MelodicMinor, HarmonicMinor

  def intervals: List[Int] = this match
    case Major           => List(2, 2, 1, 2, 2, 2, 1)
    case Minor           => List(2, 1, 2, 2, 1, 2, 2)
    case Dorian          => List(2, 1, 2, 2, 2, 1, 2)
    case Phrygian        => List(1, 2, 2, 2, 1, 2, 2)
    case Lydian          => List(2, 2, 2, 1, 2, 2, 1)
    case Mixolydian      => List(2, 2, 1, 2, 2, 1, 2)
    case Aeolian         => List(2, 1, 2, 2, 1, 2, 2)
    case Locrian         => List(1, 2, 2, 1, 2, 2, 2)
    case PentatonicMajor => List(2, 2, 3, 2, 3)
    case PentatonicMinor => List(3, 2, 2, 3, 2)
    case MelodicMinor    => List(2, 1, 2, 2, 2, 2, 1)
    case HarmonicMinor   => List(2, 1, 2, 2, 1, 3, 1)

class MidiScale(val rootMidi: Int, val name: ScaleName):
  /** Returns the MIDI note value for a given scale degree.
    *
    * The degree parameter represents musical scale degrees (1-based):
    *   - degree 1: root/tonic
    *   - degree 2: second scale note
    *   - degree 5: fifth scale note
    *   - degree 8: octave above root (in 7-note scales)
    *   - degree 9: ninth (same as 2nd but one octave up)
    *   - degree 0: special case, treated as degree 1 (tonic)
    *
    * Supports infinite wrapping in both directions:
    *   - Positive degrees wrap around through octaves (e.g., degree 15 in Major
    *     \= degree 1 + 2 octaves)
    *   - Negative degrees go backwards (e.g., degree -1 = 7th from lower octave
    *     in 7-note scales)
    *
    * @param degree
    *   the scale degree (1-based, with 0 = tonic, supports negative and values
    *   beyond scale length)
    * @return
    *   MIDI note number
    */
  def note(degree: Int): Int =
    val intervals = name.intervals
    val scaleLength = intervals.length

    // Treat degree 0 as degree 1 (tonic)
    val adjustedDegree = if degree == 0 then 1 else degree

    // Convert to 0-based index
    val index = adjustedDegree - 1

    val semitones = if index >= 0 then
      // Positive: calculate octaves and position within scale
      val octaves = index / scaleLength
      val position = index % scaleLength
      octaves * 12 + intervals.take(position).sum
    else
      // Negative: work backwards through intervals
      val absIndex = -index
      val octaves = (absIndex - 1) / scaleLength + 1
      val position = absIndex % scaleLength
      val positionAdjusted = if position == 0 then scaleLength else position
      val intervalSum = intervals.takeRight(positionAdjusted).sum
      -(octaves - 1) * 12 - intervalSum

    rootMidi + semitones

  inline def second = note(2)
  inline def third = note(3)
  inline def fourth = note(4)
  inline def fifth = note(5)
  inline def sixth = note(6)
  inline def seventh = note(7)
  inline def octave = note(8)
  inline def ninth = note(9)
  inline def tenth = note(10)
  inline def eleventh = note(11)
  inline def twelfth = note(12)
  inline def thirteenth = note(13)

  def chordFrom(degree: Int): List[Int] =
    val root = note(degree)
    val third = note(degree + 2)
    val fifth = note(degree + 4)
    List(root, third, fifth)

  def seventhChordFrom(degree: Int): List[Int] =
    val seventh = note(degree + 6)
    chordFrom(degree) :+ seventh

  def ninthChordFrom(degree: Int): List[Int] =
    val ninth = note(degree + 8)
    seventhChordFrom(degree) :+ ninth

object MidiScale:
  def apply(root: Note, name: ScaleName): MidiScale =
    new MidiScale(root.toMidi, name)
  def apply(midiRoot: Int, name: ScaleName): MidiScale =
    new MidiScale(midiRoot, name)

extension (degree: Int)
  def note(using scale: MidiScale): Int = scale.note(degree)
  def chord(using scale: MidiScale): List[Int] = scale.chordFrom(degree)
  def seventhChord(using scale: MidiScale): List[Int] =
    scale.seventhChordFrom(degree)
  def ninthChord(using scale: MidiScale): List[Int] =
    scale.ninthChordFrom(degree)

enum Chord:
  case Major, Minor, Dominant7, Major7, Minor7, Diminished, HalfDiminished,
    Augmented

  def intervals: List[Int] = this match
    case Major          => List(0, 4, 7)
    case Minor          => List(0, 3, 7)
    case Dominant7      => List(0, 4, 7, 10)
    case Major7         => List(0, 4, 7, 11)
    case Minor7         => List(0, 3, 7, 10)
    case Diminished     => List(0, 3, 6)
    case HalfDiminished => List(0, 3, 6, 10)
    case Augmented      => List(0, 4, 8)

object Chord:
  def apply(midiRoot: Int, chordType: Chord): List[Int] =
    chordType.intervals.map(interval => midiRoot + interval)

  def apply(root: Note, chordType: Chord): List[Int] =
    val rootMidi = root.toMidi
    chordType.intervals.map(interval => rootMidi + interval)

extension (midiRoot: Int)
  def chord(chordType: Chord): List[Int] = Chord(midiRoot, chordType)
  def seventhChord: List[Int] = chord(Chord.Dominant7)
