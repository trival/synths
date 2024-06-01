import { createEffect } from 'solid-js'

interface Props {
	class?: string
	analyser: AnalyserNode
	isPlaying: boolean
	width: number
	height: number
	highres?: boolean
}
export function Oscilloscope(props: Props) {
	// Set up the different audio nodes we will use for the app
	let canvas: HTMLCanvasElement | undefined
	let drawVisual: number | undefined

	let ctx: CanvasRenderingContext2D | null = null

	createEffect(() => {
		if (!canvas) return

		if (!ctx) {
			ctx = canvas.getContext('2d')
			if (!ctx) return
		}

		const width = props.width
		const height = props.height

		ctx.clearRect(0, 0, width, height)
		ctx.fillStyle = 'rgb(250, 250, 250)'
		ctx.fillRect(0, 0, width, height)

		ctx.lineWidth = 1.2
		ctx.strokeStyle = 'rgb(0, 50, 100)'
		ctx.beginPath()
		ctx.moveTo(0, height / 2)
		ctx.lineTo(width, height / 2)
		ctx.stroke()

		const analyser = props.analyser
		analyser.minDecibels = -90
		analyser.maxDecibels = -10
		analyser.smoothingTimeConstant = 0.85

		analyser.fftSize = props.highres ? 4096 : 2048

		const timeDomainDataLength = analyser.fftSize
		console.log(timeDomainDataLength)
		// We can use Float32Array instead of Uint8Array if we want higher precision
		// const dataArray = new Float32Array(bufferLength);
		const timeDomainData = new Uint8Array(timeDomainDataLength)

		const frequencyDataLength = analyser.frequencyBinCount
		console.log(frequencyDataLength)

		// See comment above for Float32Array()
		const frequencyData = new Uint8Array(frequencyDataLength)

		const draw = () => {
			drawVisual = requestAnimationFrame(draw)
			if (!ctx) return

			ctx.fillStyle = 'rgb(250, 250, 250)'
			ctx.fillRect(0, 0, width, height)

			analyser.getByteFrequencyData(frequencyData)

			let x = 0

			const barWidth = width / frequencyDataLength
			for (let i = 0; i < frequencyDataLength; i++) {
				const barHeight = (frequencyData[i] / 255) * height
				const barWidth2 =
					(Math.pow((i + 1) / frequencyDataLength, 0.5) /
						((i + 1) / frequencyDataLength)) *
					barWidth

				const lightness = 250 - barHeight / 2
				ctx.fillStyle = `rgb(255,${lightness},${lightness})`
				ctx.fillRect(x, height - barHeight, barWidth2, barHeight)

				x += barWidth2
			}

			analyser.getByteTimeDomainData(timeDomainData)

			ctx.lineWidth = 1.2
			ctx.strokeStyle = 'rgb(0, 50, 100)'

			ctx.beginPath()

			const sliceWidth = width / timeDomainDataLength
			x = 0

			for (let i = 0; i < timeDomainDataLength; i++) {
				const v = timeDomainData[i] / 128.0
				const y = (v * height) / 2

				if (i === 0) {
					ctx.moveTo(x, y)
				} else {
					ctx.lineTo(x, y)
				}

				x += sliceWidth
			}

			ctx.lineTo(width, height / 2)
			ctx.stroke()
		}

		if (props.isPlaying) {
			draw()
		} else if (drawVisual != null) {
			cancelAnimationFrame(drawVisual)
		}
	})

	return (
		<canvas
			ref={canvas}
			width={props.width}
			height={props.height}
			class={props.class}
		/>
	)
}
