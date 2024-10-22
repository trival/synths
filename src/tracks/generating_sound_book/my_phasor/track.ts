import { Track } from '../../../lib/base.js'
import { gsbMyPhasor } from '../../../scala-out/main.js'

export default {
	text: 'Generating Sound Book/My Phasor',

	renderAudio() {
		return gsbMyPhasor()
	},
} as Track
