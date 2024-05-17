import { Track } from '../../../lib/base.js'
import { play } from './play.js'

export default {
	text: 'Instruments/Bassdrum (use keyboard)',
	withKeyboardStartingAt: 45,

	renderAudio(_, __, keys) {
		return play(keys) as any
	},
} as Track
