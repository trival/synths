import ../elemaudio


proc bassdrum* (gate: AudioNode): AudioNode =
  let fq = 100.0
  let spectrum = cycle(
    fq + 200.0 * cycle(50.0)
  )
  let env = adsr(@0.001, @0.5, @0.0, @0.5, gate)
  spectrum * env

