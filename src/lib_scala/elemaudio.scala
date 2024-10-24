package audio.libs.elemaudio

import scala.scalajs.js
import scala.scalajs.js.annotation.*

class AudioNode extends js.Object

@js.native
@JSImport("@elemaudio/core", "el")
object El extends js.Object:
  def const(props: js.Object): AudioNode = js.native

  def mul(a: AudioNode, b: AudioNode): AudioNode = js.native
  def add(a: AudioNode, b: AudioNode): AudioNode = js.native
  def div(a: AudioNode, b: AudioNode): AudioNode = js.native
  def sub(a: AudioNode, b: AudioNode): AudioNode = js.native
  def pow(a: AudioNode, b: AudioNode): AudioNode = js.native
  def mod(a: AudioNode, b: AudioNode): AudioNode = js.native

  def le(a: AudioNode, b: AudioNode): AudioNode = js.native
  def ge(a: AudioNode, b: AudioNode): AudioNode = js.native
  def leq(a: AudioNode, b: AudioNode): AudioNode = js.native
  def geq(a: AudioNode, b: AudioNode): AudioNode = js.native
  def max(a: AudioNode, b: AudioNode): AudioNode = js.native
  def min(a: AudioNode, b: AudioNode): AudioNode = js.native

  def cycle(n: AudioNode): AudioNode = js.native
  def triangle(n: AudioNode): AudioNode = js.native
  def saw(n: AudioNode): AudioNode = js.native
  def square(n: AudioNode): AudioNode = js.native
  def train(n: AudioNode): AudioNode = js.native
  def phasor(n: AudioNode): AudioNode = js.native

  def noise(): AudioNode = js.native
  def pinknoise(): AudioNode = js.native
  def pink(n: AudioNode): AudioNode = js.native

  def adsr(
      attack: AudioNode,
      decay: AudioNode,
      sustain: AudioNode,
      release: AudioNode,
      gate: AudioNode
  ): AudioNode = js.native
  def lowpass(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native
  def highpass(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native

  def table(props: js.Object, n: AudioNode): AudioNode = js.native

  def accum(n: AudioNode, reset: AudioNode): AudioNode = js.native
  def sr(): AudioNode = js.native
  def z(n: AudioNode): AudioNode = js.native
  def time(): AudioNode = js.native
  def latch(train: AudioNode, sig: AudioNode): AudioNode = js.native

end El

// standalone functions

inline def sr: AudioNode = El.sr()
inline def sampleRate: AudioNode = El.sr()
inline def noise: AudioNode = El.noise()
inline def pinknoise: AudioNode = El.pinknoise()

// AudioNode extension methods

extension (node: AudioNode)
  inline def cycle: AudioNode = El.cycle(node)
  inline def triangle: AudioNode = El.triangle(node)
  inline def saw: AudioNode = El.saw(node)
  inline def square: AudioNode = El.square(node)

  inline def train: AudioNode = El.train(node)
  inline def phasor: AudioNode = El.phasor(node)

  inline infix def *(other: AudioNode): AudioNode = El.mul(node, other)
  inline infix def +(other: AudioNode): AudioNode = El.add(node, other)
  inline infix def /(other: AudioNode): AudioNode = El.div(node, other)
  inline infix def -(other: AudioNode): AudioNode = El.sub(node, other)

  inline infix def <(other: AudioNode): AudioNode = El.le(node, other)
  inline infix def >(other: AudioNode): AudioNode = El.ge(node, other)
  inline infix def <=(other: AudioNode): AudioNode = El.leq(node, other)
  inline infix def >=(other: AudioNode): AudioNode = El.geq(node, other)

  inline def pow(other: AudioNode): AudioNode = El.pow(node, other)
  inline infix def **(other: AudioNode): AudioNode = El.pow(node, other)
  inline def mod(other: AudioNode): AudioNode = El.mod(node, other)
  inline infix def %(other: AudioNode): AudioNode = El.mod(node, other)
  inline def max(other: AudioNode): AudioNode = El.max(node, other)
  inline def min(other: AudioNode): AudioNode = El.min(node, other)

  inline def pink: AudioNode = El.pink(node)
  inline def latch(train: AudioNode): AudioNode = El.latch(train, node)

  inline def adsr(
      attack: AudioNode,
      decay: AudioNode,
      sustain: AudioNode,
      release: AudioNode
  ): AudioNode = El.adsr(attack, decay, sustain, release, node)
  inline def lowpass(freq: AudioNode, q: AudioNode): AudioNode =
    El.lowpass(freq, q, node)
  inline def highpass(freq: AudioNode, q: AudioNode): AudioNode =
    El.highpass(freq, q, node)

  @scala.annotation.nowarn
  inline def table(pathStr: String): AudioNode =
    El.table(new js.Object { val path = pathStr }, node)

  inline def accum(reset: AudioNode): AudioNode = El.accum(node, reset)
  inline def z: AudioNode = El.z(node)

  // helper functions

  inline def fit0111 =
    node * 2.0 - 1.0

  inline def fit1101 =
    node * 0.5 + 0.5

  inline def wrap01 =
    ((node % 1.0) + 1.0) % 1.0

// Conversion

extension (num: Double)
  @scala.annotation.nowarn
  inline infix def °(str: String): AudioNode =
    El.const(
      new js.Object:
        val value = num
        val key = str
    )

given Conversion[Double, AudioNode] with
  @scala.annotation.nowarn
  inline def apply(x: Double): AudioNode =
    El.const(
      new js.Object:
        val value = x
    )

given Conversion[Int, AudioNode] with
  @scala.annotation.nowarn
  inline def apply(x: Int): AudioNode =
    El.const(
      new js.Object:
        val value = x
    )
