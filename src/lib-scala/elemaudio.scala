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

  def cycle(n: AudioNode): AudioNode = js.native
  def triangle(n: AudioNode): AudioNode = js.native
  def saw(n: AudioNode): AudioNode = js.native
  def square(n: AudioNode): AudioNode = js.native
  def train(n: AudioNode): AudioNode = js.native
  def phasor(n: AudioNode): AudioNode = js.native

  def table(props: js.Object, n: AudioNode): AudioNode = js.native

  def accum(n: AudioNode, reset: AudioNode): AudioNode = js.native
  def sr(): AudioNode = js.native
  def z(n: AudioNode): AudioNode = js.native

end El


inline def sr: AudioNode = El.sr()
inline def sampleRate: AudioNode = El.sr()


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

  @scala.annotation.nowarn
  inline def table(pathStr: String): AudioNode =
    El.table(new js.Object { val path = pathStr }, node)

  inline def accum(reset: AudioNode): AudioNode = El.accum(node, reset)
  inline def z: AudioNode = El.z(node)


extension (num: Double)
  @scala.annotation.nowarn
  inline infix def $(str: String): AudioNode =
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
