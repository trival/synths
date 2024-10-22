import { For, createEffect, createSignal } from 'solid-js'
import { Input, WebMidi } from 'webmidi'

const [midiEnabled, setMidiEnabled] = createSignal(false)

navigator.permissions
	.query({ name: 'midi', sysex: true } as any)
	.then((result) => {
		console.log(result)
	})

function enableMidi() {
	WebMidi.enable()
		.then(() => setMidiEnabled(true))
		.catch((e) => {
			console.error('MIDI not enabled', e)
			setMidiEnabled(false)
		})
}

interface MidiControllerProps {
	onMidiNoteOn: (note: number, attack: number) => void
	onMidiNoteOff: (note: number) => void
}

export const MidiController = (props: MidiControllerProps) => {
	const [inputs, setInputs] = createSignal<Input[]>([])
	const [selectedInputIdx, setSelectedInputIdx] = createSignal(-1)
	const [selectedInput, setSelectedInput] = createSignal<Input | null>(null)

	function loadInputs() {
		if (midiEnabled()) {
			console.log('loading inputs', WebMidi.inputs)
			setInputs(WebMidi.inputs)
		}
	}

	createEffect(() => {
		const selected = selectedInput()
		if (selected) {
			selected.removeListener()
		}

		const newSelected = inputs()[selectedInputIdx()]
		if (newSelected) {
			// eslint-disable-next-line solid/reactivity
			newSelected.addListener('noteon', (e) =>
				props.onMidiNoteOn(e.note.number, e.note.attack),
			)
			// eslint-disable-next-line solid/reactivity
			newSelected.addListener('noteoff', (e) =>
				props.onMidiNoteOff(e.note.number),
			)
			setSelectedInput(newSelected)
		} else {
			setSelectedInput(null)
		}
	})

	createEffect(loadInputs)

	WebMidi.addListener('connected', loadInputs)

	return (
		<div>
			<label
				class={'block bg-white text-sm font-medium leading-6 text-gray-900'}
			>
				<span class="block">MIDI Inputs</span>
				<select
					name="location"
					class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
					onChange={(e) => setSelectedInputIdx(Number(e.target.value))}
					value={selectedInputIdx()}
				>
					<option value={-1}>No MIDI Input</option>
					<For each={inputs()}>
						{(input, i) => (
							<option value={i()}>
								{`${input.name}, ${input.manufacturer} (${input.type})`}
							</option>
						)}
					</For>
				</select>
			</label>
			<button onClick={enableMidi}>reloadMidi</button>
		</div>
	)
}
