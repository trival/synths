import { AudioNode, timedTrigger } from './elemaudio'

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
	releaseTime: number
	seqTriggerKey: string
}

const defaultSequenceProps: SequenceProps = {
	bpm: 120,
	repetitions: 0,
	releaseTime: 1,
	startTime: 0,
	seqTriggerKey: 'trigger',
}

export const createSequencer = <T>(
	seq: Sequence<T>,
	props: Partial<SequenceProps> = {},
): ((currentTime: number) => PlayableNote<T>[]) => {
	const { bpm, repetitions, startTime, releaseTime, seqTriggerKey } = {
		...defaultSequenceProps,
		...props,
	}
	const secPerBeat = 60 / bpm

	const seqDuration =
		seq.reduce((acc, note) => acc + note.duration, 0) * secPerBeat

	let noteIntervals: { start: number; end: number; idx: number }[] = []
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

	noteIntervals = noteIntervals
		.map((n) => ({
			...n,
			start: n.start - seqDuration,
			end: n.end - seqDuration,
		}))
		.concat(noteIntervals)
		.filter((n) => n.end > 0)

	return (currentTime: number) => {
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
					triggerSignal: timedTrigger(
						start,
						start + note.duration * secPerBeat,
						seqTriggerKey + n.idx,
					),
				}
			})
		}

		return []
	}
}
