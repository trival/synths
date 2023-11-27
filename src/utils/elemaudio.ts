import { ElemNode, el } from '@elemaudio/core'

export const fit1110 = (value: ElemNode) => {
	return el.mul(el.add(value, 1), 0.5)
}

export const fit1011 = (value: ElemNode) => {
	return el.sub(el.mul(value, 2), 1)
}

interface SynthSignal {
	sound: ElemNode
	env: ElemNode
}

export const composePolySynth = (signals: SynthSignal[]) => {
	if (signals.length === 0) {
		return 0
	}
	const sum = el.add(...signals.map((s) => el.mul(s.sound, s.env, s.env)))
	const volume = el.add(...signals.map((s) => s.env))
	return el.div(sum, volume)
}

export const timedTrigger = (
	startTime: number,
	endTime: number,
	keyPrefix: string,
) => {
	const time = el.div(el.time(), el.sr())
	return el.mul(
		el.ge(
			time,
			el.const({
				key: keyPrefix + '_start',
				value: startTime,
			}),
		),
		el.le(
			time,
			el.const({
				key: keyPrefix + '_end',
				value: endTime,
			}),
		),
	)
}

export const am = (o: ElemNode, lfo: ElemNode, modAmount: ElemNode) => {
	return el.mul(
		o,
		el.add(1, el.mul(lfo, modAmount)),
		el.div(1, el.add(1, modAmount)),
	)
}
