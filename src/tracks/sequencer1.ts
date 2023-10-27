import { el } from '@elemaudio/core'
import { InputType } from '../input'
import { Track } from '../utils/base'
import { chord, midiToFc } from '../utils/music'
import { sequence } from '../utils/sequence'

const notes = [
	...chord('C-2', 'maj'),
	null,
	...chord('F-2', 'maj'),
	null,
	...chord('G-2', 'maj'),
	null,
	...chord('A-2', 'min'),
	null,
]

console.log(notes)

export default {
	text: 'Sequencer 1',
	inputs: [{ type: InputType.TICK }],
	renderAudio(inputVals) {
		const [tick] = inputVals
		const seq = sequence(
			notes.map((n) => ({ data: n, duration: 1 })),
			tick,
		)
		const envs = seq.map((n) => el.adsr(0.1, 0.2, 0.6, 1, n.triggerSignal))
		if (seq.length === 0) return 0

		const ns = seq.map((note, i) => {
			const n = el.mul(el.triangle(midiToFc(note.data)), envs[i], 0.5)
			return n
		})

		const [first, ...rest] = ns
		const sig = rest.reduce((acc, n) => el.add(acc, n), first)

		const [e1, ...es] = envs
		const playingCount = es.reduce(
			(acc, e) => el.add(acc, el.ge(e, 0.00000001)),
			el.ge(e1, 0.00000001),
		)
		const n = el.div(sig, el.pow(playingCount, 0.5))
		return n
	},
} as Track
