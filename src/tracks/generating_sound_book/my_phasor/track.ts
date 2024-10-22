import { Track } from '../../../lib/base.js'
import { gsbMyPhasor } from '../../../scala-out/main.js'
import { InputType } from '../../../ui/input.jsx'

export default {
	text: 'Generating Sound Book/My Phasor',
	inputs: [
		{
			type: InputType.SLIDER,
			label:
				'playback frequency in Hz. 1Hz = one full track playback per second',
			min: 0.01,
			max: 2,
			step: 0.01,
			initialValue: 0.25,
		},
	],

	renderAudio([fq]) {
		return gsbMyPhasor(fq)
	},
} as Track
