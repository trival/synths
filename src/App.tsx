import WebRenderer from '@elemaudio/web-renderer'
import { For, Show, createEffect, createSignal } from 'solid-js'
import { Track } from './tracks'
import { Oscilloscope } from 'webaudio-oscilloscope/index.js'
import { Inputs } from './input'
import { Icon } from 'solid-heroicons'
import { pause, play } from 'solid-heroicons/solid'

const ctx = new AudioContext()
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

export interface AppProps {
	tracks: Track[]
}

const paramName = 'track'

export function App(props: AppProps) {
	const [trackIdx, setTrackIdx] = createSignal(-1)
	const [inputs, setInputs] = createSignal<number[]>([])

	let canvas: HTMLCanvasElement | undefined

	const track = () => props.tracks[trackIdx()]

	function setTrackFromQuery() {
		const query = new URLSearchParams(window.location.search)
		console.log('setting track from query', query)
		if (query.has(paramName)) {
			const trackName = query.get(paramName)
			const trackIndex = props.tracks.findIndex((t) => t.text === trackName)
			if (trackIndex !== -1) {
				setTrackIdx(trackIndex)
			}
		}
	}

	createEffect(() => {
		setTrackFromQuery()
	})

	createEffect(() => {
		const t = track()
		if (loaded()) {
			if (t && isPlaying()) {
				const is = inputs()
				console.log('rendering', t.text, is)

				t.renderAudio(
					(left: any, right: any) => {
						core.render(left, right)
					},
					is,
					ctx,
				)

				requestAnimationFrame(() => {
					localStorage.setItem(t.text, JSON.stringify(is))
				})
			}
		}

		if (initialized() && canvas && node) {
			const o = new Oscilloscope(ctx, node, canvas)
			o.start()
		}
	})

	createEffect(() => {
		const t = track()
		if (t?.inputs) {
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
				setInputs(t.inputs.map((i) => i.initialValue))
			}
		}
	})

	return (
		<div class="flex h-full w-full">
			<div class="m-8 mr-16 h-full overflow-y-auto">
				<For each={props.tracks}>
					{(track) => (
						<div class="mb-4">
							<button
								class="block font-bold text-blue-500 underline"
								type="button"
								onClick={() => {
									window.history.replaceState(
										{},
										'',
										`?${paramName}=${track.text}`,
									)
									setTrackFromQuery()
								}}
							>
								{track.text}
							</button>
						</div>
					)}
				</For>
			</div>
			<div class="auto m-8 h-full overflow-y-auto">
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
					<h3 class="my-4 grow">{track()?.text}</h3>
				</div>
				<canvas ref={canvas} width="400" height="300" />
				<Show when={track()?.inputs}>
					<Inputs
						inputs={track().inputs!}
						values={inputs()}
						onChange={(vals) => setInputs(vals)}
					/>
				</Show>
			</div>
		</div>
	)
}
