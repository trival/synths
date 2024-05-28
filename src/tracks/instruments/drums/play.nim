
import ../../../lib_nim/elemaudio
import ../../../lib_nim/sequencer

proc bassdrum* (gate: AudioNode): AudioNode =
  let duration = @0.6
  let noiseDuration = @0.03
  let env = adsr(@0.01, duration, @0.0, duration, gate)
  let envNoise = adsr(@0.01, noiseDuration, @0.0, noiseDuration, gate)

  let fq = 22.5 + env * 90.0

  let spectrum = cycle(fq + 190.0 * 45.0.cycle)
    .lowpass(fq + 45.0, @1.0)
    .highpass(@90.0, @1.0) * 0.8

  let noise =
    # triangle(
    #   600.0 + 400.0 * triangle(20.0)
    # )
    noise()
    .lowpass(400.0 + 8000.0 * envNoise, @1.0)
    .highpass(@200.0, @1.0)

  (noise * 0.015 + spectrum) * env * 0.8


proc snare* (gate: AudioNode, intensity: AudioNode): AudioNode =
  let duration = @0.3
  let env = adsr(@0.01, duration, @0.0, duration, gate)
  let env2 = adsr(@0.01, duration / 2.0, @0.0, duration / 2.0, gate)

  let fq1 = 111.0 + 175.0
  let band1 = cycle(fq1 + 400.0 * 111.0.cycle)
    .lowpass(@fq1, @1.0) * env * 0.5
  let fq2 = 111.0 + 224.0
  let band2 = cycle(fq2 + 400.0 * 111.0.cycle)
    .lowpass(@fq2, @1.0) * env * 0.6

  let band3 = 180.0.cycle * env2
  let band4 = 330.0.cycle * env2

  let noiseComponent = noise()
    .lowpass(@6000.0, @1.0)
    .highpass(@400.0, @1.0)

  ((band1 + band2 + band3 + band4) * (1.0 - intensity * 0.3) * 0.5 +
    noiseComponent * env * (0.3 + intensity * 0.3)) * (0.7 + intensity * 0.3)

type Drum =
  enum
    Kick
    Snare
    Off

let beat: Melody[Drum] = @[
  (duration: 1.0, data: Kick),
  (duration: 1.0, data: Snare),
]

var seq1 = createSequencer(beat.toSequence(Off), Off, bpm=65.0)

proc play (midiNotes: array[5, float], time: float): AudioNode =
  let notes = seq1.currentNotes(time)

  result = @0.0
  for hit in notes:
    if hit.data == Kick:
      result += bassdrum(hit.gate)
    elif hit.data == Snare:
      result += snare(hit.gate, @0.1)


{. emit: "export {`play` as play}" .}
