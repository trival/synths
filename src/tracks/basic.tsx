import { Track, reverse } from '../utils/base'
import { combine, withBeat, beat, createSequencer } from '../utils/sequence'
import { ElemNode, el } from '@elemaudio/core'
import { InputType } from '../input'
import {
	NoteName,
	chord,
	harmonicMajorScale,
	invert,
	midiToFc,
	noteToMidi,
} from '../utils/music'
import {
	fit1011,
	fit1110,
	composePolySynth,
	timedTrigger,
} from '../utils/elemaudio'

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
	renderAudio(vals) {
		const fc = vals[0] || 440
		const left = el.cycle({ key: 'fc' }, fc)
		const right = el.cycle({ key: 'fc1' }, fc + 1)
		return [left, right]
	},
}

const basicMul: Track = {
	text: 'Fq mul',
	renderAudio() {
		return el.mul(el.cycle(440), el.cycle(441))
	},
}

const basicAdd: Track = {
	text: 'Fq add',
	renderAudio() {
		const added = el.add(el.cycle(440), el.cycle(441))
		return el.mul(added, 0.5)
	},
}

const basicChordSin: Track = {
	text: 'Chord cycle',
	renderAudio() {
		const baseNote = 110
		const chord = el.add(
			el.cycle(baseNote * 2),
			el.cycle(baseNote * 3),
			el.cycle(baseNote * 4),
			el.cycle((baseNote * 5) / 2),
		)
		const node = el.mul(chord, 0.25)
		return node
	},
}

const basicChordSaw: Track = {
	text: 'Chord saw',
	renderAudio() {
		const baseNote = 110
		const chord = el.add(
			el.saw(baseNote * 2),
			el.saw(baseNote * 3),
			el.saw(baseNote * 4),
			el.saw((baseNote * 5) / 2),
		)
		const node = el.mul(chord, 0.25)
		return node
	},
}

const basicChordSquare: Track = {
	text: 'Chord square',
	renderAudio() {
		const baseNote = 110
		const chord = el.add(
			el.square(baseNote * 2),
			el.square(baseNote * 3),
			el.square(baseNote * 4),
			el.square((baseNote * 5) / 2),
		)
		const node = el.mul(chord, 0.25)
		return node
	},
}

const basicEnv: Track = {
	text: 'Gain Env',
	renderAudio() {
		const t = el.train(0.7)
		const env1 = el.env(el.tau2pole(0.2), el.tau2pole(0.05), t)
		const env2 = el.env(el.tau2pole(0.02), el.tau2pole(0.3), t)
		const n = el.mul(el.cycle(440), el.mul(el.add(env1, env2), 0.5))
		return n
	},
}

const basicNoiseFilter: Track = {
	text: 'seq noise Filter',
	renderAudio() {
		const t = el.le(el.phasor(6), 0.6)
		const s = el.seq({ seq: [1, 0, 0, 1, 0, 1] }, t, 0)
		const envG = el.env(el.tau2pole(0.04), el.tau2pole(0.3), s)
		const sound = el.mul(el.pinknoise(), envG, 5)
		const n = el.lowpass(el.mul(envG, 1200), 1, sound)
		return n
	},
}

const basicSeq: Track = {
	text: 'seq',
	renderAudio() {
		const t = el.le(el.phasor(3), 0.999)
		const s = el.seq({ seq: [1, 0, 0, 1, 0, 1] }, t, 0)
		const n = el.mul(s, el.triangle(220))
		return n
	},
}

let playingNotes: { fc: number; start: number }[] = []
let scale = harmonicMajorScale(440)
scale = scale.concat(scale.map((t) => t * 2))

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
	renderAudio(vals, ctx) {
		const t = ctx.currentTime

		playingNotes = playingNotes.filter(
			(n) => n.start > t - (duration + release),
		)
		playingNotes.push(
			{
				fc: pick(scale),
				start: t + 0.1,
			},
			{
				fc: pick(scale),
				start: t + 1 + Math.random(),
			},
		)

		console.log('rendering', renderTimes++, playingNotes)

		const envs = playingNotes.map((note, i) => {
			const s = timedTrigger(note.start, note.start + duration, '' + i)

			return {
				env: el.adsr(0.1, 0.2, 0.6, release, s),
				sound: el.cycle(note.fc),
			}
		})

		const n = composePolySynth(envs)

		return el.mul(n, 0.7)
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
	renderAudio([
		gainSig,
		gainAmount,
		fcSig,
		fcScale,
		filterSig,
		filterScale,
		filterQ,
	]) {
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
		const trigger = el.phasor(1.5)
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
		return res
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
	renderAudio([fc, modFc]) {
		const mod = el.mul(fit1110(el.cycle(modFc)), 0.5)
		const sig = el.mul(fit1011(el.le(el.phasor(fc), mod)), 0.5)
		return sig
	},
}

const WaveTypeOptions = ['sine', 'square', 'saw', 'triangle'] as const

export const basicAmplitudeModulation: Track = {
	text: 'amplitude modulation',
	inputs: [
		{
			type: InputType.SELECT,
			label: 'modulation equation',
			options: [
				'naive mul intuition',
				'initial modulation equation',
				'transformed equation, added difference and sum',
			],
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
	renderAudio([eq, waveType, fc, modFc, modAmount]) {
		let wave: ElemNode

		if (eq === 0) {
			const n = (waveFn: (fc: number) => ElemNode) =>
				el.mul(waveFn(fc), el.sub(1, el.mul(fit1110(waveFn(modFc)), modAmount)))

			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					wave = n(el.cycle)
					break
				case 'square':
					wave = n(el.square)
					break
				case 'saw':
					wave = n(el.saw)
					break
				case 'triangle':
					wave = n(el.triangle)
					break
			}
		} else if (eq === 1) {
			// A1=(a1 + a2 * cos(w2t)) * cos(w1t)
			const n = (waveFn: (fc: number) => ElemNode) =>
				el.mul(
					el.add(1, el.mul(waveFn(modFc), modAmount)),
					waveFn(fc),
					1 / (1 + modAmount),
				)

			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					wave = n(el.cycle)
					break
				case 'square':
					wave = n(el.square)
					break
				case 'saw':
					wave = n(el.saw)
					break
				case 'triangle':
					wave = n(el.triangle)
					break
			}
		} else {
			// A1=a1cos(w1t) + 1/2 [a2cos(w1+w2)t] + 1/2[a2cos(w1-w2)t]
			const n = (waveFn: (fc: number) => ElemNode) =>
				el.mul(
					el.add(
						waveFn(fc),
						el.mul(waveFn(fc + modFc), modAmount, 0.5),
						el.mul(waveFn(fc - modFc), modAmount, 0.5),
					),
					0.5,
				)

			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					wave = n(el.cycle)
					break
				case 'square':
					wave = n(el.square)
					break
				case 'saw':
					wave = n(el.saw)
					break
				case 'triangle':
					wave = n(el.triangle)
					break
			}
		}

		return el.mul(wave, 0.5)
	},
}

const bassPattern = [2, , , 2, , , 1.5, ,]

const notes = combine(
	withBeat(chord('D-3', 'min'), beat(4, bassPattern)),
	withBeat(chord('D-4', 'min'), beat(4, bassPattern)),
	withBeat(reverse(invert(chord('G-4', 'maj'), -2)), beat(4, bassPattern)),
	withBeat(reverse(invert(chord('G-3', 'maj'), -2)), beat(4, bassPattern)),
)

const fmBpm = 100
const fmReleaseTime = 1.5

const fmSequencer = createSequencer(notes, {
	initData: { note: 0, pattern: 0 },
	bpm: fmBpm,
})

const basicFrequencyModulation: Track = {
	text: 'frequency modulation',
	inputs: [
		{
			type: InputType.SELECT,
			label: 'wave type',
			options: WaveTypeOptions,
			initialValue: 0,
		},
		{
			type: InputType.TICK,
		},
		{
			type: InputType.SLIDER,
			label: 'modulator factor',
			min: 0.5,
			max: 20,
			step: 0.05,
			initialValue: 1,
		},
		{
			type: InputType.SLIDER,
			label: 'modulation amount',
			min: 0,
			max: 20,
			step: 0.01,
			initialValue: 0,
		},
	],
	renderAudio([waveType, tick, fcFactor, amount]) {
		const tracks = fmSequencer(tick)

		const waveFn = (fc: ElemNode) => {
			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					return el.cycle(fc)
				case 'square':
					return el.square(fc)
				case 'saw':
					return el.saw(fc)
				case 'triangle':
					return el.triangle(fc)
			}
		}

		return el.mul(
			composePolySynth(
				tracks.map((n) => {
					const fc = midiToFc(n.data.note)
					return {
						env: el.adsr(0.1, 0.2, 0.6, fmReleaseTime, n.triggerSignal),
						sound:
							// el.lowpass(
							// fc,
							// 3,
							waveFn(
								el.add(fc, el.mul(fc * 2 ** amount, waveFn(fc / fcFactor))),
								// ),
							),
					}
				}),
			),
			0.7,
		)
	},
}

const basicRingModulation: Track = {
	text: 'ring modulation',
	inputs: [
		{
			type: InputType.TOGGLE,
			label: 'toggle ring modulation',
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
			label: 'modulator fc factor',
			min: 0.1,
			max: 10,
			step: 0.01,
			initialValue: 2,
		},
		{
			type: InputType.TICK,
		},
	],
	renderAudio([toggle, waveType, factor, tick]) {
		const trackNotes = fmSequencer(tick)

		const waveFn = (fc: ElemNode) => {
			switch (WaveTypeOptions[waveType]) {
				case 'sine':
					return el.cycle(fc)
				case 'square':
					return el.square(fc)
				case 'saw':
					return el.saw(fc)
				case 'triangle':
					return el.triangle(fc)
			}
		}

		return el.mul(
			composePolySynth(
				trackNotes.map((n) => {
					const fc = midiToFc(n.data.note)
					return {
						env: el.adsr(0.1, 0.2, 0.6, fmReleaseTime, n.triggerSignal),
						sound: toggle
							? el.mul(waveFn(fc), waveFn(el.mul(fc, factor)))
							: waveFn(fc),
					}
				}),
			),
			0.7,
		)
	},
}

const basicMidi: Track = {
	text: 'midi WIP',
	useMidi: true,
	renderAudio(_, __, midi) {
		console.log(midi)
		const notes = midi.map((n) => {
			const fc = midiToFc(n.note)
			return {
				env: el.adsr(0.1, 0.2, 0.6, 1.5, n.attack),
				sound: el.cycle(fc),
			}
		})

		return el.mul(composePolySynth(notes), 0.7)
	},
}

import sequencer1 from './sequencer1'
import loverMan from './standards/lover-man'
import aloneTogether from './standards/alone-together'

export const tracks: Track[] = [
	sequencer1,
	loverMan,
	aloneTogether,

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
	basicAmplitudeModulation,
	basicFrequencyModulation,
	basicRingModulation,
	basicMidi,
]
