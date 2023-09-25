import { NodeRepr_t, el } from '@elemaudio/core'

const basic: Track = {
	text: 'Basic stereo',
	renderAudio: (render) => {
		const left = el.cycle(440)
		const right = el.cycle(441)
		render(left, right)
	},
}

const basicMul: Track = {
	text: 'Fq mul',
	renderAudio: (render) => {
		const node = el.mul(el.cycle(440), el.cycle(441))
		render(node, node)
	},
}

const basicAdd: Track = {
	text: 'Fq add',
	renderAudio: (render) => {
		const added = el.add(el.cycle(440), el.cycle(441))
		const node = el.mul(added, 0.5)
		render(node, node)
	},
}

const basicChordSin: Track = {
	text: 'Chord cycle',
	renderAudio: (render) => {
		const baseNote = 110
		const chord = el.add(
			el.cycle(baseNote * 2),
			el.cycle(baseNote * 3),
			el.cycle(baseNote * 4),
			el.cycle((baseNote * 5) / 2),
		)
		const node = el.mul(chord, 0.25)
		render(node, node)
	},
}

const basicChordSaw: Track = {
	text: 'Chord saw',
	renderAudio: (render) => {
		const baseNote = 110
		const chord = el.add(
			el.saw(baseNote * 2),
			el.saw(baseNote * 3),
			el.saw(baseNote * 4),
			el.saw((baseNote * 5) / 2),
		)
		const node = el.mul(chord, 0.25)
		render(node, node)
	},
}

const basicChordSquare: Track = {
	text: 'Chord square',
	renderAudio: (render) => {
		const baseNote = 110
		const chord = el.add(
			el.square(baseNote * 2),
			el.square(baseNote * 3),
			el.square(baseNote * 4),
			el.square((baseNote * 5) / 2),
		)
		const node = el.mul(chord, 0.25)
		render(node, node)
	},
}

export const tracks: Track[] = [
	basic,
	basicMul,
	basicAdd,
	basicChordSin,
	basicChordSaw,
	basicChordSquare,
]

export interface Track {
	text: string
	renderAudio: (
		render: (left: NodeRepr_t | number, right: NodeRepr_t | number) => void,
	) => void
}
