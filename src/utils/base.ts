import { InputDeclaration } from '../input'
import { AudioNode } from './elemaudio'

export interface Track {
	text: string
	inputs?: InputDeclaration[]
	renderAudio: (
		inputVals: number[],
		ctx: AudioContext,
	) => AudioNode | AudioNode[]
}
