import WebRenderer from '@elemaudio/web-renderer'
import { For, Show, createEffect, createSignal } from 'solid-js'
import { Track } from './tracks'
import { Oscilloscope } from 'webaudio-oscilloscope/index.js'
import { Inputs } from './input'

const ctx = new AudioContext()
const core = new WebRenderer()

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

interface AudioExampleProps {
	text: string
	isSelected: boolean
	toggleTrack: () => void
}

export function AudioExample(props: AudioExampleProps) {
	return (
		<div class="my-12 text-center">
			<button
				class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				onClick={() => props.toggleTrack()}
			>
				{props.text}
			</button>
		</div>
	)
}

export interface AppProps {
	tracks: Track[]
}

export function App(props: AppProps) {
	const [trackIdx, setTrackIdx] = createSignal(-1)
	const [inputs, setInputs] = createSignal<number[]>([])

	let canvas: HTMLCanvasElement | undefined

	const track = () => props.tracks[trackIdx()]

	createEffect(() => {
		const t = track()
		if (loaded()) {
			if (t) {
				console.log('rendering', t.text, inputs())
				t.renderAudio((left: any, right: any) => {
					core.render(left, right)
				}, inputs())
			} else {
				core.render(0, 0)
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
			setInputs(t.inputs.map((i) => i.initialValue))
		}
	})

	return (
		<div class="flex h-full w-full">
			<div class="mx-4 my-auto h-full overflow-y-auto">
				<canvas ref={canvas} width="400" height="300" />
				<Show when={track()?.inputs}>
					<Inputs
						inputs={track().inputs!}
						onChange={(vals) => setInputs(vals)}
					/>
				</Show>
			</div>
			<div class="h-full flex-grow overflow-y-auto">
				<For each={props.tracks}>
					{(track, index) => (
						<AudioExample
							text={track.text}
							isSelected={index() === trackIdx()}
							toggleTrack={() => {
								if (ctx.state !== 'running') {
									ctx.resume()
								}
								setTrackIdx(index() === trackIdx() ? -1 : index())
							}}
						/>
					)}
				</For>
			</div>
		</div>
	)
}
