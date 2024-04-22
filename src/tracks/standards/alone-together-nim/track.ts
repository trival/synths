import { InputType } from '../../../ui/input'
import { Track } from '../../../lib/base'
import { play } from './play'

export default {
	text: 'Standards/Alone Together (nim)',
	inputs: [{ type: InputType.TICK }],

	renderAudio([time]) {
		return play(time)
	},
} as Track
