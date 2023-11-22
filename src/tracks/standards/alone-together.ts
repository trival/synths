// Transposed to Am (A minor) in Trumpet key

import { el } from '@elemaudio/core'
import { InputType } from '../../input'
import { Track } from '../../utils/base'
import { composePolySynth } from '../../utils/elemaudio'
import { ScaleType, midiToFc, scale } from '../../utils/music'
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

const s = scale('A-2', ScaleType.MINOR)

const n = melodyNote

const bassMelody: Melody<number> = [
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

const bpm = 100
const releaseTime = 1.5

const bassSequencer = createSequencer(melodyToSeq(bassMelody), {
	releaseTime,
	bpm,
})

export default {
	text: 'Standards/Alone Together',
	inputs: [{ type: InputType.TICK }],

	renderAudio([tick]) {
		const bassNotes = bassSequencer(tick)

		if (bassNotes.length === 0) return 0

		return el.mul(
			composePolySynth(
				bassNotes.map((n) => ({
					env: el.adsr(0.1, 0.2, 0.6, releaseTime, n.triggerSignal),
					sound: el.mul(
						el.add(el.cycle(midiToFc(n.data)), el.cycle(midiToFc(n.data + 12))),
						0.5,
					),
				})),
			),
			0.7,
		)
	},
} as Track
