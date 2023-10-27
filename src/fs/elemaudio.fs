module Elemaudio

open System
open Fable.Core

[<AllowNullLiteral>]
type props =
  abstract opaque: obj option with get, set

[<AllowNullLiteral>]
type t =
  abstract symbol: string
  abstract hash: float
  abstract kind: string
  abstract props: props
  abstract children: list<t>

type ElemNode = U2<t, float>

[<AllowNullLiteral>]
type ConstNodeProps =
  abstract key: string option with get, set
  abstract value: float with get, set

[<AllowNullLiteral>]
type IdentityNodeProps =
  abstract key: string option with get, set
  abstract channel: float option with get, set

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
type StdlibSparseq2Seq =
  abstract value: float with get, set
  abstract time: float with get, set

[<AllowNullLiteral>]
type StdlibSparseq2 =
  abstract key: string option with get, set
  abstract seq: ResizeArray<StdlibSparseq2Seq> option with get, set

[<AllowNullLiteral>]
type StdlibDelay =
  abstract key: string option with get, set
  abstract size: float with get, set

[<AllowNullLiteral>]
type StdlibMm1p =
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

  abstract adsr:
    attackSec: ElemNode * decaySec: ElemNode * sustain: ElemNode * releaseSec: ElemNode * gate: ElemNode -> t

  abstract adsr:
    props: StdlibTrain *
    attackSec: ElemNode *
    decaySec: ElemNode *
    sustain: ElemNode *
    releaseSec: ElemNode *
    gate: ElemNode ->
      t

  abstract compress:
    attackMs: ElemNode *
    releaseMs: ElemNode *
    threshold: ElemNode *
    ratio: ElemNode *
    sidechain: ElemNode *
    xn: ElemNode ->
      t

  abstract compress:
    props: StdlibTrain *
    attackMs: ElemNode *
    releaseMs: ElemNode *
    threshold: ElemNode *
    ratio: ElemNode *
    sidechain: ElemNode *
    xn: ElemNode ->
      t

  abstract constant: props: obj -> t
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

  abstract biquad:
    props: StdlibTrain * b0: ElemNode * b1: ElemNode * b2: ElemNode * a1: ElemNode * a2: ElemNode * x: ElemNode -> t

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
