import { Track } from '../../../lib/base.js'
import { gsbMyDynPlayback } from '../../../scala-out/main.js'

export default {
	text: 'Generating Sound Book/Dynamic Playback',

	renderAudio() {
		return gsbMyDynPlayback()
	},
} as Track
