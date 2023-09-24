import { el } from '@elemaudio/core'
import WebRenderer from '@elemaudio/web-renderer'
import { createSignal } from 'solid-js'

const ctx = new AudioContext()
const core = new WebRenderer()

core.on('load', function () {})

async function main() {
	let node = await core.initialize(ctx, {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2],
	})

	node.connect(ctx.destination)
}

main().catch(console.error)

function start() {
	if (ctx.state !== 'running') {
		ctx.resume()
	}
}

function play(volume: number) {
	const left = el.cycle(440)
	const right = el.cycle(441)
	core.render(el.mul(left, volume), el.mul(right, volume))
}

export function App() {
	const [volume, setVolume] = createSignal(1)
	return (
		<div class="py-20 text-center">
			<button
				class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				onClick={() => {
					start()
					play(volume())
					setVolume((volume) => (volume ? 0 : 1))
				}}
			>
				Toggle sound
			</button>
		</div>
	)
}
