import { Track } from '../../../lib/base.js'
import { InputType } from '../../../ui/input.jsx'
import { play } from './play.js'

export default {
	text: 'Instruments/Drums',
	withKeyboardStartingAt: 45,
	inputs: [
		{
			type: InputType.TICK,
		},
	],

	renderAudio([time], _, keys) {
		return play(keys, time) as any
	},
} as Track
