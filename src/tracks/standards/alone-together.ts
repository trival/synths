// Transposed to Am (A minor) in Trumpet key (Bb)

import { el } from '@elemaudio/core'
import { InputType } from '../../input'
import { Track } from '../../utils/base'
import { composePolySynth } from '../../utils/elemaudio'
import { ScaleType, chord, midiToFc, scale } from '../../utils/music'
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
	n(1, s(5)),
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
	n(1, s(5)),
]

const c6 = (n: number) => [s(n + 2), s(n + 4), s(n + 5)].map((n) => n + 12)
const c7 = (n: number) => [s(n + 2), s(n + 4), s(n + 6)].map((n) => n + 12)

const harmonyA: Melody<number[]> = [
	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(2, c7(2)),
	n(1),

	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(2, c7(2)),
	n(1),

	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(
		2,
		chord(s(7), 'min').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(2, c7(4)),
	n(1),

	n(1),
	n(2, c7(4)),
	n(1),

	n(1),
	n(
		2,
		chord(s(1), 'maj').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(2, c7(4)),
	n(1),

	n(1),
	n(2, c7(3)),
	n(1),

	n(1),
	n(2, c7(2)),
	n(1),

	n(1),
	n(
		2,
		chord(s(3, '#'), 'min').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(
		2,
		chord(s(3, '#'), 'min').map((n) => n + 12),
	),
	n(1),
]

const harmonyB: Melody<number[]> = [
	n(1),
	n(
		2,
		chord(s(5), 'min').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(
		2,
		chord(s(3, '#'), 'min').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(2, c6(6)),
	n(1),

	n(1),
	n(2, c6(6)),
	n(1),

	n(1),
	n(
		2,
		chord(s(6), 'min').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(2, c7(7)),
	n(1),

	n(1),
	n(2, c7(3)),
	n(1),

	n(1),
	n(2, c7(2)),
	n(1),
]

const harmonyA2: Melody<number[]> = [
	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(2, c7(2)),
	n(1),

	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(2, c7(2)),
	n(1),

	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(
		2,
		chord(s(6), 'dim').map((n) => n + 12),
	),
	n(1),

	n(1),
	n(2, c6(1)),
	n(1),

	n(1),
	n(2, c7(1)),
	n(1),
]

const bpm = 100
const releaseTime = 1.5

// const bass = bassA2
const bass = bassA
	//.concat(bassA)
	.concat(bassB)
	.concat(bassA2)
// const harmony = harmonyA2
const harmony = harmonyA
	// .concat(harmonyA)
	.concat(harmonyB)
	.concat(harmonyA2)

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
		const bassNotes = bassSequencer(tick)
		const chordNotes = chordSequencer(tick)

		if (bassNotes.length === 0) return 0

		return el.add(
			el.mul(
				composePolySynth(
					bassNotes.map((n) => ({
						env: el.adsr(0.3, 0.3, 0.6, releaseTime, n.triggerSignal),
						sound: el.mul(
							el.add(
								el.cycle(midiToFc(n.data)),
								el.cycle(midiToFc(n.data + 12)),
							),
							0.5,
						),
					})),
				),
				0.7,
			),
			el.mul(
				composePolySynth(
					chordNotes.map((n) => ({
						env: el.adsr(0.1, 0.2, 0.6, releaseTime, n.triggerSignal),
						sound: el.mul(
							el.add(...n.data.map((note) => el.cycle(midiToFc(note)))),
							0.3,
						),
					})),
				),
				0.5,
			),
		)
	},
} as Track
