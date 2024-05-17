import ../../../lib_nim/elemaudio
import ../../../lib_nim/music
import ../../../lib_nim/instruments/timpani


var lastNote = [0, 0, 0, 0, 0]

proc play (midiNotes: array[5, float]): AudioNode =
  echo midiNotes

  var sig = @0.0

  for i in 0 .. 4:
    let note = midiNotes[i]
    var gate = 0.0
    if note > 0.0:
      gate = 1.0
      lastNote[i] = note.toInt

    let fq = lastNote[i].toFrequency
    echo i, " ", fq

    let fqNode = fq @ "fq" & $i
    let gateNode = gate @ "gate" & $i

    let noteSig = timpani(fqNode, gateNode)
    sig += noteSig

  sig

{. emit: "export {`play` as play}" .}
