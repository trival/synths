import basicTracks from './basic.jsx'
import sequencer1 from './sequencer1.js'
import aloneTogetherNim from './standards/alone-together-nim/track.js'
import aloneTogether from './standards/alone-together.js'
import loverMan from './standards/lover-man.js'
import timpani from './instruments/timpani/track.js'

export default [
	sequencer1,
	loverMan,
	aloneTogether,
	aloneTogetherNim,

	timpani,

	...basicTracks,
]
