import { el } from '@elemaudio/core'
import { InputType } from '../../input'
import { Track, reverse } from '../../utils/base'
import { composePolySynth } from '../../utils/elemaudio'
import { chord, invert, midiToFc } from '../../utils/music'
import { beat, combine, createSequencer, withBeat } from '../../utils/sequence'

// === A === (2 times)

// Dm7 G7
// Dm7 G7
// Gm7 C7
// Gm7 C7

// F7
// Bb7
// Abm7 Db7 Gm7 C7
// 1. Fmaj7 E0 A7, 2. Fmaj7 E7b9

// === B ===

// Am Am#7
// Am7 D7
// Gmaj7 Am7
// Bm7 Am7 D7

// Gm Gm#7
// Gm7 C7
// Fmaj7
// E07 A7b9

// === A ===

// Dm7 G7
// Dm7 G7
// Gm7 C7
// Gm7 C7

// F7
// Bb7
// Abm7 Db7 Gm7 C7
// Fmaj7

const dm = chord('D-2', 'min')
const g7 = chord('G-2', 'maj')

const bassPattern = [1.5, , , , 0.5, 0.5]

const notes = combine(
	withBeat(dm, beat(4, bassPattern)),
	withBeat(reverse(invert(g7, -2)), beat(4, bassPattern)),
)

const bpm = 100
const releaseTime = 1.5

const sequencer = createSequencer(notes, { releaseTime, bpm })

export default {
	text: 'Standards/Lover Man',
	inputs: [{ type: InputType.TICK }],

	renderAudio([tick]) {
		const activeNotes = sequencer(tick)

		if (activeNotes.length === 0) return 0

		return el.mul(
			composePolySynth(
				activeNotes.map((n) => ({
					env: el.adsr(0.1, 0.2, 0.6, releaseTime, n.triggerSignal),
					sound: el.mul(
						el.add(
							el.cycle(midiToFc(n.data.note)),
							el.cycle(midiToFc(n.data.note + 12)),
						),
						0.5,
					),
				})),
			),
			0.7,
		)
	},
} as Track
