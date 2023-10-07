import { NodeRepr_t, el } from '@elemaudio/core'

export const midiToFc = (midi: number) => {
	return 2 ** ((midi - 69) / 12) * 440
}

export type NoteName =
	| 'C'
	| 'C#'
	| 'D'
	| 'D#'
	| 'E'
	| 'F'
	| 'F#'
	| 'G'
	| 'G#'
	| 'A'
	| 'A#'
	| 'B'

export type Note = {
	note: NoteName
	octave: number
}

export const noteToMidi = (note: Note) => {
	const { note: name, octave } = note
	const tones: NoteName[] = [
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
		'A',
		'A#',
		'B',
	]
	const toneIndex = tones.indexOf(name)
	return (octave + 1) * 12 + toneIndex
}

export const fit1110 = (value: number | NodeRepr_t) => {
	return el.mul(el.add(value, 1), 0.5)
}

export const fit1011 = (value: number | NodeRepr_t) => {
	return el.sub(el.mul(value, 2), 1)
}
