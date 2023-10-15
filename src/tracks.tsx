import { NodeRepr_t, el } from '@elemaudio/core'
import { InputDeclaration, InputType } from './input'
import { NoteName, fit1011, fit1110, midiToFc, noteToMidi } from './utils'

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
	],
	renderAudio: (render, vals) => {
		const fc = vals[0] || 440
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

const basicSeq: Track = {
	text: 'seq',
	renderAudio(render) {
		const t = el.le(el.phasor(3, 0), 0.999)
		const s = el.seq({ seq: [1, 0, 0, 1, 0, 1] }, t, 0)
		const n = el.mul(s, el.triangle(220))
		render(n, n)
	},
}

let playingNotes: { fc: number; start: number }[] = []
const baseTone = 440
let tones = [
	baseTone / 1,

	(baseTone * 7) / 6,
	// (baseTone * 6) / 5, // no minor third
	(baseTone * 5) / 4,
	(baseTone * 4) / 3,
	(baseTone * 3) / 2,

	(((baseTone * 3) / 2) * 7) / 6,
	(((baseTone * 3) / 2) * 5) / 4,

	baseTone * 2,
]
tones = tones.concat(tones.map((t) => t * 2))

function pick<T>(ts: T[]) {
	return ts[Math.floor(ts.length * Math.random())]
}
let renderTimes = 1

const duration = 0.5
const release = 1.5

const basicSchedule: Track = {
	text: 'schedule',
	inputs: [
		{
			type: InputType.TOGGLE,
			initialValue: 0,
			label: 'play',
		},
	],
	renderAudio(render, vals, ctx) {
		const t = ctx.currentTime

		playingNotes = playingNotes.filter(
			(n) => n.start > t - (duration + release),
		)
		playingNotes.push(
			{
				fc: pick(tones),
				start: t,
			},
			{
				fc: pick(tones),
				start: t + 1 + Math.random(),
			},
		)

		console.log('rendering', renderTimes++, playingNotes)

		const envs = playingNotes.map((note, i) => {
			const s = el.mul(
				el.ge(
					el.div(el.time(), el.sr()),
					el.const({
						key: 'start' + i,
						value: note.start,
					}),
				),
				el.le(
					el.div(el.time(), el.sr()),
					el.const({ key: 'end' + i, value: note.start + duration }),
				),
			)
			return el.adsr(0.1, 0.2, 0.6, release, s)
		})

		const ns = playingNotes.map((note, i) => {
			const n = el.mul(el.cycle(note.fc), envs[i], 0.9)
			return n
		})

		const [first, ...rest] = ns
		const sig = rest.reduce((acc, n) => el.add(acc, n), first)

		const [e1, ...es] = envs
		const playingCount = es.reduce(
			(acc, e) => el.add(acc, el.ge(e, 0.001)),
			el.ge(e1, 0.001),
		)
		let n = el.div(sig, el.pow(playingCount, 0.5))
		n = el.compress(10, 100, -8, 4, n, n)
		render(n, n)
	},
}

const basicSynth: Track = {
	text: 'synth',
	inputs: [
		{
			type: InputType.SLIDER,
			label: 'gain lfo fc',
			initialValue: 0.5,
			min: 0.1,
			max: 40,
			step: 0.1,
		},
		{
			type: InputType.SLIDER,
			label: 'gain mod amount',
			initialValue: 0.5,
			min: 0,
			max: 1,
			step: 0.01,
		},
		{
			type: InputType.SLIDER,
			label: 'fc lfo fc',
			initialValue: 10,
			min: 0.1,
			max: 40,
			step: 0.1,
		},
		{
			type: InputType.SLIDER,
			label: 'fc mod scale',
			initialValue: 10,
			min: 0,
			max: 100,
			step: 0.1,
		},
		{
			type: InputType.SLIDER,
			label: 'filter lfo fc',
			initialValue: 0.5,
			min: 0.1,
			max: 40,
			step: 0.1,
		},
		{
			type: InputType.SLIDER,
			label: 'filter mod scale',
			initialValue: 50,
			min: 0,
			max: 1000,
			step: 0.1,
		},
		{
			type: InputType.SLIDER,
			label: 'filter Q',
			initialValue: 0.5,
			min: 0,
			max: 2,
			step: 0.01,
		},
	],
	renderAudio(
		render,
		[gainSig, gainAmount, fcSig, fcScale, filterSig, filterScale, filterQ],
	) {
		const notes: [NoteName, number][] = [
			['D', 3],
			['F', 3],
			['A', 3],
			['C', 4],
			['B', 3],
			['G', 3],
			['F', 3],
			['D', 3],
			['C', 3],
			['E', 3],
			['G', 3],
			['B', 3],
			['A', 3],
			['F', 3],
			['E', 3],
			['C', 3],
		]
		const fcs = notes.map(([note, octave]) =>
			midiToFc(noteToMidi({ note, octave })),
		)
		const trigger = el.phasor(1.5, 0)
		const sigSeq = el.le(trigger, 0.99)
		const sigEnv = el.le(trigger, 0.3)
		const seq = el.seq({ seq: fcs }, sigSeq, 0)

		const fcLFO = el.cycle(fcSig)
		const fc = el.add(seq, el.mul(fcScale, fcLFO))
		const tone = el.saw(fc)

		const filterLFO = el.cycle(filterSig)
		const fcFilter = el.add(fc, el.mul(filterScale, filterLFO))
		const filter = el.lowpass(fcFilter, filterQ, tone)

		const env = el.adsr(0.2, 0.2, 0.6, 1.5, sigEnv)
		const gainLFO = el.sub(1, el.mul(fit1110(el.cycle(gainSig)), gainAmount))
		const res = el.mul(filter, env, gainLFO)
		render(res, res)
	},
}

const basicPulseModulation: Track = {
	text: 'pulse modulation',
	inputs: [
		{
			type: InputType.SLIDER,
			label: 'fc',
			initialValue: 440,
			min: 40,
			max: 2000,
			step: 1,
		},
		{
			type: InputType.SLIDER,
			label: 'mod fc',
			initialValue: 0.5,
			min: 0,
			max: 100,
			step: 0.1,
		},
	],
	renderAudio(render, [fc, modFc]) {
		const mod = el.mul(fit1110(el.cycle(modFc)), 0.5)
		const sig = el.mul(fit1011(el.le(el.phasor(fc, 0), mod)), 0.5)
		render(sig, sig)
	},
}

const WaveTypeOptions = ['sine', 'square', 'saw', 'triangle'] as const
export const basicGainModulation: Track = {
	text: 'gain modulation',
	inputs: [
		{
			type: InputType.SELECT,
			label: 'modulation equation',
			options: ['simple mul', 'complex, add difference and sum'],
			initialValue: 0,
		},
		{
			type: InputType.SELECT,
			label: 'wave type',
			options: WaveTypeOptions,
			initialValue: 0,
		},
		{
			type: InputType.SLIDER,
			label: 'fc',
			initialValue: 440,
			min: 40,
			max: 4000,
			step: 1,
		},
		{
			type: InputType.SLIDER,
			label: 'mod fc',
			initialValue: 0.5,
			min: 0,
			max: 1000,
			step: 0.1,
		},
		{
			type: InputType.SLIDER,
			label: 'mod amount',
			initialValue: 0.5,
			min: 0,
			max: 2,
			step: 0.01,
		},
	],
	renderAudio(render, [eq, waveType, fc, modFc, modAmount]) {
		let wave: NodeRepr_t | number
		if (eq === 0) {
			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					wave = el.add(
						el.cycle(fc),
						el.mul(el.cycle(fc), el.cycle(modFc), modAmount),
					)
					break

				case 'square':
					wave = el.add(
						el.square(fc),
						el.mul(el.square(fc), el.square(modFc), modAmount),
					)
					break

				case 'saw':
					wave = el.add(
						el.saw(fc),
						el.mul(el.saw(fc), el.saw(modFc), modAmount),
					)
					break

				case 'triangle':
					wave = el.add(
						el.triangle(fc),
						el.mul(el.triangle(fc), el.triangle(modFc), modAmount),
					)
					break
			}
		} else {
			// A1=a1cos(w1t) + 1/2 [a2cos(w1+w2)t] + 1/2[a2cos(w1-w2)t]
			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					wave = el.add(
						el.cycle(fc),
						el.mul(el.cycle(fc + modFc), modAmount, 0.5),
						el.mul(el.cycle(fc - modFc), modAmount, 0.5),
					)
					break

				case 'square':
					wave = el.add(
						el.square(fc),
						el.mul(el.square(fc + modFc), modAmount, 0.5),
						el.mul(el.square(fc - modFc), modAmount, 0.5),
					)
					break

				case 'saw':
					wave = el.add(
						el.saw(fc),
						el.mul(el.saw(fc + modFc), modAmount, 0.5),
						el.mul(el.saw(fc - modFc), modAmount, 0.5),
					)
					break

				case 'triangle':
					wave = el.add(
						el.triangle(fc),
						el.mul(el.triangle(fc + modFc), modAmount, 0.5),
						el.mul(el.triangle(fc - modFc), modAmount, 0.5),
					)
					break
			}
		}

		wave = el.mul(wave, 0.5)
		render(wave, wave)
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
	basicSeq,
	basicNoiseFilter,
	basicSchedule,
	basicSynth,
	basicPulseModulation,
	basicGainModulation,
]

export interface Track {
	text: string
	inputs?: InputDeclaration[]
	renderAudio: (
		render: (left: NodeRepr_t | number, right: NodeRepr_t | number) => void,
		inputVals: number[],
		ctx: AudioContext,
	) => void
}
