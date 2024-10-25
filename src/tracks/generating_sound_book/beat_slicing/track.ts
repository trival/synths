import { Track } from '../../../lib/base.js'
import { gsbBeatSlicing } from '../../../scala-out/main.js'
import { InputType } from '../../../ui/input.jsx'

export default {
	text: 'Generating Sound Book/Beat Slicing',

	inputs: [
		{
			type: InputType.SLIDER,
			label: 'Tempo (BPM)',
			min: 40,
			max: 200,
			initialValue: 110,
			step: 1,
		},
		{
			type: InputType.SLIDER,
			label: 'Number of slices',
			min: 1,
			max: 64,
			initialValue: 16,
			step: 1,
		},
	],

	renderAudio([bpm, slices]) {
		return gsbBeatSlicing(bpm, slices)
	},
} as Track
