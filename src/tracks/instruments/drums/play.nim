
import ../../../lib_nim/elemaudio
import ../../../lib_nim/sequencer

proc bassdrum* (gate: AudioNode): AudioNode =
  let duration = @0.9
  let noiseDuration = @0.01
  let env = adsr(@0.01, duration, @0.0, duration, gate)
  let envNoise = adsr(@0.01, noiseDuration, @0.0, noiseDuration, gate)

  let fq = 22.5 + env * 90.0

  let spectrum = cycle(fq + 450.0 * 45.0.cycle)
    .lowpass(fq + 45.0, @1.0)
    .highpass(@45.0, @1.0)

  let noise =
    # triangle(
    #   600.0 + 400.0 * triangle(20.0)
    # )
    noise()
    .lowpass(800.0 + 8000.0 * envNoise, @1.0)
    .highpass(@400.0, @1.0)

  (noise * 0.015 + spectrum) * env * 0.8


proc snare* (gate: AudioNode, intensity: AudioNode): AudioNode =
  let duration = @0.4
  let env = adsr(@0.01, duration, @0.0, duration, gate)
  let env2 = adsr(@0.01, duration / 2.0, @0.0, duration / 2.0, gate)

  let fq1 = 111.0 + 175.0
  let band1 = cycle(fq1 + 400.0 * 111.0.cycle)
    .lowpass(@fq1, @1.0) * env
  let fq2 = 111.0 + 224.0
  let band2 = cycle(fq2 + 400.0 * 111.0.cycle)
    .lowpass(@fq2, @1.0) * env

  let band3 = 180.0.cycle * env2
  let band4 = 330.0.cycle * env2

  (band1 + band2 + band3 + band4) * intensity * 0.5

type Drum =
  enum
    Kick
    Snare
    Off

let beat: Melody[Drum] = @[
  (duration: 1.0, data: Kick),
  (duration: 1.0, data: Snare),
]

var seq1 = createSequencer(beat.toSequence(Off), Off, bpm=80.0, trackCount=1)

proc play (midiNotes: array[5, float], time: float): AudioNode =
  echo midiNotes

  let note = midiNotes[0]
  var gate = 0.0
  if note > 0.0:
    gate = 1.0

  let gateNode = gate @ "gate"

  let notes = seq1.currentNotes(time)
  let hit = notes[0]
  echo notes
  let sound = if hit.data == Kick:
    bassdrum(hit.gate)
  elif hit.data == Snare:
    snare(hit.gate, @1.0)
  else:
    @0.0

  bassdrum(gateNode) + sound

{. emit: "export {`play` as play}" .}
