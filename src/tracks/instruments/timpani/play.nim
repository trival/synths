import ../../../lib_nim/elemaudio
import ../../../lib_nim/music

let fqFactor1 = 1.0
let fqFactor2 = 1.5
let fqFactor3 = 1.98
let fqFactor4 = 2.44

let amp1 = 1.0
let amp2 = 0.8
let amp3 = 0.6
let amp4 = 0.2

let decay1 = 4.5
let decay2 = 7.5
let decay3 = 9.0
let decay4 = 8.5

let ampNoise = 0.1
let decayNoise = 2.0

proc env (decay: float, gate: AudioNode): AudioNode =
  let d = @decay
  adsr(@0.01, d, @0.0, d, gate)

proc timpani (baseFq: AudioNode, gate: AudioNode): AudioNode =
  let fq1 = baseFq * fqFactor1
  let fq2 = baseFq * fqFactor2
  let fq3 = baseFq * fqFactor3
  let fq4 = baseFq * fqFactor4

  let env1 = env(decay1, gate)
  let env2 = env(decay2, gate)
  let env3 = env(decay3, gate)
  let env4 = env(decay4, gate)

  let sig1 = fq1.cycle * env1 * amp1
  let sig2 = fq2.cycle * env2 * amp2
  let sig3 = fq3.cycle * env3 * amp3
  let sig4 = fq4.cycle * env4 * amp4

  let envNoise = env(decayNoise, gate)
  let noiseSig = noise() * envNoise * ampNoise

  sig1 + sig2 + sig3 + sig4 + noiseSig

var lastNote = [0, 0, 0, 0, 0]

proc play (midiNotes: array[5, float]): AudioNode =
  echo midiNotes

  result = @0.0

  var playing = 0.0

  for i in 0 .. 4:
    let note = midiNotes[i]
    var gate = 0.0
    if note > 0.0:
      gate = 1.0
      playing += 1.0
      lastNote[i] = note.toInt

    let fq = lastNote[i].toFrequency
    echo i, " ", fq

    let fqNode = fq @ "fq" & $i
    let gateNode = gate @ "gate" & $i

    # let sig = fqNode.cycle * gateNode
    let sig = timpani(fqNode, gateNode)
    result += sig

  if playing > 0.0:
    result = result / playing

{. emit: "export {`play` as play}" .}
