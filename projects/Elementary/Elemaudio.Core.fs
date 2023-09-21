// ts2fable 0.7.1
module rec Elemaudio.Core

open System
open Fable.Core
open Fable.Core.JS

type Array<'T> = System.Collections.Generic.IList<'T>
type Error = System.Exception
type Function = System.Action
type Symbol = obj

[<Import("NodeRepr_createPrimitive", "@elemaudio/core/dist")>]
let NodeRepr_createPrimitive: (string -> obj -> ResizeArray<NodeRepr_t> -> NodeRepr_t) =
  jsNative

[<Import("NodeRepr_createComposite", "@elemaudio/core/dist")>]
let NodeRepr_createComposite: ((NodeRepr_createComposite -> NodeRepr_t) -> obj -> ResizeArray<NodeRepr_t> -> NodeRepr_t) =
  jsNative

[<Import("renderWithDelegate", "@elemaudio/core/dist")>]
let renderWithDelegate: (RenderDelegate_t -> ResizeArray<NodeRepr_t> -> unit) =
  jsNative

[<Import("stepGarbageCollector", "@elemaudio/core/dist")>]
let stepGarbageCollector: (RenderDelegate_t -> unit) = jsNative

[<Import("stdlib", "@elemaudio/core/dist")>]
let stdlib: Stdlib = jsNative

[<AllowNullLiteral>]
type IExports =
  abstract EmptyList: EmptyListStatic
  abstract Cons: ConsStatic
  abstract NodeRepr_props: NodeRepr_propsStatic
  abstract RenderDelegate_t: RenderDelegate_tStatic
  abstract resolve: n: U2<NodeRepr_t, float> -> NodeRepr_t
  abstract isNode: n: obj -> bool
  abstract createNode: kind: obj * props: obj option * children: Array<U2<NodeRepr_t, float>> -> NodeRepr_t
  abstract constant: props: ConstNodeProps -> NodeRepr_t
  abstract identity: x: U2<NodeRepr_t, float> -> NodeRepr_t
  abstract identity: props: IdentityNodeProps -> NodeRepr_t
  abstract identity: props: IdentityNodeProps * x: U2<NodeRepr_t, float> -> NodeRepr_t
  abstract Renderer: RendererStatic


[<AllowNullLiteral>]
type EmptyList =
  abstract opaque: obj option with get, set

[<AllowNullLiteral>]
type EmptyListStatic =
  [<Emit "new $0($1...)">]
  abstract Create: unit -> EmptyList

[<AllowNullLiteral>]
type Cons<'T> =
  abstract opaque: 'T with get, set

[<AllowNullLiteral>]
type ConsStatic =
  [<Emit "new $0($1...)">]
  abstract Create: unit -> Cons<'T>

type list<'T> = U2<Cons<'T>, EmptyList>

[<AllowNullLiteral>]
type NodeRepr_props =
  abstract opaque: obj option with get, set

[<AllowNullLiteral>]
type NodeRepr_propsStatic =
  [<Emit "new $0($1...)">]
  abstract Create: unit -> NodeRepr_props

[<AllowNullLiteral>]
type NodeRepr_renderContext =
  abstract sampleRate: float
  abstract blockSize: float
  abstract numInputs: float
  abstract numOutputs: float

type NodeRepr_symbol = Symbol

[<AllowNullLiteral>]
type NodeRepr_t =
  abstract symbol: NodeRepr_symbol
  abstract hash: float option with get, set
  abstract kind: U2<NodeRepr_tKind, NodeRepr_tKind2>
  abstract props: NodeRepr_props
  abstract children: list<NodeRepr_t>

[<AllowNullLiteral>]
type RenderDelegate_t =
  abstract opaque: obj option with get, set

[<AllowNullLiteral>]
type RenderDelegate_tStatic =
  [<Emit "new $0($1...)">]
  abstract Create: unit -> RenderDelegate_t

[<AllowNullLiteral>]
type EventListener<'E> =
  [<Emit "$0($1...)">]
  abstract Invoke: ``event``: 'E -> unit

[<AllowNullLiteral>]
type Events =
  abstract error: Error with get, set
  abstract fft: EventsFft with get, set
  abstract load: unit with get
  abstract meter: EventsMeter with get, set
  abstract scope: EventsScope with get, set
  abstract snapshot: EventsSnapshot with get, set

[<AllowNullLiteral>]
type EventEmitter =
  abstract addListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
  abstract listenerCount: eventName: 'K * ?listener: EventListener<Events> -> float
  abstract listeners: eventName: 'K -> ResizeArray<Function>
  abstract off: eventName: 'K * listener: EventListener<Events> -> EventEmitter
  abstract on: eventName: 'K * listener: (unit -> unit) -> EventEmitter
  abstract once: eventName: 'K * listener: EventListener<Events> -> EventEmitter
  abstract prependListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
  abstract prependOnceListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
  abstract removeAllListeners: ?eventName: 'K -> EventEmitter
  abstract removeListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
  abstract rawListeners: eventName: 'K -> ResizeArray<Function>

[<AllowNullLiteral>]
type ConstNodeProps =
  abstract key: string option with get, set
  abstract value: float with get, set

[<AllowNullLiteral>]
type IdentityNodeProps =
  abstract key: string option with get, set
  abstract channel: float option with get, set

[<AllowNullLiteral>]
type Renderer =
  abstract render: [<ParamArray>] args: ResizeArray<obj option> -> RendererRenderReturn

[<AllowNullLiteral>]
type RendererRenderReturn =
  abstract nodesAdded: float with get, set
  abstract edgesAdded: float with get, set
  abstract propsWritten: float with get, set
  abstract elapsedTimeMs: float with get, set

[<AllowNullLiteral>]
type RendererStatic =
  [<Emit "new $0($1...)">]
  abstract Create: sampleRate: obj option * sendMessage: obj option -> Renderer

[<AllowNullLiteral>]
type NodeRepr_createComposite =
  abstract children: ResizeArray<NodeRepr_t>
  abstract context: NodeRepr_renderContext
  abstract props: NodeRepr_props

[<AllowNullLiteral>]
type StdlibTrain =
  abstract key: string option with get, set

[<AllowNullLiteral>]
type StdlibNoise =
  abstract key: string option with get, set
  abstract seed: float option with get, set

[<AllowNullLiteral>]
type StdlibIdentity =
  abstract key: string option with get, set
  abstract channel: float option with get, set

[<AllowNullLiteral>]
type StdlibConstant =
  abstract key: string option with get, set
  abstract value: float with get, set

[<AllowNullLiteral>]
type StdlibMaxhold =
  abstract key: string option with get, set
  abstract hold: float option with get, set

[<AllowNullLiteral>]
type StdlibOnce =
  abstract key: string option with get, set
  abstract arm: bool option with get, set

[<AllowNullLiteral>]
type StdlibMetro =
  abstract key: string option with get, set
  abstract interval: float option with get, set

[<AllowNullLiteral>]
type StdlibSample =
  abstract key: string option with get, set
  abstract path: string option with get, set
  abstract mode: string option with get, set
  abstract startOffset: float option with get, set
  abstract stopOffset: float option with get, set

[<AllowNullLiteral>]
type StdlibTable =
  abstract key: string option with get, set
  abstract path: string option with get, set

[<AllowNullLiteral>]
type StdlibSeq =
  abstract key: string option with get, set
  abstract seq: ResizeArray<float> option with get, set
  abstract offset: float option with get, set
  abstract hold: bool option with get, set
  abstract loop: bool option with get, set

[<AllowNullLiteral>]
type StdlibSparseqSeq =
  abstract value: float with get, set
  abstract tickTime: float with get, set

[<AllowNullLiteral>]
type StdlibSparseq =
  abstract key: string option with get, set
  abstract seq: ResizeArray<StdlibSparseqSeq> option with get, set
  abstract offset: float option with get, set
  abstract loop: U2<bool, ResizeArray<float>> option with get, set
  abstract resetOnLoop: bool option with get, set
  abstract interpolate: float option with get, set
  abstract tickInterval: float option with get, set

[<AllowNullLiteral>]
type StdlibDelay =
  abstract key: string option with get, set
  abstract size: float with get, set

[<AllowNullLiteral>]
type StdlibSvf =
  abstract key: string option with get, set
  abstract mode: string option with get, set

[<AllowNullLiteral>]
type StdlibTapIn =
  abstract name: string with get, set

[<AllowNullLiteral>]
type StdlibMeter =
  abstract key: string option with get, set
  abstract name: string option with get, set

[<AllowNullLiteral>]
type StdlibScope =
  abstract key: string option with get, set
  abstract name: string option with get, set
  abstract size: float option with get, set
  abstract channels: float option with get, set

[<AllowNullLiteral>]
type StdlibFft =
  abstract key: string option with get, set
  abstract name: string option with get, set
  abstract size: float option with get, set

[<AllowNullLiteral>]
type StdlibCapture =
  abstract key: string option with get, set
  abstract size: float option with get, set

[<AllowNullLiteral>]
type Stdlib =
  abstract ``const``: obj with get, set
  abstract ``in``: obj with get, set
  abstract ms2samps: t: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract tau2pole: t: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract db2gain: db: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract gain2db: gain: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>

  abstract select:
    g: U2<float, NodeRepr_t> * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>

  abstract hann: t: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract train: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract train: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract cycle: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract cycle: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract saw: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract saw: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract square: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract square: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract triangle: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract triangle: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract blepsaw: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract blepsaw: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract blepsquare: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract blepsquare: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract bleptriangle: rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract bleptriangle: props: StdlibTrain * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract noise: unit -> NodeRepr_t
  abstract noise: props: StdlibNoise -> NodeRepr_t
  abstract pinknoise: unit -> NodeRepr_t
  abstract pinknoise: props: StdlibNoise -> NodeRepr_t
  abstract identity: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract identity: props: StdlibIdentity -> NodeRepr_t
  abstract identity: props: StdlibIdentity * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract sin: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract sin: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract cos: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract cos: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract tan: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract tan: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract tanh: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract tanh: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract asinh: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract asinh: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ln: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ln: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract log: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract log: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract log2: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract log2: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ceil: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ceil: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract floor: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract floor: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract sqrt: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract sqrt: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract exp: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract exp: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract abs: x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract abs: props: StdlibTrain * x: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract le: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract le: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract leq: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract leq: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ge: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ge: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract geq: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract geq: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract pow: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract pow: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract eq: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract eq: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ``and``: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ``and``: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ``or``: a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract ``or``: props: StdlibTrain * a: U2<float, NodeRepr_t> * b: U2<float, NodeRepr_t> -> U2<float, NodeRepr_t>
  abstract add: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract add: props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract sub: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract sub: props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract mul: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract mul: props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract div: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract div: props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract ``mod``: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>

  abstract ``mod``:
    props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>

  abstract min: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract min: props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract max: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract max: props: StdlibTrain * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> U2<float, NodeRepr_t>
  abstract smooth: p: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract smooth: props: StdlibTrain * p: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract sm: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract sm: props: StdlibTrain * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract zero: b0: U2<float, NodeRepr_t> * b1: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract zero:
    props: StdlibTrain * b0: U2<float, NodeRepr_t> * b1: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract dcblock: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract dcblock: props: StdlibTrain * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract df11:
    b0: U2<float, NodeRepr_t> * b1: U2<float, NodeRepr_t> * a1: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract df11:
    props: StdlibTrain *
    b0: U2<float, NodeRepr_t> *
    b1: U2<float, NodeRepr_t> *
    a1: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract lowpass: fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract lowpass:
    props: StdlibTrain * fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract highpass: fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract highpass:
    props: StdlibTrain * fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract bandpass: fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract bandpass:
    props: StdlibTrain * fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract notch: fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract notch:
    props: StdlibTrain * fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract allpass: fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract allpass:
    props: StdlibTrain * fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract peak:
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract peak:
    props: StdlibTrain *
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract lowshelf:
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract lowshelf:
    props: StdlibTrain *
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract highshelf:
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract highshelf:
    props: StdlibTrain *
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract pink: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract pink: props: StdlibTrain * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract adsr:
    attackSec: U2<float, NodeRepr_t> *
    decaySec: U2<float, NodeRepr_t> *
    sustain: U2<float, NodeRepr_t> *
    releaseSec: U2<float, NodeRepr_t> *
    gate: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract adsr:
    props: StdlibTrain *
    attackSec: U2<float, NodeRepr_t> *
    decaySec: U2<float, NodeRepr_t> *
    sustain: U2<float, NodeRepr_t> *
    releaseSec: U2<float, NodeRepr_t> *
    gate: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract compress:
    attackMs: U2<float, NodeRepr_t> *
    releaseMs: U2<float, NodeRepr_t> *
    threshold: U2<float, NodeRepr_t> *
    ratio: U2<float, NodeRepr_t> *
    sidechain: U2<float, NodeRepr_t> *
    xn: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract compress:
    props: StdlibTrain *
    attackMs: U2<float, NodeRepr_t> *
    releaseMs: U2<float, NodeRepr_t> *
    threshold: U2<float, NodeRepr_t> *
    ratio: U2<float, NodeRepr_t> *
    sidechain: U2<float, NodeRepr_t> *
    xn: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract constant: props: StdlibConstant -> NodeRepr_t
  abstract sr: unit -> NodeRepr_t
  abstract time: unit -> NodeRepr_t
  abstract counter: gate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract counter: props: StdlibTrain * gate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract accum: xn: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract accum: props: StdlibTrain * xn: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract phasor: rate: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract phasor: props: StdlibTrain * rate: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract latch: t: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract latch: props: StdlibTrain * t: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract maxhold: x: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract maxhold: props: StdlibMaxhold * x: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract once: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract once: props: StdlibOnce * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract rand: unit -> NodeRepr_t
  abstract rand: props: StdlibNoise -> NodeRepr_t
  abstract metro: unit -> NodeRepr_t
  abstract metro: props: StdlibMetro -> NodeRepr_t
  abstract sample: props: StdlibSample * trigger: U2<float, NodeRepr_t> * rate: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract table: props: StdlibTable * t: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract convolve: props: StdlibTable * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract seq: props: StdlibSeq * trigger: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract seq2: props: StdlibSeq * trigger: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract sparseq: props: StdlibSparseq * trigger: U2<float, NodeRepr_t> * reset: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract pole: p: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract pole: props: StdlibTrain * p: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract env: atkPole: U2<float, NodeRepr_t> * relPole: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract env:
    props: StdlibTrain * atkPole: U2<float, NodeRepr_t> * relPole: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract z: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract z: props: StdlibTrain * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract delay:
    props: StdlibDelay * len: U2<float, NodeRepr_t> * fb: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract sdelay: props: StdlibDelay * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract svf: fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract svf:
    props: StdlibSvf * fc: U2<float, NodeRepr_t> * q: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

  abstract svfshelf:
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract svfshelf:
    props: StdlibSvf *
    fc: U2<float, NodeRepr_t> *
    q: U2<float, NodeRepr_t> *
    gainDecibels: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract biquad:
    b0: U2<float, NodeRepr_t> *
    b1: U2<float, NodeRepr_t> *
    b2: U2<float, NodeRepr_t> *
    a1: U2<float, NodeRepr_t> *
    a2: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract biquad:
    props: StdlibTrain *
    b0: U2<float, NodeRepr_t> *
    b1: U2<float, NodeRepr_t> *
    b2: U2<float, NodeRepr_t> *
    a1: U2<float, NodeRepr_t> *
    a2: U2<float, NodeRepr_t> *
    x: U2<float, NodeRepr_t> ->
      NodeRepr_t

  abstract tapIn: props: StdlibTapIn -> NodeRepr_t
  abstract tapOut: props: StdlibTapIn * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract meter: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract meter: props: StdlibMeter * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract snapshot: trigger: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract snapshot: props: StdlibMeter * trigger: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract scope: [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> NodeRepr_t
  abstract scope: props: StdlibScope * [<ParamArray>] args: ResizeArray<U2<float, NodeRepr_t>> -> NodeRepr_t
  abstract fft: x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract fft: props: StdlibFft * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract capture: g: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t
  abstract capture: props: StdlibCapture * g: U2<float, NodeRepr_t> * x: U2<float, NodeRepr_t> -> NodeRepr_t

[<AllowNullLiteral>]
type NodeRepr_tKindVAL =
  abstract contents: NodeRepr_t option with get, set

[<AllowNullLiteral>]
type NodeRepr_tKindVAL2 =
  abstract props: NodeRepr_props
  abstract context: NodeRepr_renderContext
  abstract children: ResizeArray<NodeRepr_t>

[<AllowNullLiteral>]
type NodeRepr_tKind =
  abstract NAME: string with get, set
  abstract VAL: NodeRepr_tKindVAL * (NodeRepr_tKindVAL2 -> NodeRepr_t) with get, set

[<AllowNullLiteral>]
type NodeRepr_tKind2 =
  abstract NAME: string with get, set
  abstract VAL: string with get, set

[<AllowNullLiteral>]
type EventsFftData =
  abstract real: Float32Array with get, set
  abstract imag: Float32Array with get, set

[<AllowNullLiteral>]
type EventsFft =
  abstract source: string option with get, set
  abstract data: EventsFftData with get, set

[<AllowNullLiteral>]
type EventsMeter =
  abstract source: string option with get, set
  abstract min: float with get, set
  abstract max: float with get, set

[<AllowNullLiteral>]
type EventsScope =
  abstract source: string option with get, set
  abstract data: ResizeArray<Float32Array> with get, set

[<AllowNullLiteral>]
type EventsSnapshot =
  abstract source: string option with get, set
  abstract data: float with get, set
