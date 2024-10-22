import { Track } from '../../../lib/base.js'
import { gsbBeatSlicing } from '../../../scala-out/main.js'

export default {
	text: 'Generating Sound Book/Beat Slicing',

	renderAudio() {
		return gsbBeatSlicing()
	},
} as Track
