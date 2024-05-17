import elemaudio

type
  Sound* = tuple
    signal: AudioNode
    gain: AudioNode
