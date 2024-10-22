import { Track } from '../../../lib/base.js'
import { gsbDynPlayback } from '../../../scala-out/main.js'

export default {
	text: 'Generating Sound Book/Dynamic Playback',

	renderAudio() {
		return gsbDynPlayback()
	},
} as Track
