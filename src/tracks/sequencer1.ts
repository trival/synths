import { el } from '@elemaudio/core'
import { InputType } from '../input'
import { Track } from '../utils/base'
import { chord, midiToFc } from '../utils/music'
import { createSequencer } from '../utils/sequence'
import { composePolySynth } from '../utils/elemaudio'

const notes = [
	...chord('C-3', 'maj'),
	null,
	...chord('F-2', 'maj'),
	null,
	...chord('G-2', 'maj'),
	null,
	...chord('A-2', 'min'),
	null,
]

const releaseTime = 1

const sequencer = createSequencer(
	notes.map((n) => ({ data: n, duration: 1 })),
	{
		releaseTime,
		bpm: 160,
	},
)

export default {
	text: 'Sequence 1',
	inputs: [{ type: InputType.TICK }],

	renderAudio(inputs) {
		const [tick] = inputs

		const activeNotes = sequencer(tick)

		if (activeNotes.length === 0) return 0

		return el.mul(
			composePolySynth(
				activeNotes.map((n) => ({
					env: el.adsr(0.1, 0.2, 0.6, 2, n.triggerSignal),
					sound: el.cycle(midiToFc(n.data)),
				})),
			),
			0.7,
		)
	},
} as Track
