import WebRenderer from '@elemaudio/web-renderer'
import { Icon } from 'solid-heroicons'
import { pause, play } from 'solid-heroicons/solid'
import { Show, createEffect, createSignal, onCleanup } from 'solid-js'
import { Track } from '../lib/base.js'
import sample1 from '../assets/dr_n_bass.mp3'
import { InputType, Inputs } from './input.jsx'
import { MidiController } from './midi.jsx'
import { Oscilloscope } from './Visualization.jsx'

const ctx = new AudioContext()
ctx.suspend()
const core = new WebRenderer()

const analyser = ctx.createAnalyser()
analyser.connect(ctx.destination)

const [isPlaying, setIsPlaying] = createSignal(false)
function playCtx() {
	if (ctx.state !== 'running') {
		ctx.resume()
		setIsPlaying(true)
	}
}

function pauseCtx() {
	if (ctx.state === 'running') {
		ctx.suspend()
		setIsPlaying(false)
	}
}

const [loaded, setLoaded] = createSignal(false)

let node: AudioWorkletNode | undefined

async function main() {
	node = await core.initialize(ctx, {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2],
	})
	node.connect(analyser)

	const res = await fetch(sample1)
	const sampleBuffer = await ctx.decodeAudioData(await res.arrayBuffer())
	core.updateVirtualFileSystem({
		sample1: sampleBuffer.getChannelData(0),
	})

	setLoaded(true)
}

main().catch(console.error)

interface TrackPlayerProps {
	track: Track
}

const keyCodeMap = {
	Digit1: 16, //
	Digit2: 17, //
	Digit3: 18, //
	Digit4: 19, //
	Digit5: 20, //
	Digit6: 21, //
	Digit7: 22, //
	Digit8: 23, //
	Digit9: 24, //
	Digit0: 25, //
	KeyQ: 11, //
	KeyW: 12, //
	KeyE: 13, //
	KeyR: 14, //
	KeyT: 15, //
	KeyY: 16, //
	KeyU: 17, //
	KeyI: 18, //
	KeyO: 19, //
	KeyP: 20, //
	KeyA: 6, //
	KeyS: 7, //
	KeyD: 8, //
	KeyF: 9, //
	KeyG: 10, //
	KeyH: 11, //
	KeyJ: 12, //
	KeyK: 13, //
	KeyL: 14, //
	Semicolon: 15, //
	KeyZ: 1, //
	KeyX: 2, //
	KeyC: 3, //
	KeyV: 4, //
	KeyB: 5, //
	KeyN: 6, //
	KeyM: 7, //
	Comma: 8, //
	Period: 9, //
	Slash: 10, //
}

export function TrackPlayer(props: TrackPlayerProps) {
	const [midiNotes, setMidiNotes] = createSignal<Record<number, number>>({})

	function noteOn(note: number, attack: number) {
		setMidiNotes((prev) => ({ ...prev, [note]: attack }))
	}
	function noteOff(note: number) {
		setMidiNotes((prev) => {
			const newNotes = { ...prev }
			delete newNotes[note]
			return newNotes
		})
	}

	const [inputs, setInputs] = createSignal<number[]>([])

	createEffect(() => {
		const t = props.track
		if (t.inputs) {
			const stored = localStorage.getItem(t.text)
			if (stored) {
				const parsed = JSON.parse(stored)
				if (
					parsed.length === t.inputs.length &&
					parsed.every((p: any) => typeof p === 'number')
				) {
					setInputs(parsed)
				}
			} else {
				setInputs(
					t.inputs.map((i) =>
						i.type === InputType.TICK ? ctx.currentTime : i.initialValue,
					),
				)
			}
		}
	})

	const i = setInterval(() => {
		if (!isPlaying()) return
		const i = props.track.inputs?.findIndex((i) => i.type === InputType.TICK)
		if (i != null && i !== -1) {
			const newInputs = [...inputs()]
			newInputs[i] = ctx.currentTime
			setInputs(newInputs)
		}
	}, 30)

	onCleanup(() => {
		clearInterval(i)
	})

	const [pressedKeys, setPressedKeys] = createSignal([0, 0, 0, 0, 0])

	const pressedMidiKeys = () =>
		props.track.withKeyboardStartingAt
			? pressedKeys().map((k) =>
					k === 0 ? 0 : k + props.track.withKeyboardStartingAt!,
				)
			: [0, 0, 0, 0, 0]

	function onKeydown(e: KeyboardEvent) {
		if (e.code in keyCodeMap) {
			const note = keyCodeMap[e.code as keyof typeof keyCodeMap]
			const keys = [...pressedKeys()]
			if (!keys.includes(note)) {
				const idx = keys.indexOf(0)
				if (idx !== -1) {
					keys[idx] = note
					setPressedKeys(keys)
				}
			}
		}
	}

	function onKeyup(e: KeyboardEvent) {
		if (e.code in keyCodeMap) {
			const note = keyCodeMap[e.code as keyof typeof keyCodeMap]
			const keys = [...pressedKeys()]
			const idx = keys.indexOf(note)
			if (idx !== -1) {
				keys[idx] = 0
				setPressedKeys(keys)
			}
		}
	}

	createEffect(() => {
		if (props.track.withKeyboardStartingAt) {
			window.addEventListener('keydown', onKeydown)
			window.addEventListener('keyup', onKeyup)
		} else {
			window.removeEventListener('keydown', onKeydown)
			window.removeEventListener('keyup', onKeyup)
		}
	})

	createEffect(() => {
		if (loaded()) {
			const t = props.track
			if (t && isPlaying()) {
				const is = inputs()
				console.log('rendering', t.text, is)

				const el = t.renderAudio(
					is,
					ctx,
					pressedMidiKeys(),
					Object.entries(midiNotes()).map(([note, attack]) => ({
						note: Number(note),
						attack,
					})),
				)
				if (Array.isArray(el)) {
					core.render(...el)
				} else {
					core.render(el, el)
				}

				requestAnimationFrame(() => {
					localStorage.setItem(t.text, JSON.stringify(is))
				})
			}
		}
	})

	return (
		<div>
			<div class="ml-12 flex lg:ml-0">
				<button
					type="button"
					class="my-auto mr-4 rounded-sm bg-slate-100 p-2 shadow-md"
					onClick={() => {
						isPlaying() ? pauseCtx() : playCtx()
					}}
				>
					<Show
						when={isPlaying()}
						fallback={<Icon path={play} class="h-6 w-6" />}
					>
						<Icon path={pause} class="h-6 w-6" />
					</Show>
				</button>
				<h3 class="my-4 grow">{props.track.text}</h3>
			</div>
			<Oscilloscope
				analyser={analyser}
				highres
				isPlaying={isPlaying()}
				width={800}
				height={400}
				class="h-auto max-w-full rounded-md shadow-lg"
			/>
			<Show when={props.track.useMidi}>
				<MidiController onMidiNoteOff={noteOff} onMidiNoteOn={noteOn} />
			</Show>
			<Show when={props.track.inputs}>
				<Inputs
					inputs={props.track.inputs!}
					values={inputs()}
					onChange={(vals) => setInputs(vals)}
				/>
			</Show>
		</div>
	)
}
