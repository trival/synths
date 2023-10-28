import { ElemNode } from '@elemaudio/core'
import { InputDeclaration } from '../input'

export interface Track {
	text: string
	inputs?: InputDeclaration[]
	renderAudio: (inputVals: number[], ctx: AudioContext) => ElemNode | ElemNode[]
}
