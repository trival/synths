import { el } from '@elemaudio/core'
import { InputType } from '../../input'
import { Track, reverse } from '../../utils/base'
import { composePolySynth } from '../../utils/elemaudio'
import { chord, invert, midiToFc, noteToMidi } from '../../utils/music'
import {
	beat,
	combine,
	createSequencer,
	melodyNote,
	melodyToSeq,
	withBeat,
} from '../../utils/sequence'

// === A === (2 times)

// Dm7 G7
// Dm7 G7
// Gm7 C7
// Gm7 C7

// F7
// Bb7
// Abm7 Db7 Gm7 C7
// 1. Fmaj7 E0 A7, 2. Fmaj7 E7b9

// === B ===

// Am Am#7
// Am7 D7
// Gmaj7 Am7
// Bm7 Am7 D7

// Gm Gm#7
// Gm7 C7
// Fmaj7
// E07 A7b9

// === A ===

// Dm7 G7
// Dm7 G7
// Gm7 C7
// Gm7 C7

// F7
// Bb7
// Abm7 Db7 Gm7 C7
// Fmaj7

const c = chord('C-2', 'maj')
const d = chord('D-2', 'maj')
const dm = chord('D-2', 'min')
const e = chord('E-2', 'maj')
const ed = chord('E-2', 'dim')
const f = chord('F-2', 'maj')
const g = chord('G-2', 'maj')
const gm = chord('G-2', 'min')
const a = chord('A-2', 'maj')
const am = chord('A-2', 'min')
const bb = chord('Bb-2', 'maj')
const bm = chord('B-2', 'min')

const bassPattern = [1.5, , , , 0.5, 0.5]
const p = (n: number[]) => withBeat(n, beat(4, bassPattern))

const bassNotesA = combine(
	p(dm),
	p(reverse(invert(g, -2))),
	p(dm),
	p(reverse(invert(g, -2))),

	p(gm),
	p(reverse(invert(c))),
	p(gm),
	p(reverse(invert(c))),

	p(f),
	p(reverse(invert(f, 1))),
	p(bb),
	p(reverse(invert(bb, -1))),

	p((['Ab-2', 'Db-2', 'F-2'] as const).map(noteToMidi)),
	p((['G-2', 'C-2', 'E-2'] as const).map(noteToMidi)),
	p(f),
)

const bassAEnd1 = p((['E-2', 'A-2', 'G-2'] as const).map(noteToMidi))
const bassAEnd2 = p(reverse(e))
const bassAEnd3 = withBeat([noteToMidi('F-2')], beat(4, [2, , , , ,]))

const bassNotesB = combine(
	p(am),
	p(reverse(invert(am, -1))),
	p(am),
	p(reverse(d)),

	p(g),
	p(reverse(am)),
	p(bm),
	p((['E-3', 'A-2', 'F#-2'] as const).map(noteToMidi)),

	p(gm),
	p(reverse(invert(gm, -1))),
	p(gm),
	p(reverse(d)),

	p(f),
	p(reverse(invert(am, -1))),
	p(ed),
	p(reverse(invert(a, -1))),
)

const bpm = 120
const releaseTime = 1.5

const bass = combine(
	bassNotesA,
	bassAEnd1,
	bassNotesA,
	bassAEnd2,
	bassNotesB,
	bassNotesA,
	bassAEnd3,
)

const sequencer = createSequencer(bass, { releaseTime, bpm })

export default {
	text: 'Standards/Lover Man',
	inputs: [{ type: InputType.TICK }],

	renderAudio([tick]) {
		const activeNotes = sequencer(tick)

		if (activeNotes.length === 0) return 0

		return el.mul(
			composePolySynth(
				activeNotes.map((n) => ({
					env: el.adsr(0.1, 0.2, 0.6, releaseTime, n.triggerSignal),
					sound: el.mul(
						el.add(
							el.cycle(midiToFc(n.data.note)),
							el.cycle(midiToFc(n.data.note + 12)),
						),
						0.5,
					),
				})),
			),
			0.7,
		)
	},
} as Track
