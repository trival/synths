import { ElemNode } from '@elemaudio/core'
import { InputDeclaration } from '../ui/input.jsx'

export interface MidiNote {
	note: number
	attack: number
}

export interface Track {
	text: string
	inputs?: InputDeclaration[]
	useMidi?: boolean
	withKeyboardStartingAt?: number
	renderAudio: (
		inputVals: number[],
		ctx: AudioContext,
		keysPressed: number[],
		midi: MidiNote[],
	) => ElemNode | ElemNode[]
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
