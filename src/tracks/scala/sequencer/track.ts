import { Track } from '../../../lib/base.js'
import { scalaSequencerTest } from '../../../scala-out/main.js'
import { InputType } from '../../../ui/input.jsx'

export default {
	text: 'Scala/Sequencer test',
	inputs: [{ type: InputType.TICK }],

	renderAudio([tick]) {
		return scalaSequencerTest(tick)
	},
} as Track
