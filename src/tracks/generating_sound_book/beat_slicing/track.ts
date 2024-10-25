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
		{
			type: InputType.SLIDER,
			label: 'Jump distance',
			min: 0,
			max: 5,
			initialValue: 1.2,
			step: 0.05,
		},
		{
			type: InputType.SLIDER,
			label: 'Noise factor',
			min: 0,
			max: 5,
			initialValue: 0.2,
			step: 0.01,
		},
	],

	renderAudio([bpm, slices, jump, noiseFactor]) {
		return gsbBeatSlicing(bpm, slices, jump, noiseFactor)
	},
} as Track
