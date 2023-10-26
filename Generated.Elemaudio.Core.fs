// ts2fable 0.7.1
module rec Generated.Elemaudio.Core
open System
open Fable.Core
open Fable.Core.JS

type Array<'T> = System.Collections.Generic.IList<'T>
type Error = System.Exception
type Function = System.Action

let [<Import("renderWithDelegate","@elemaudio/core/dist")>] renderWithDelegate: (RenderDelegate_t -> ResizeArray<t> -> unit) = jsNative
let [<Import("stepGarbageCollector","@elemaudio/core/dist")>] stepGarbageCollector: (RenderDelegate_t -> unit) = jsNative
let [<Import("stdlib","@elemaudio/core/dist")>] stdlib: Stdlib = jsNative

type [<AllowNullLiteral>] IExports =
    abstract EmptyList: EmptyListStatic
    abstract Cons: ConsStatic
    abstract props: propsStatic
    abstract resolve: n: ElemNode -> t
    abstract isNode: n: obj -> bool
    abstract createNode: kind: string * props: obj option * children: Array<ElemNode> -> t
    abstract RenderDelegate_t: RenderDelegate_tStatic
    abstract constant: props: ConstNodeProps -> t
    abstract identity: x: ElemNode -> t
    abstract identity: props: IdentityNodeProps -> t
    abstract identity: props: IdentityNodeProps * x: ElemNode -> t
    abstract Delegate: DelegateStatic
    abstract Renderer: RendererStatic

type [<AllowNullLiteral>] EmptyList =
    abstract opaque: obj option with get, set

type [<AllowNullLiteral>] EmptyListStatic =
    [<Emit "new $0($1...)">] abstract Create: unit -> EmptyList

type [<AllowNullLiteral>] Cons<'T> =
    abstract opaque: 'T with get, set

type [<AllowNullLiteral>] ConsStatic =
    [<Emit "new $0($1...)">] abstract Create: unit -> Cons<'T>

type list<'T> =
    U2<Cons<'T>, EmptyList>

type [<AllowNullLiteral>] props =
    abstract opaque: obj option with get, set

type [<AllowNullLiteral>] propsStatic =
    [<Emit "new $0($1...)">] abstract Create: unit -> props

type [<AllowNullLiteral>] t =
    abstract symbol: string
    abstract hash: float
    abstract kind: string
    abstract props: props
    abstract children: list<t>

type ElemNode =
    U2<t, float>

type [<AllowNullLiteral>] RenderDelegate_t =
    abstract opaque: obj option with get, set

type [<AllowNullLiteral>] RenderDelegate_tStatic =
    [<Emit "new $0($1...)">] abstract Create: unit -> RenderDelegate_t

type [<AllowNullLiteral>] ConstNodeProps =
    abstract key: string option with get, set
    abstract value: float with get, set

type [<AllowNullLiteral>] IdentityNodeProps =
    abstract key: string option with get, set
    abstract channel: float option with get, set

type [<AllowNullLiteral>] EventListener<'E> =
    [<Emit "$0($1...)">] abstract Invoke: ``event``: 'E -> unit

type [<AllowNullLiteral>] Events =
    abstract error: Error with get, set
    abstract fft: EventsFft with get, set
    abstract load: unit with get, set
    abstract meter: EventsMeter with get, set
    abstract scope: EventsScope with get, set
    abstract snapshot: EventsSnapshot with get, set

type [<AllowNullLiteral>] EventEmitter =
    inherit Events.EventEmitter
    abstract addListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract listenerCount: eventName: 'K * ?listener: EventListener<Events> -> float
    abstract listeners: eventName: 'K -> ResizeArray<Function>
    abstract off: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract on: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract once: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract prependListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract prependOnceListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract removeAllListeners: ?eventName: 'K -> EventEmitter
    abstract removeListener: eventName: 'K * listener: EventListener<Events> -> EventEmitter
    abstract rawListeners: eventName: 'K -> ResizeArray<Function>

type [<AllowNullLiteral>] Delegate =
    abstract nodesAdded: float with get, set
    abstract nodesRemoved: float with get, set
    abstract edgesAdded: float with get, set
    abstract propsWritten: float with get, set
    abstract nodeMap: Map<float, obj option> with get, set
    abstract clear: unit -> unit
    abstract getNodeMap: unit -> Map<float, obj option>
    abstract getTerminalGeneration: unit -> float
    abstract createNode: hash: obj option * ``type``: obj option -> unit
    abstract deleteNode: hash: obj option -> unit
    abstract appendChild: parentHash: obj option * childHash: obj option -> unit
    abstract setProperty: hash: obj option * key: obj option * value: obj option -> unit
    abstract activateRoots: roots: obj option -> unit
    abstract commitUpdates: unit -> unit
    abstract getPackedInstructions: unit -> ResizeArray<obj option>

type [<AllowNullLiteral>] DelegateStatic =
    [<Emit "new $0($1...)">] abstract Create: unit -> Delegate

type [<AllowNullLiteral>] Renderer =
    abstract createRef: kind: obj option * props: obj option * children: obj option -> ResizeArray<U2<t, (obj option -> unit)>>
    abstract render: [<ParamArray>] args: ResizeArray<obj option> -> RendererRenderReturn

type [<AllowNullLiteral>] RendererRenderReturn =
    abstract nodesAdded: float with get, set
    abstract edgesAdded: float with get, set
    abstract propsWritten: float with get, set
    abstract elapsedTimeMs: float with get, set

type [<AllowNullLiteral>] RendererStatic =
    [<Emit "new $0($1...)">] abstract Create: sendMessage: obj option -> Renderer

type [<AllowNullLiteral>] StdlibTrain =
    abstract key: string option with get, set

type [<AllowNullLiteral>] StdlibNoise =
    abstract key: string option with get, set
    abstract seed: float option with get, set

type [<AllowNullLiteral>] StdlibIdentity =
    abstract key: string option with get, set
    abstract channel: float option with get, set

type [<AllowNullLiteral>] StdlibConstant =
    abstract key: string option with get, set
    abstract value: float with get, set

type [<AllowNullLiteral>] StdlibMaxhold =
    abstract key: string option with get, set
    abstract hold: float option with get, set

type [<AllowNullLiteral>] StdlibOnce =
    abstract key: string option with get, set
    abstract arm: bool option with get, set

type [<AllowNullLiteral>] StdlibMetro =
    abstract key: string option with get, set
    abstract interval: float option with get, set

type [<AllowNullLiteral>] StdlibSample =
    abstract key: string option with get, set
    abstract path: string option with get, set
    abstract mode: string option with get, set
    abstract startOffset: float option with get, set
    abstract stopOffset: float option with get, set

type [<AllowNullLiteral>] StdlibTable =
    abstract key: string option with get, set
    abstract path: string option with get, set

type [<AllowNullLiteral>] StdlibSeq =
    abstract key: string option with get, set
    abstract seq: ResizeArray<float> option with get, set
    abstract offset: float option with get, set
    abstract hold: bool option with get, set
    abstract loop: bool option with get, set

type [<AllowNullLiteral>] StdlibSparseqSeq =
    abstract value: float with get, set
    abstract tickTime: float with get, set

type [<AllowNullLiteral>] StdlibSparseq =
    abstract key: string option with get, set
    abstract seq: ResizeArray<StdlibSparseqSeq> option with get, set
    abstract offset: float option with get, set
    abstract loop: U2<bool, ResizeArray<float>> option with get, set
    abstract resetOnLoop: bool option with get, set
    abstract interpolate: float option with get, set
    abstract tickInterval: float option with get, set

type [<AllowNullLiteral>] StdlibSparseq2Seq =
    abstract value: float with get, set
    abstract time: float with get, set

type [<AllowNullLiteral>] StdlibSparseq2 =
    abstract key: string option with get, set
    abstract seq: ResizeArray<StdlibSparseq2Seq> option with get, set

type [<AllowNullLiteral>] StdlibDelay =
    abstract key: string option with get, set
    abstract size: float with get, set

type [<AllowNullLiteral>] StdlibMm1p =
    abstract key: string option with get, set
    abstract mode: string option with get, set

type [<AllowNullLiteral>] StdlibTapIn =
    abstract name: string with get, set

type [<AllowNullLiteral>] StdlibMeter =
    abstract key: string option with get, set
    abstract name: string option with get, set

type [<AllowNullLiteral>] StdlibScope =
    abstract key: string option with get, set
    abstract name: string option with get, set
    abstract size: float option with get, set
    abstract channels: float option with get, set

type [<AllowNullLiteral>] StdlibFft =
    abstract key: string option with get, set
    abstract name: string option with get, set
    abstract size: float option with get, set

type [<AllowNullLiteral>] StdlibCapture =
    abstract key: string option with get, set
    abstract size: float option with get, set

type [<AllowNullLiteral>] Stdlib =
    abstract ``const``: obj with get, set
    abstract ``in``: obj with get, set
    abstract ms2samps: t: ElemNode -> t
    abstract tau2pole: t: ElemNode -> t
    abstract db2gain: db: ElemNode -> t
    abstract gain2db: gain: ElemNode -> t
    abstract select: g: ElemNode * a: ElemNode * b: ElemNode -> t
    abstract hann: t: ElemNode -> t
    abstract train: rate: ElemNode -> t
    abstract train: props: StdlibTrain * rate: ElemNode -> t
    abstract cycle: rate: ElemNode -> t
    abstract cycle: props: StdlibTrain * rate: ElemNode -> t
    abstract saw: rate: ElemNode -> t
    abstract saw: props: StdlibTrain * rate: ElemNode -> t
    abstract square: rate: ElemNode -> t
    abstract square: props: StdlibTrain * rate: ElemNode -> t
    abstract triangle: rate: ElemNode -> t
    abstract triangle: props: StdlibTrain * rate: ElemNode -> t
    abstract blepsaw: rate: ElemNode -> t
    abstract blepsaw: props: StdlibTrain * rate: ElemNode -> t
    abstract blepsquare: rate: ElemNode -> t
    abstract blepsquare: props: StdlibTrain * rate: ElemNode -> t
    abstract bleptriangle: rate: ElemNode -> t
    abstract bleptriangle: props: StdlibTrain * rate: ElemNode -> t
    abstract noise: unit -> t
    abstract noise: props: StdlibNoise -> t
    abstract pinknoise: unit -> t
    abstract pinknoise: props: StdlibNoise -> t
    abstract identity: x: ElemNode -> t
    abstract identity: props: StdlibIdentity -> t
    abstract identity: props: StdlibIdentity * x: ElemNode -> t
    abstract sin: x: ElemNode -> t
    abstract sin: props: StdlibTrain * x: ElemNode -> t
    abstract cos: x: ElemNode -> t
    abstract cos: props: StdlibTrain * x: ElemNode -> t
    abstract tan: x: ElemNode -> t
    abstract tan: props: StdlibTrain * x: ElemNode -> t
    abstract tanh: x: ElemNode -> t
    abstract tanh: props: StdlibTrain * x: ElemNode -> t
    abstract asinh: x: ElemNode -> t
    abstract asinh: props: StdlibTrain * x: ElemNode -> t
    abstract ln: x: ElemNode -> t
    abstract ln: props: StdlibTrain * x: ElemNode -> t
    abstract log: x: ElemNode -> t
    abstract log: props: StdlibTrain * x: ElemNode -> t
    abstract log2: x: ElemNode -> t
    abstract log2: props: StdlibTrain * x: ElemNode -> t
    abstract ceil: x: ElemNode -> t
    abstract ceil: props: StdlibTrain * x: ElemNode -> t
    abstract floor: x: ElemNode -> t
    abstract floor: props: StdlibTrain * x: ElemNode -> t
    abstract sqrt: x: ElemNode -> t
    abstract sqrt: props: StdlibTrain * x: ElemNode -> t
    abstract exp: x: ElemNode -> t
    abstract exp: props: StdlibTrain * x: ElemNode -> t
    abstract abs: x: ElemNode -> t
    abstract abs: props: StdlibTrain * x: ElemNode -> t
    abstract le: a: ElemNode * b: ElemNode -> t
    abstract le: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract leq: a: ElemNode * b: ElemNode -> t
    abstract leq: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract ge: a: ElemNode * b: ElemNode -> t
    abstract ge: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract geq: a: ElemNode * b: ElemNode -> t
    abstract geq: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract pow: a: ElemNode * b: ElemNode -> t
    abstract pow: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract eq: a: ElemNode * b: ElemNode -> t
    abstract eq: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract ``and``: a: ElemNode * b: ElemNode -> t
    abstract ``and``: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract ``or``: a: ElemNode * b: ElemNode -> t
    abstract ``or``: props: StdlibTrain * a: ElemNode * b: ElemNode -> t
    abstract add: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract add: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract sub: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract sub: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract mul: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract mul: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract div: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract div: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract ``mod``: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract ``mod``: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract min: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract min: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract max: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract max: props: StdlibTrain * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract smooth: p: ElemNode * x: ElemNode -> t
    abstract smooth: props: StdlibTrain * p: ElemNode * x: ElemNode -> t
    abstract sm: x: ElemNode -> t
    abstract sm: props: StdlibTrain * x: ElemNode -> t
    abstract zero: b0: ElemNode * b1: ElemNode * x: ElemNode -> t
    abstract zero: props: StdlibTrain * b0: ElemNode * b1: ElemNode * x: ElemNode -> t
    abstract dcblock: x: ElemNode -> t
    abstract dcblock: props: StdlibTrain * x: ElemNode -> t
    abstract df11: b0: ElemNode * b1: ElemNode * a1: ElemNode * x: ElemNode -> t
    abstract df11: props: StdlibTrain * b0: ElemNode * b1: ElemNode * a1: ElemNode * x: ElemNode -> t
    abstract lowpass: fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract lowpass: props: StdlibTrain * fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract highpass: fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract highpass: props: StdlibTrain * fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract bandpass: fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract bandpass: props: StdlibTrain * fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract notch: fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract notch: props: StdlibTrain * fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract allpass: fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract allpass: props: StdlibTrain * fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract peak: fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract peak: props: StdlibTrain * fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract lowshelf: fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract lowshelf: props: StdlibTrain * fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract highshelf: fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract highshelf: props: StdlibTrain * fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract pink: x: ElemNode -> t
    abstract pink: props: StdlibTrain * x: ElemNode -> t
    abstract adsr: attackSec: ElemNode * decaySec: ElemNode * sustain: ElemNode * releaseSec: ElemNode * gate: ElemNode -> t
    abstract adsr: props: StdlibTrain * attackSec: ElemNode * decaySec: ElemNode * sustain: ElemNode * releaseSec: ElemNode * gate: ElemNode -> t
    abstract compress: attackMs: ElemNode * releaseMs: ElemNode * threshold: ElemNode * ratio: ElemNode * sidechain: ElemNode * xn: ElemNode -> t
    abstract compress: props: StdlibTrain * attackMs: ElemNode * releaseMs: ElemNode * threshold: ElemNode * ratio: ElemNode * sidechain: ElemNode * xn: ElemNode -> t
    abstract constant: props: StdlibConstant -> t
    abstract sr: unit -> t
    abstract time: unit -> t
    abstract counter: gate: ElemNode -> t
    abstract counter: props: StdlibTrain * gate: ElemNode -> t
    abstract accum: xn: ElemNode * reset: ElemNode -> t
    abstract accum: props: StdlibTrain * xn: ElemNode * reset: ElemNode -> t
    abstract phasor: rate: ElemNode -> t
    abstract phasor: props: StdlibTrain * rate: ElemNode -> t
    abstract syncphasor: rate: ElemNode * reset: ElemNode -> t
    abstract syncphasor: props: StdlibTrain * rate: ElemNode * reset: ElemNode -> t
    abstract latch: t: ElemNode * x: ElemNode -> t
    abstract latch: props: StdlibTrain * t: ElemNode * x: ElemNode -> t
    abstract maxhold: x: ElemNode * reset: ElemNode -> t
    abstract maxhold: props: StdlibMaxhold * x: ElemNode * reset: ElemNode -> t
    abstract once: x: ElemNode -> t
    abstract once: props: StdlibOnce * x: ElemNode -> t
    abstract rand: unit -> t
    abstract rand: props: StdlibNoise -> t
    abstract metro: unit -> t
    abstract metro: props: StdlibMetro -> t
    abstract sample: props: StdlibSample * trigger: ElemNode * rate: ElemNode -> t
    abstract table: props: StdlibTable * t: ElemNode -> t
    abstract convolve: props: StdlibTable * x: ElemNode -> t
    abstract seq: props: StdlibSeq * trigger: ElemNode * reset: ElemNode -> t
    abstract seq2: props: StdlibSeq * trigger: ElemNode * reset: ElemNode -> t
    abstract sparseq: props: StdlibSparseq * trigger: ElemNode * reset: ElemNode -> t
    abstract sparseq2: props: StdlibSparseq2 * time: ElemNode -> t
    abstract pole: p: ElemNode * x: ElemNode -> t
    abstract pole: props: StdlibTrain * p: ElemNode * x: ElemNode -> t
    abstract env: atkPole: ElemNode * relPole: ElemNode * x: ElemNode -> t
    abstract env: props: StdlibTrain * atkPole: ElemNode * relPole: ElemNode * x: ElemNode -> t
    abstract z: x: ElemNode -> t
    abstract z: props: StdlibTrain * x: ElemNode -> t
    abstract delay: props: StdlibDelay * len: ElemNode * fb: ElemNode * x: ElemNode -> t
    abstract sdelay: props: StdlibDelay * x: ElemNode -> t
    abstract prewarp: fc: ElemNode -> t
    abstract mm1p: fc: ElemNode * x: ElemNode -> t
    abstract mm1p: props: StdlibMm1p * fc: ElemNode * x: ElemNode -> t
    abstract svf: fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract svf: props: StdlibMm1p * fc: ElemNode * q: ElemNode * x: ElemNode -> t
    abstract svfshelf: fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract svfshelf: props: StdlibMm1p * fc: ElemNode * q: ElemNode * gainDecibels: ElemNode * x: ElemNode -> t
    abstract biquad: b0: ElemNode * b1: ElemNode * b2: ElemNode * a1: ElemNode * a2: ElemNode * x: ElemNode -> t
    abstract biquad: props: StdlibTrain * b0: ElemNode * b1: ElemNode * b2: ElemNode * a1: ElemNode * a2: ElemNode * x: ElemNode -> t
    abstract tapIn: props: StdlibTapIn -> t
    abstract tapOut: props: StdlibTapIn * x: ElemNode -> t
    abstract meter: x: ElemNode -> t
    abstract meter: props: StdlibMeter * x: ElemNode -> t
    abstract snapshot: trigger: ElemNode * x: ElemNode -> t
    abstract snapshot: props: StdlibMeter * trigger: ElemNode * x: ElemNode -> t
    abstract scope: [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract scope: props: StdlibScope * [<ParamArray>] args: ResizeArray<ElemNode> -> t
    abstract fft: x: ElemNode -> t
    abstract fft: props: StdlibFft * x: ElemNode -> t
    abstract capture: g: ElemNode * x: ElemNode -> t
    abstract capture: props: StdlibCapture * g: ElemNode * x: ElemNode -> t

type [<AllowNullLiteral>] EventsFftData =
    abstract real: Float32Array with get, set
    abstract imag: Float32Array with get, set

type [<AllowNullLiteral>] EventsFft =
    abstract source: string option with get, set
    abstract data: EventsFftData with get, set

type [<AllowNullLiteral>] EventsMeter =
    abstract source: string option with get, set
    abstract min: float with get, set
    abstract max: float with get, set

type [<AllowNullLiteral>] EventsScope =
    abstract source: string option with get, set
    abstract data: ResizeArray<Float32Array> with get, set

type [<AllowNullLiteral>] EventsSnapshot =
    abstract source: string option with get, set
    abstract data: float with get, set
