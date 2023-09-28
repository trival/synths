import { NodeRepr_t, el } from '@elemaudio/core'
import { InputDeclaration, InputType } from './input'

const basic: Track = {
	text: 'Basic stereo',
	inputs: [
		{
			type: InputType.SLIDER,
			initialValue: 440,
			label: 'fc',
			max: 220 * 4,
			step: 10,
			min: 220,
		},
		{
			type: InputType.TOGGLE,
			initialValue: 1,
			label: 'Play',
		},
	],
	renderAudio: (render, vals) => {
		const play = vals[1]
		const fc = (vals[0] || 440) * play
		const left = el.cycle({ key: 'fc' }, fc)
		const right = el.cycle({ key: 'fc1' }, fc + 1)
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
	renderAudio(render) {
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
	renderAudio(render) {
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

const basicEnv: Track = {
	text: 'Gain Env',
	renderAudio(render) {
		const t = el.train(0.7)
		const env1 = el.env(el.tau2pole(0.2), el.tau2pole(0.05), t)
		const env2 = el.env(el.tau2pole(0.02), el.tau2pole(0.3), t)
		const n = el.mul(el.cycle(440), el.mul(el.add(env1, env2), 0.5))
		render(n, n)
	},
}

const basicNoiseFilter: Track = {
	text: 'seq noise Filter',
	renderAudio(render) {
		const t = el.le(el.phasor(6, 0), 0.6)
		const s = el.seq({ seq: [1, 0, 0, 1, 0, 1] }, t, 0)
		const envG = el.env(el.tau2pole(0.04), el.tau2pole(0.3), s)
		const sound = el.mul(el.pinknoise(), envG, 5)
		const n = el.lowpass(el.mul(envG, 1200), 1, sound)
		render(n, n)
	},
}

export const tracks: Track[] = [
	basic,
	basicMul,
	basicAdd,
	basicChordSin,
	basicChordSaw,
	basicChordSquare,
	basicEnv,
	basicNoiseFilter,
]

export interface Track {
	text: string
	inputs?: InputDeclaration[]
	renderAudio: (
		render: (left: NodeRepr_t | number, right: NodeRepr_t | number) => void,
		inputVals: number[],
	) => void
}
