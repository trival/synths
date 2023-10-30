import { el } from '@elemaudio/core'
import { InputType } from '../input'
import { Track, reverse } from '../utils/base'
import { composePolySynth } from '../utils/elemaudio'
import { chord, invert, midiToFc } from '../utils/music'
import { beat, combine, createSequencer, withBeat } from '../utils/sequence'

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
