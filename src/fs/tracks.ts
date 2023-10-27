import * as basic from './tracks/basic.fs.js'
import { Track } from '../tracks'

export const tracks: Track[] = [
	{ text: 'fsharp Basic', renderAudio: basic.render },
]
