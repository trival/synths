import { Track } from '../../../lib/base.js'
import { InputType } from '../../../ui/input.jsx'
import { play } from './play.js'

export default {
	text: 'Standards/Lover Man (nim)',
	inputs: [{ type: InputType.TICK }],

	renderAudio([time]) {
		return play(time)
	},
} as Track
