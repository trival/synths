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
	const volume = el.add(...signals.map((s) => s.env))
	return el.div(sum, volume)
}

export const timedTrigger = (
	startTime: number,
	endTime: number,
	keyPrefix: string,
) => {
	return el.mul(
		el.ge(
			el.div(el.time(), el.sr()),
			el.const({
				key: keyPrefix + '_start',
				value: startTime,
			}),
		),
		el.le(
			el.div(el.time(), el.sr()),
			el.const({
				key: keyPrefix + '_end',
				value: endTime,
			}),
		),
	)
}
