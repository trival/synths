import { NodeRepr_t, el } from '@elemaudio/core'

export type AudioNode = NodeRepr_t | number
export const fit1110 = (value: AudioNode) => {
	return el.mul(el.add(value, 1), 0.5)
}

export const fit1011 = (value: AudioNode) => {
	return el.sub(el.mul(value, 2), 1)
}

interface SynthSignal {
	sound: AudioNode
	env: AudioNode
}

export const composePolySynth = (signals: SynthSignal[]) => {
	const sum = el.add(...signals.map((s) => el.mul(s.sound, s.env)))

	const [e1, ...es] = signals.map((s) => s.env)
	const playingCount = es.reduce(
		(acc, e) => el.add(acc, el.ge(e, 0.00000001)),
		el.ge(e1, 0.00000001),
	)

	return el.div(sum, el.pow(playingCount, 0.5))
}
