import { NodeRepr_t, el } from '@elemaudio/core'

export interface Track {
	text: string
	renderAudio: (
		render: (left: NodeRepr_t | number, right: NodeRepr_t | number) => void,
	) => void
}

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

const basicChord: Track = {
	text: 'Chord',
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

export const tracks: Track[] = [basic, basicMul, basicAdd, basicChord]
