import WebRenderer from '@elemaudio/web-renderer'
import { For, createEffect, createSignal } from 'solid-js'
import { Track } from './tracks'
import { el } from '@elemaudio/core'

const ctx = new AudioContext()
const core = new WebRenderer()

const [loaded, setLoaded] = createSignal(false)

core.on('load', function () {
	setLoaded(true)
})

async function main() {
	let node = await core.initialize(ctx, {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2],
	})

	node.connect(ctx.destination)
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
			<p class="mx-auto my-4 max-w-md">{props.text}</p>
			<button
				class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				onClick={() => props.toggleTrack()}
			>
				Toggle Track
			</button>
		</div>
	)
}

export interface AppProps {
	tracks: Track[]
}

export function App(props: AppProps) {
	const [trackIdx, setTrackIdx] = createSignal(-1)

	createEffect(() => {
		const track = props.tracks[trackIdx()]
		if (loaded()) {
			if (track) {
				track.renderAudio((left: any, right: any) => {
					core.render(left, right)
				})
			} else {
				core.render(0, 0)
			}
		}
	})

	return (
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
	)
}
