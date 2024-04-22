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

	createEffect(() => {
		if (!canvas) return

		const canvasCtx = canvas.getContext('2d')
		if (!canvasCtx) return

		const width = props.width
		const height = props.height

		canvasCtx.clearRect(0, 0, width, height)
		canvasCtx.fillStyle = 'rgb(250, 250, 250)'
		canvasCtx.fillRect(0, 0, width, height)

		const analyser = props.analyser
		analyser.minDecibels = -90
		analyser.maxDecibels = -10
		analyser.smoothingTimeConstant = 0.85

		if (props.isPlaying) {
			visualize()
		} else if (drawVisual) {
			cancelAnimationFrame(drawVisual)
		}

		function visualize() {
			if (!canvas || !canvasCtx) return

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

			canvasCtx.clearRect(0, 0, width, height)

			const draw = () => {
				drawVisual = requestAnimationFrame(draw)

				canvasCtx.fillStyle = 'rgb(250, 250, 250)'
				canvasCtx.fillRect(0, 0, width, height)

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
					canvasCtx.fillStyle = `rgb(255,${lightness},${lightness})`
					canvasCtx.fillRect(x, height - barHeight, barWidth2, barHeight)

					x += barWidth2
				}

				analyser.getByteTimeDomainData(timeDomainData)

				canvasCtx.lineWidth = 1.2
				canvasCtx.strokeStyle = 'rgb(0, 50, 100)'

				canvasCtx.beginPath()

				const sliceWidth = width / timeDomainDataLength
				x = 0

				for (let i = 0; i < timeDomainDataLength; i++) {
					const v = timeDomainData[i] / 128.0
					const y = (v * height) / 2

					if (i === 0) {
						canvasCtx.moveTo(x, y)
					} else {
						canvasCtx.lineTo(x, y)
					}

					x += sliceWidth
				}

				canvasCtx.lineTo(width, height / 2)
				canvasCtx.stroke()
			}

			draw()
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
