import { el } from '@elemaudio/core'
import { InputType } from '../ui/input'
import { Track } from '../lib/base'
import { chord, midiToFc } from '../lib/music'
import { createSequencer, melodyToSeq } from '../lib/sequence'
import { composePolySynth } from '../lib/elemaudio'

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

const releaseTime = 0.5

const sequencer = createSequencer(
	melodyToSeq(notes.map((n) => ({ data: n, duration: 1 }))),
	{
		initData: 0,
		bpm: 140,
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
					env: el.adsr(0.1, 0.2, 0.6, releaseTime, n.triggerSignal),
					sound: el.cycle(midiToFc(n.data)),
				})),
			),
			0.7,
		)
	},
} as Track
