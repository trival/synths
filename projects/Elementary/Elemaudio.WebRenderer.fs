// ts2fable 0.7.1
module rec Elemaudio.WebRenderer

open System
open Fable.Core
open Fable.Core.JS

type EventEmitter = Elemaudio.Core.EventEmitter

[<AllowNullLiteral>]
type IExports =
  abstract WebAudioRenderer: WebAudioRendererStatic


[<AllowNullLiteral>]
type WebAudioRenderer =
  inherit EventEmitter

  abstract initialize:
    // audioContext: AudioContext * ?workletOptions: AudioWorkletNodeOptions * ?eventInterval: float ->
    //   Promise<AudioWorkletNode>
    audioContext: obj * ?workletOptions: obj * ?eventInterval: float -> Promise<obj>

  abstract render: [<ParamArray>] args: ResizeArray<obj option> -> WebAudioRendererRenderReturn
  abstract updateVirtualFileSystem: vfs: obj option -> unit
  abstract pruneVirtualFileSystem: unit -> unit
  abstract listVirtualFileSystem: unit -> Promise<obj>
  abstract reset: unit -> unit

[<AllowNullLiteral>]
type WebAudioRendererRenderReturn =
  abstract nodesAdded: float with get, set
  abstract edgesAdded: float with get, set
  abstract propsWritten: float with get, set
  abstract elapsedTimeMs: float with get, set

[<AllowNullLiteral>]
type WebAudioRendererStatic =
  [<Emit "new $0($1...)">]
  abstract Create: unit -> WebAudioRenderer
