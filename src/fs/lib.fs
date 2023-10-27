module FsAudio

open Elemaudio
open Fable.Core

[<Import("el", "@elemaudio/core")>]
let el: Stdlib = jsNative

type AudioNode(n: ElemNode) =
  member _.n = n

  static member inline (+)(a: AudioNode, b: AudioNode) =
    AudioNode(U2.Case1(el.add (ResizeArray [ a.n; b.n ])))

  static member inline (-)(a: AudioNode, b: AudioNode) =
    AudioNode(U2.Case1(el.sub (ResizeArray [ a.n; b.n ])))

  static member inline (*)(a: AudioNode, b: AudioNode) =
    AudioNode(U2.Case1(el.mul (ResizeArray [ a.n; b.n ])))

  static member inline (/)(a: AudioNode, b: AudioNode) =
    AudioNode(U2.Case1(el.div (ResizeArray [ a.n; b.n ])))

  static member inline (>*)(a: AudioNode, b: AudioNode) = AudioNode(U2.Case1(el.ge (a.n, b.n)))
  static member inline (<*)(a: AudioNode, b: AudioNode) = AudioNode(U2.Case1(el.le (a.n, b.n)))

let inline key (label: string) value =
  AudioNode(U2.Case1(el.constant {| key = Some label; value = value |}))

let inline num value =
  AudioNode(U2.Case1(el.constant {| value = value |}))

let inline cycle (node: AudioNode) = AudioNode(U2.Case1(el.cycle node.n))
