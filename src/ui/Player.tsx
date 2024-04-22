import { Icon } from 'solid-heroicons'
import { play, pause } from 'solid-heroicons/solid'
import { Show, createEffect, createSignal, onCleanup } from 'solid-js'
import { InputType, Inputs } from './input'
import { Track } from '../lib/base'
import WebRenderer from '@elemaudio/web-renderer'
import { MidiController } from '../midi'
import { Oscilloscope } from './Visualization'

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

core.on('load', function () {
	setLoaded(true)
})

let node: AudioWorkletNode | undefined

async function main() {
	node = await core.initialize(ctx, {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2],
	})
	node.connect(analyser)
}

main().catch(console.error)

interface TrackPlayerProps {
	track: Track
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

	createEffect(() => {
		if (loaded()) {
			const t = props.track
			if (t && isPlaying()) {
				const is = inputs()
				console.log('rendering', t.text, is)

				const el = t.renderAudio(
					is,
					ctx,
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
