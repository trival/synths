import { el } from '@elemaudio/core'
import { AudioNode } from './elemaudio'

export interface SeqNote<T> {
	data: T | null
	duration: number
}

export type Sequence<T> = SeqNote<T>[]

export interface PlayableNote<T> {
	data: T
	idx: number
	triggerSignal: AudioNode
}

interface SequenceProps {
	bpm: number
	repetitions: number
	startTime: number
	releaseTime: 1
	seqTriggerKey: string
}

const defaultSequenceProps: SequenceProps = {
	bpm: 120,
	repetitions: 0,
	releaseTime: 1,
	startTime: 0,
	seqTriggerKey: 'trigger',
}

export const sequence = <T>(
	seq: Sequence<T>,
	currentTime: number,
	props: Partial<SequenceProps> = {},
): PlayableNote<T>[] => {
	const { bpm, repetitions, startTime, releaseTime, seqTriggerKey } = {
		...defaultSequenceProps,
		...props,
	}
	const secPerBeat = 60 / bpm

	const seqDuration =
		seq.reduce((acc, note) => acc + note.duration, 0) * secPerBeat

	const noteIntervals: { start: number; end: number; idx: number }[] = []
	let currentSeqTime = 0
	seq.forEach((note, i) => {
		if (note.data != null) {
			noteIntervals.push({
				start: currentSeqTime,
				end: currentSeqTime + note.duration * secPerBeat + releaseTime,
				idx: i,
			})
		}
		currentSeqTime += note.duration * secPerBeat
	})

	const currentLoop = Math.floor((currentTime - startTime) / seqDuration)

	if (repetitions === 0 || currentLoop < repetitions) {
		const seqTime = currentTime - currentLoop * seqDuration
		const currentNotes = noteIntervals.filter(
			(n) => n.start - 0.2 <= seqTime && n.end + 0.2 > seqTime,
		)

		return currentNotes.map((n) => {
			const note = seq[n.idx]
			const start = n.start + currentLoop * seqDuration
			return {
				data: note.data!,
				idx: n.idx,
				triggerSignal: el.mul(
					el.ge(
						el.div(el.time(), el.sr()),
						el.const({
							key: seqTriggerKey + '_start' + n.idx,
							value: start,
						}),
					),
					el.le(
						el.div(el.time(), el.sr()),
						el.const({
							key: seqTriggerKey + '_end' + n.idx,
							value: start + note.duration * secPerBeat,
						}),
					),
				),
			}
		})
	}

	return []
}
