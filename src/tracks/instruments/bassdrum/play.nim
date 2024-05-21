
import ../../../lib_nim/elemaudio

proc bassdrum* (gate: AudioNode): AudioNode =
  let duration = @0.9
  let noiseDuration = @0.01
  let env = adsr(@0.01, duration, @0.0, duration, gate)
  let envNoise = adsr(@0.01, noiseDuration, @0.0, noiseDuration, gate)

  let fq = 22.5 + env * 90.0

  let spectrum = cycle(
    fq + 450.0 * cycle(45.0)
  )
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


proc play (midiNotes: array[5, float]): AudioNode =
  echo midiNotes

  let note = midiNotes[0]
  var gate = 0.0
  if note > 0.0:
    gate = 1.0

  let gateNode = gate @ "gate"

  bassdrum(gateNode)

{. emit: "export {`play` as play}" .}
