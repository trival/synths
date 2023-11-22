import { ElemNode } from '@elemaudio/core'
import { InputDeclaration } from '../input'

export interface Track {
	text: string
	inputs?: InputDeclaration[]
	renderAudio: (inputVals: number[], ctx: AudioContext) => ElemNode | ElemNode[]
}

export function rotate<T>(arr: T[], count: number = 1) {
	return arr.slice(count, arr.length).concat(arr.slice(0, count))
}

export function reverse<T>(arr: T[]) {
	return arr.slice().reverse()
}

export function mod(n: number, m: number) {
	return ((n % m) + m) % m
}
