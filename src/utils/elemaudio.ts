import { NodeRepr_t, el } from '@elemaudio/core'

export type AudioNode = NodeRepr_t | number
export const fit1110 = (value: AudioNode) => {
	return el.mul(el.add(value, 1), 0.5)
}

export const fit1011 = (value: AudioNode) => {
	return el.sub(el.mul(value, 2), 1)
}
