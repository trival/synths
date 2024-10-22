import basicTracks from './basic.jsx'
import bassdrum from './instruments/drums/track.js'
import timpani from './instruments/timpani/track.js'
import sequencer1 from './sequencer1.js'
import aloneTogetherNim from './standards/alone-together-nim/track.js'
import aloneTogether from './standards/alone-together.js'
import _loverManOld from './standards/lover-man-nim/lover-man-old.js'
import loverMan from './standards/lover-man-nim/track.js'
import gsbMyPhasor from './generating_sound_book/my_phasor/track.js'
import gsbDynamicPlayback from './generating_sound_book/dynamic_playback/track.js'
import gsbBeatSlicing from './generating_sound_book/beat_slicing/track.js'

export default [
	sequencer1,
	loverMan,
	// _loverManOld,
	aloneTogether,
	aloneTogetherNim,

	timpani,
	bassdrum,

	gsbMyPhasor,
	gsbDynamicPlayback,
	gsbBeatSlicing,

	...basicTracks,
]
