import { ElemNode } from '@elemaudio/core'
import { timedTrigger } from './elemaudio'
import { rotate } from './base'

export interface MelodyNote<T> {
	duration: number
	data: T | null
}

export type Melody<T> = MelodyNote<T>[]

export interface SeqNote<T> {
	start: number
	duration: number
	data: T
}

export interface Sequence<T> {
	notes: SeqNote<T>[]
	duration: number
}

export function melodyToSeq<T>(melody: Melody<T>): Sequence<T> {
	const notes: SeqNote<T>[] = []
	let duration = 0

	melody.forEach((note) => {
		if (note.data != null) {
			notes.push({
				start: duration,
				duration: note.duration,
				data: note.data,
			})
		}
		duration += note.duration
	})

	return {
		notes,
		duration,
	}
}

export function combine<T>(...seqs: Sequence<T>[]) {
	const notes: SeqNote<T>[] = []
	let duration = 0

	seqs.forEach((seq) => {
		seq.notes.forEach((note) => {
			notes.push({
				start: duration + note.start,
				duration: note.duration,
				data: note.data,
			})
		})
		duration += seq.duration
	})

	return {
		notes,
		duration,
	}
}

export interface PlayableNote<T> {
	data: T
	idx: number
	triggerSignal: ElemNode
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

	let noteIntervals: { start: number; end: number; idx: number }[] = []
	seq.notes.forEach((note, i) => {
		const start = note.start * secPerBeat
		if (note.data != null) {
			noteIntervals.push({
				start: start,
				end: start + note.duration * secPerBeat + releaseTime,
				idx: i,
			})
		}
	})

	const seqDuration = seq.duration * secPerBeat

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
				const note = seq.notes[n.idx]
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

export type Pattern<Data extends { duration?: number }> = (
	| undefined
	| number
	| Data
)[]

export interface Beat<Data extends { duration?: number }> {
	duration: number
	pattern: Pattern<Data>
}

export function beat<Data extends { duration?: number }>(
	duration: number,
	pattern: Pattern<Data>,
): Beat<Data> {
	return {
		duration,
		pattern,
	}
}

export function withBeat<NoteData, BeatData extends { duration?: number }>(
	data: NoteData[],
	beat: Beat<BeatData>,
): Sequence<{ note: NoteData; pattern: number | BeatData }> {
	const notes: SeqNote<{ note: NoteData; pattern: number | BeatData }>[] = []

	const durationRatio = beat.duration / beat.pattern.length
	let start = 0

	for (const b of beat.pattern) {
		if (b) {
			const duration = typeof b === 'number' ? b : b.duration
			notes.push({
				start,
				duration: duration ? duration * durationRatio : durationRatio,
				data: {
					note: data[0],
					pattern: b,
				},
			})

			data = rotate(data)
		}

		start += durationRatio
	}

	return {
		notes: notes,
		duration: beat.duration,
	}
}
