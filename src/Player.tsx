import { Icon } from 'solid-heroicons'
import { play, pause } from 'solid-heroicons/solid'
import { Show, createEffect, createSignal, onCleanup } from 'solid-js'
import { Oscilloscope } from 'webaudio-oscilloscope/index.js'
import { InputType, Inputs } from './input'
import { Track } from './utils/base'
import WebRenderer from '@elemaudio/web-renderer'

const ctx = new AudioContext()
ctx.suspend()
const core = new WebRenderer()

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
const [initialized, setInitialized] = createSignal(false)

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
	node.connect(ctx.destination)
	setInitialized(true)
}

main().catch(console.error)

interface TrackPlayerProps {
	track: Track
}

export function TrackPlayer(props: TrackPlayerProps) {
	let canvas: HTMLCanvasElement | undefined

	createEffect(() => {
		if (initialized() && canvas && node) {
			const o = new Oscilloscope(ctx, node, canvas)
			o.start()
		}
	})

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

				const el = t.renderAudio(is, ctx)
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
			<div class="flex">
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
			<canvas ref={canvas} width="600" height="400" />
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
