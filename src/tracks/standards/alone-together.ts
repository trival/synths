// Transposed to Am (A minor) in Trumpet key (Bb)

import { el } from '@elemaudio/core'
import { InputType } from '../../input'
import { Track } from '../../utils/base'
import { am, composePolySynth } from '../../utils/elemaudio'
import {
	ScaleType,
	chord,
	invert,
	midiToFc,
	octaveTransposedScale,
	scale,
} from '../../utils/music'
import {
	Melody,
	createSequencer,
	melodyNote,
	melodyToSeq,
} from '../../utils/sequence'

// === A === (2 times)

// Am6
// B07 E7b9
// Am6
// B07 E7b9
// Am6
// E07 A7b9
// Dm7
// Dm7
// F#m7 B7
// Dm7 G7
// Cmaj7
// B07 E7b9
// Amaj7
// Amaj7 (B07 E7b9)

// === B ===

// E07
// A7b9
// Dm6
// Dm6
// D07
// G7b9
// Cmaj7
// B07 E7b9

// === A' ===

// Am6
// B07 E7b9
// Am6
// B07 E7b9
// Am6 F#07
// F7 E7b9
// Am6
// B07 E7b9

const s = scale('G-2', ScaleType.MINOR)
const s2 = octaveTransposedScale(s)
const n = melodyNote

const bassA: Melody<number> = [
	n(3, s(1)),
	n(1),
	n(3, s(2)),
	n(1, s(5)),

	n(3, s(1)),
	n(1),
	n(3, s(2)),
	n(1, s(5)),

	n(3, s(1)),
	n(1),
	n(3, s(5)),
	n(1, s(1)),

	n(3, s(4)),
	n(1),
	n(3, s(4)),
	n(1),

	n(3, s(6, '#')),
	n(1, s(2)),
	n(3, s(4)),
	n(1, s(7)),

	n(3, s(3)),
	n(1),
	n(3, s(2)),
	n(1, s(5)),

	n(2, s(1)),
	n(2, s(3, '#')),
	n(3, s(2)),
	n(1),
]

const bassB: Melody<number> = [
	n(3, s(5)),
	n(1),
	n(2, s(1)),
	n(2, s(3, '#')),

	n(3, s(4)),
	n(1),
	n(3, s(4)),
	n(1),

	n(3, s(4)),
	n(1, s(1, '#')),
	n(3, s(7)),
	n(1),

	n(3, s(3)),
	n(1),
	n(3, s(2)),
	n(1, s(5)),
]

const bassA2: Melody<number> = [
	n(3, s(1)),
	n(1),
	n(3, s(2)),
	n(1, s(5)),

	n(3, s(1)),
	n(1),
	n(3, s(2)),
	n(1, s(5)),

	n(3, s(1)),
	n(1, s(6, '#')),
	n(3, s(6)),
	n(1, s(5)),

	n(3, s(1)),
	n(1),
	n(3, s(2)),
	n(1),
]

const c6 = (n: number) => [s(n + 2), s(n + 4), s(n + 5)].map((n) => n + 12)
const c7 = (n: number) => [s(n + 2), s(n + 4), s(n + 6)].map((n) => n + 12)

const c = (ns: number[]) => [n(1), n(2, ns), n(1)]

const harmonyA = [
	c6(1),
	c7(2),
	c6(1),
	c7(2),

	c6(1),
	chord(s2(7), 'min'),
	c7(4),
	c7(4),

	chord(s2(1), 'maj'),
	c7(4),
	c7(3),
	c7(2),

	chord(s2(3, '#'), 'min'),
	chord(s2(3, '#'), 'min'),
].flatMap(c) as Melody<number[]>

const harmonyB = [
	chord(s2(5), 'min'),
	chord(s2(3, '#'), 'dim'),
	c6(4),
	c6(4),

	chord(s2(6), 'min'),
	invert(c7(7), -1),
	c7(3),
	c7(2),
].flatMap(c) as Melody<number[]>

const harmonyA2 = [
	c6(1),
	c7(2),
	c6(1),
	c7(2),

	c6(1),
	chord(s2(1), 'dim'),
	c6(1),
	c7(2),
].flatMap(c) as Melody<number[]>

const bpm = 100
const releaseTime = 2.5

const bassSong = bassA.concat(bassA).concat(bassB).concat(bassA2)

// const bass = bassB
// const bass = bassB.concat(bassA2)
const bass = [n<number>(8)].concat(bassSong).concat(bassSong).concat(bassSong)

const harmonySong = harmonyA.concat(harmonyA).concat(harmonyB).concat(harmonyA2)

// const harmony = harmonyB
// const harmony = harmonyB.concat(harmonyA2)
const harmony = [n<number[]>(8)]
	.concat(harmonySong)
	.concat(harmonySong)
	.concat(harmonySong)

const bassSequencer = createSequencer(melodyToSeq(bass), {
	releaseTime,
	bpm,
	seqTriggerKey: 'bassTrigger',
})

const chordSequencer = createSequencer(melodyToSeq(harmony), {
	bpm,
	releaseTime,
	seqTriggerKey: 'chordTrigger',
})

export default {
	text: 'Standards/Alone Together',
	inputs: [{ type: InputType.TICK }],

	renderAudio([tick]) {
		if (tick < 0.0001) {
			return 0
		}

		const bassNotes = bassSequencer(tick)
		const chordNotes = chordSequencer(tick)

		console.log(bassNotes, chordNotes)

		return el.add(
			el.mul(
				composePolySynth(
					bassNotes.map((n) => {
						const fq = el.const({ key: 'b' + n.idx, value: midiToFc(n.data) })
						const amount = el.mul(fq, 2.41)

						const fq2 = el.add(
							fq,
							el.mul(
								el.saw(
									el.add(
										el.mul(fq, 1.0),
										el.mul(el.cycle(0.5), el.mul(fq, 0.015)),
									),
								),
								amount,
							),
						)

						return {
							env: el.adsr(0.3, 0.3, 0.6, releaseTime, n.triggerSignal),
							sound: el.lowpass(
								el.mul(fq, 2.5),
								2,
								el.mul(el.triangle(fq2), 0.5),
							),
						}
					}),
				),
				0.8,
			),
			el.mul(
				composePolySynth(
					chordNotes.map((n) => {
						return {
							env: el.adsr(0.3, 0.6, 0.5, releaseTime, n.triggerSignal),
							sound: am(
								el.add(
									el.mul(
										el.add(
											...n.data.map((note, i) => {
												const fc = el.const({
													key: 'c1' + n.idx + '_' + i,
													value: midiToFc(note),
												})
												return el.lowpass(el.mul(fc, 1.2), 1, el.square(fc))
											}),
										),
										0.2,
									),
									el.mul(
										el.add(
											...n.data
												.map((n) => n + 12)
												.map((note, i) => {
													const fc = el.const({
														key: 'c2' + n.idx + '_' + i,
														value: midiToFc(note),
													})
													return el.lowpass(el.mul(fc, 1.5), 2.5, el.saw(fc))
												}),
										),
										0.061,
									),
								),
								el.cycle((bpm / 60) * 3),
								el.mul(0.3, el.adsr(0.8, 0, 1, releaseTime, n.triggerSignal)),
							),
						}
					}),
				),
				0.6,
			),
			el.lowpass(
				8000,
				0.6,
				el.mul(el.pinknoise(), el.add(3.0, el.cycle(bpm / 60)), 0.03),
			),
		)
	},
} as Track
