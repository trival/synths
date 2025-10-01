package audio.libs.elemaudio

import scala.scalajs.js
import scala.scalajs.js.annotation.*

/** Represents a node in the Elementary Audio signal graph.
  *
  * AudioNode is the fundamental building block for audio processing in
  * Elementary Audio. Nodes can be combined using operators and methods to
  * create complex audio signal chains.
  */
class AudioNode extends js.Object

/** Elementary Audio core library bindings (internal API).
  *
  * Note: Prefer using extension methods on AudioNode for idiomatic Scala API.
  * This object provides raw bindings to the JavaScript library.
  *
  * @see
  *   [[https://www.elementary.audio/docs Elementary Audio Documentation]]
  */
@js.native
@JSImport("@elemaudio/core", "el")
object El extends js.Object:
  def const(props: js.Object): AudioNode = js.native

  // Arithmetic operators
  def mul(a: AudioNode, b: AudioNode): AudioNode = js.native
  def add(a: AudioNode, b: AudioNode): AudioNode = js.native
  def div(a: AudioNode, b: AudioNode): AudioNode = js.native
  def sub(a: AudioNode, b: AudioNode): AudioNode = js.native
  def pow(a: AudioNode, b: AudioNode): AudioNode = js.native
  def mod(a: AudioNode, b: AudioNode): AudioNode = js.native

  // Comparison operators
  def le(a: AudioNode, b: AudioNode): AudioNode = js.native
  def ge(a: AudioNode, b: AudioNode): AudioNode = js.native
  def leq(a: AudioNode, b: AudioNode): AudioNode = js.native
  def geq(a: AudioNode, b: AudioNode): AudioNode = js.native
  def eq(a: AudioNode, b: AudioNode): AudioNode = js.native
  def max(a: AudioNode, b: AudioNode): AudioNode = js.native
  def min(a: AudioNode, b: AudioNode): AudioNode = js.native

  // Logical operators
  def and(a: AudioNode, b: AudioNode): AudioNode = js.native
  def or(a: AudioNode, b: AudioNode): AudioNode = js.native

  // Math functions - rounding
  def abs(n: AudioNode): AudioNode = js.native
  def floor(n: AudioNode): AudioNode = js.native
  def ceil(n: AudioNode): AudioNode = js.native
  def round(n: AudioNode): AudioNode = js.native

  // Math functions - trigonometric
  def sin(n: AudioNode): AudioNode = js.native
  def cos(n: AudioNode): AudioNode = js.native
  def tan(n: AudioNode): AudioNode = js.native
  def tanh(n: AudioNode): AudioNode = js.native
  def asinh(n: AudioNode): AudioNode = js.native

  // Math functions - logarithmic
  def ln(n: AudioNode): AudioNode = js.native
  def log(n: AudioNode): AudioNode = js.native
  def log2(n: AudioNode): AudioNode = js.native

  // Math functions - other
  def sqrt(n: AudioNode): AudioNode = js.native
  def exp(n: AudioNode): AudioNode = js.native

  // Signal generators - oscillators
  /** Sine wave oscillator. Input is frequency in Hz. */
  def cycle(n: AudioNode): AudioNode = js.native

  /** Triangle wave oscillator. Input is frequency in Hz. */
  def triangle(n: AudioNode): AudioNode = js.native

  /** Sawtooth wave oscillator. Input is frequency in Hz. */
  def saw(n: AudioNode): AudioNode = js.native

  /** Square wave oscillator. Input is frequency in Hz. */
  def square(n: AudioNode): AudioNode = js.native

  /** Pulse train generator. Produces pulses (0 to 1) at given frequency. */
  def train(n: AudioNode): AudioNode = js.native

  /** Phasor oscillator. Produces ramp from 0 to 1 at given frequency. */
  def phasor(n: AudioNode): AudioNode = js.native

  // Signal generators - band-limited oscillators
  /** Band-limited sawtooth oscillator using BLEP synthesis. Reduces aliasing.
    */
  def blepsaw(n: AudioNode): AudioNode = js.native

  /** Band-limited square wave oscillator using BLEP synthesis. Reduces
    * aliasing.
    */
  def blepsquare(n: AudioNode): AudioNode = js.native

  /** Band-limited triangle oscillator using BLEP synthesis. Reduces aliasing.
    */
  def bleptriangle(n: AudioNode): AudioNode = js.native

  // Signal generators - noise
  /** White noise generator. */
  def noise(): AudioNode = js.native

  /** Pink noise generator (1/f noise). */
  def pinknoise(): AudioNode = js.native

  /** Pink noise filter. Applies pink noise characteristics to input signal. */
  def pink(n: AudioNode): AudioNode = js.native

  /** Random value generator. Outputs random values. */
  def rand(): AudioNode = js.native

  // Envelopes
  /** ADSR envelope generator.
    * @param attack
    *   Attack time in seconds
    * @param decay
    *   Decay time in seconds
    * @param sustain
    *   Sustain level (0-1)
    * @param release
    *   Release time in seconds
    * @param gate
    *   Gate signal (0 or 1) to trigger envelope
    */
  def adsr(
      attack: AudioNode,
      decay: AudioNode,
      sustain: AudioNode,
      release: AudioNode,
      gate: AudioNode
  ): AudioNode = js.native

  /** Envelope follower with separate attack and release times.
    * @param attack
    *   Attack pole position (use tau2pole for time conversion)
    * @param release
    *   Release pole position (use tau2pole for time conversion)
    * @param sig
    *   Input signal to follow
    */
  def env(attack: AudioNode, release: AudioNode, sig: AudioNode): AudioNode =
    js.native

  // Filters - basic
  /** Second-order lowpass filter.
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Resonance/quality factor
    * @param sig
    *   Input signal
    */
  def lowpass(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native

  /** Second-order highpass filter.
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Resonance/quality factor
    * @param sig
    *   Input signal
    */
  def highpass(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native

  /** Second-order bandpass filter.
    * @param freq
    *   Center frequency in Hz
    * @param q
    *   Bandwidth/quality factor
    * @param sig
    *   Input signal
    */
  def bandpass(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native

  /** Second-order notch (band-reject) filter.
    * @param freq
    *   Center frequency in Hz to reject
    * @param q
    *   Bandwidth/quality factor
    * @param sig
    *   Input signal
    */
  def notch(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native

  /** Second-order allpass filter. Affects phase without changing magnitude.
    * @param freq
    *   Center frequency in Hz
    * @param q
    *   Quality factor
    * @param sig
    *   Input signal
    */
  def allpass(freq: AudioNode, q: AudioNode, sig: AudioNode): AudioNode =
    js.native

  // Filters - shelving and peak
  /** Low shelf filter. Boosts or cuts frequencies below cutoff.
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Quality factor
    * @param gain
    *   Gain in dB (positive to boost, negative to cut)
    * @param sig
    *   Input signal
    */
  def lowshelf(
      freq: AudioNode,
      q: AudioNode,
      gain: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** High shelf filter. Boosts or cuts frequencies above cutoff.
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Quality factor
    * @param gain
    *   Gain in dB (positive to boost, negative to cut)
    * @param sig
    *   Input signal
    */
  def highshelf(
      freq: AudioNode,
      q: AudioNode,
      gain: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** Peaking EQ filter. Boosts or cuts frequencies around center frequency.
    * @param freq
    *   Center frequency in Hz
    * @param q
    *   Bandwidth/quality factor
    * @param gain
    *   Gain in dB (positive to boost, negative to cut)
    * @param sig
    *   Input signal
    */
  def peak(
      freq: AudioNode,
      q: AudioNode,
      gain: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  // Filters - advanced
  /** Generic biquad filter with direct coefficient control. Implements
    * transposed direct-form II filter.
    * @param b0
    *   Feed-forward coefficient 0
    * @param b1
    *   Feed-forward coefficient 1
    * @param b2
    *   Feed-forward coefficient 2
    * @param a1
    *   Feedback coefficient 1
    * @param a2
    *   Feedback coefficient 2
    * @param sig
    *   Input signal
    */
  def biquad(
      b0: AudioNode,
      b1: AudioNode,
      b2: AudioNode,
      a1: AudioNode,
      a2: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** State variable filter with multiple modes.
    * @param mode
    *   Filter mode (0=lowpass, 1=bandpass, 2=highpass)
    * @param freq
    *   Cutoff/center frequency in Hz
    * @param q
    *   Resonance/quality factor
    * @param sig
    *   Input signal
    */
  def svf(
      mode: AudioNode,
      freq: AudioNode,
      q: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** State variable filter with shelf modes.
    * @param mode
    *   Filter mode
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Quality factor
    * @param gain
    *   Gain for shelf modes
    * @param sig
    *   Input signal
    */
  def svfshelf(
      mode: AudioNode,
      freq: AudioNode,
      q: AudioNode,
      gain: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** First-order direct-form filter.
    * @param b0
    *   Feed-forward coefficient
    * @param a1
    *   Feedback coefficient
    * @param sig
    *   Input signal
    */
  def df11(b0: AudioNode, a1: AudioNode, sig: AudioNode): AudioNode = js.native

  /** DC blocking filter. Removes DC offset from signal. */
  def dcblock(sig: AudioNode): AudioNode = js.native

  // Dynamics
  /** Simple hard-knee compressor.
    * @param atkMs
    *   Attack time in milliseconds
    * @param relMs
    *   Release time in milliseconds
    * @param threshold
    *   Threshold in dB
    * @param ratio
    *   Compression ratio
    * @param sidechain
    *   Sidechain signal for detection
    * @param sig
    *   Input signal to compress
    */
  def compress(
      atkMs: AudioNode,
      relMs: AudioNode,
      threshold: AudioNode,
      ratio: AudioNode,
      sidechain: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** Soft-knee compressor with adjustable knee width.
    * @param atkMs
    *   Attack time in milliseconds
    * @param relMs
    *   Release time in milliseconds
    * @param threshold
    *   Threshold in dB
    * @param ratio
    *   Compression ratio
    * @param knee
    *   Knee width in dB
    * @param sidechain
    *   Sidechain signal for detection
    * @param sig
    *   Input signal to compress
    */
  def skcompress(
      atkMs: AudioNode,
      relMs: AudioNode,
      threshold: AudioNode,
      ratio: AudioNode,
      knee: AudioNode,
      sidechain: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  // Delay and echo
  /** Variable-length delay line with feedback.
    * @param props
    *   Configuration object with `size` field for max delay length
    * @param len
    *   Delay time in samples
    * @param fb
    *   Feedback coefficient (-1 to 1)
    * @param sig
    *   Input signal
    */
  def delay(
      props: js.Object,
      len: AudioNode,
      fb: AudioNode,
      sig: AudioNode
  ): AudioNode = js.native

  /** Simple static delay. No feedback.
    * @param len
    *   Delay time in samples
    * @param sig
    *   Input signal
    */
  def sdelay(len: AudioNode, sig: AudioNode): AudioNode = js.native

  /** Creates a delay tap input point for multi-tap delay.
    * @param props
    *   Configuration object with name identifier
    * @param sig
    *   Input signal
    */
  def tapIn(props: js.Object, sig: AudioNode): AudioNode = js.native

  /** Reads from a delay tap at specified delay time.
    * @param props
    *   Configuration object with tap name
    * @param len
    *   Delay time in samples
    * @param tap
    *   Tap identifier matching tapIn
    */
  def tapOut(props: js.Object, len: AudioNode, tap: AudioNode): AudioNode =
    js.native

  // Samplers
  /** Sample player with trigger and rate control.
    * @param props
    *   Configuration with `path` (sample file), `mode` (trigger/gate/loop),
    *   `startOffset`, `stopOffset`
    * @param trigger
    *   Pulse train to trigger playback
    * @param rate
    *   Playback rate (1.0 = normal speed)
    */
  def sample(
      props: js.Object,
      trigger: AudioNode,
      rate: AudioNode
  ): AudioNode = js.native

  /** Sample sequencer. Triggers samples from sequence on pulse.
    * @param props
    *   Configuration with `seq` array and `path`
    * @param trigger
    *   Pulse train to advance sequence
    */
  def sampleseq(props: js.Object, trigger: AudioNode): AudioNode = js.native

  /** Sample sequencer with reset control.
    * @param props
    *   Configuration with `seq` array and `path`
    * @param reset
    *   Reset signal to restart sequence
    * @param trigger
    *   Pulse train to advance sequence
    */
  def sampleseq2(
      props: js.Object,
      reset: AudioNode,
      trigger: AudioNode
  ): AudioNode = js.native

  /** Wavetable lookup/oscillator.
    * @param props
    *   Configuration with `path` to wavetable data
    * @param n
    *   Phase/index into table (0-1 for full table)
    */
  def table(props: js.Object, n: AudioNode): AudioNode = js.native

  // Sequencers
  /** Value sequencer. Steps through array of values on trigger.
    * @param props
    *   Configuration with `seq` array, optional `hold`, `loop`, `offset`
    * @param trigger
    *   Pulse train to advance sequence
    */
  def seq(props: js.Object, trigger: AudioNode): AudioNode = js.native

  /** Value sequencer with reset control.
    * @param props
    *   Configuration with `seq` array
    * @param reset
    *   Reset signal to restart sequence
    * @param trigger
    *   Pulse train to advance sequence
    */
  def seq2(
      props: js.Object,
      reset: AudioNode,
      trigger: AudioNode
  ): AudioNode = js.native

  /** Sparse sequencer for rhythmic patterns.
    * @param props
    *   Configuration with `seq` array
    * @param trigger
    *   Pulse train to advance sequence
    */
  def sparseq(props: js.Object, trigger: AudioNode): AudioNode = js.native

  /** Sparse sequencer with reset control.
    * @param props
    *   Configuration with `seq` array
    * @param reset
    *   Reset signal to restart sequence
    * @param trigger
    *   Pulse train to advance sequence
    */
  def sparseq2(
      props: js.Object,
      reset: AudioNode,
      trigger: AudioNode
  ): AudioNode = js.native

  /** Selects between two signals based on gate.
    * @param gate
    *   Selection signal (0 selects a, non-zero selects b)
    * @param a
    *   First signal option
    * @param b
    *   Second signal option
    */
  def select(gate: AudioNode, a: AudioNode, b: AudioNode): AudioNode =
    js.native

  // Utility - timing and control
  /** Accumulator. Outputs running sum of input, resets on pulse. Use with care
    * as values accumulate quickly.
    * @param n
    *   Input signal to accumulate
    * @param reset
    *   Pulse train to reset accumulator
    */
  def accum(n: AudioNode, reset: AudioNode): AudioNode = js.native

  /** Counter. Counts elapsed samples when gate is high, resets when low.
    * @param gate
    *   Control signal (high=count, low=reset)
    */
  def counter(gate: AudioNode): AudioNode = js.native

  /** Metronome/clock generator.
    * @param props
    *   Configuration with timing parameters
    * @param n
    *   Frequency or tempo control
    */
  def metro(props: js.Object, n: AudioNode): AudioNode = js.native

  /** Returns the current sample rate as a constant signal. */
  def sr(): AudioNode = js.native

  /** Single-sample delay (z^-1 in Z-transform notation).
    * @param n
    *   Input signal
    */
  def z(n: AudioNode): AudioNode = js.native

  /** Outputs elapsed time in seconds since rendering started. */
  def time(): AudioNode = js.native

  /** Sample-and-hold. Captures signal value on rising edge of train.
    * @param train
    *   Pulse train for sampling moments
    * @param sig
    *   Signal to sample
    */
  def latch(train: AudioNode, sig: AudioNode): AudioNode = js.native

  /** Maximum value hold over a window of samples.
    * @param length
    *   Window length in samples
    * @param sig
    *   Input signal
    */
  def maxhold(length: AudioNode, sig: AudioNode): AudioNode = js.native

  // Utility - smoothing and modulation
  /** Unity-gain one-pole smoothing filter. For addressing control signal
    * discontinuities.
    * @param pole
    *   Pole position (use tau2pole for time constant conversion)
    * @param sig
    *   Signal to smooth
    */
  def smooth(pole: AudioNode, sig: AudioNode): AudioNode = js.native

  /** One-pole filter.
    * @param pole
    *   Pole position
    * @param sig
    *   Input signal
    */
  def pole(pole: AudioNode, sig: AudioNode): AudioNode = js.native

  /** One-pole filter with T60 time constant.
    * @param t60
    *   T60 decay time
    * @param sig
    *   Input signal
    */
  def mm1p(t60: AudioNode, sig: AudioNode): AudioNode = js.native

  /** Smoothing function (alternative to smooth).
    * @param n
    *   Input signal
    */
  def sm(n: AudioNode): AudioNode = js.native

  // Utility - conversions
  /** Converts decibels to linear gain.
    * @param n
    *   Decibel value
    */
  def db2gain(n: AudioNode): AudioNode = js.native

  /** Converts milliseconds to samples at current sample rate.
    * @param n
    *   Time in milliseconds
    */
  def ms2samps(n: AudioNode): AudioNode = js.native

  /** Converts time constant (tau) to pole position for filters.
    * @param n
    *   Time constant in seconds
    */
  def tau2pole(n: AudioNode): AudioNode = js.native

  /** Prewarps frequency for bilinear transform in filter design.
    * @param n
    *   Frequency to prewarp
    */
  def prewarp(n: AudioNode): AudioNode = js.native

  // Utility - analysis and monitoring
  /** Captures audio data for analysis or recording.
    * @param props
    *   Configuration with capture settings
    * @param sig
    *   Signal to capture
    */
  def capture(props: js.Object, sig: AudioNode): AudioNode = js.native

  /** Oscilloscope visualization node.
    * @param props
    *   Configuration with scope settings
    * @param sig
    *   Signal to visualize
    */
  def scope(props: js.Object, sig: AudioNode): AudioNode = js.native

  /** Level meter for signal monitoring.
    * @param props
    *   Configuration with meter settings
    * @param sig
    *   Signal to meter
    */
  def meter(props: js.Object, sig: AudioNode): AudioNode = js.native

  /** Captures signal value at trigger moments.
    * @param props
    *   Configuration for snapshot
    * @param trigger
    *   Pulse train for capture moments
    * @param sig
    *   Signal to snapshot
    */
  def snapshot(
      props: js.Object,
      trigger: AudioNode,
      sig: AudioNode
  ): AudioNode =
    js.native

  /** Fast Fourier Transform for frequency analysis.
    * @param props
    *   Configuration with FFT settings
    * @param sig
    *   Signal to analyze
    */
  def fft(props: js.Object, sig: AudioNode): AudioNode = js.native

  // Utility - other
  /** Convolution with impulse response.
    * @param props
    *   Configuration with impulse response data
    * @param sig
    *   Input signal to convolve
    */
  def convolve(props: js.Object, sig: AudioNode): AudioNode = js.native

  /** Hann window function. Useful for windowing operations.
    * @param n
    *   Phase input (0-1 for one window cycle)
    */
  def hann(n: AudioNode): AudioNode = js.native

  /** Stateful phasor with reset control.
    * @param props
    *   Configuration
    * @param reset
    *   Reset signal
    * @param rate
    *   Rate control
    */
  def sphasor(props: js.Object, reset: AudioNode, rate: AudioNode): AudioNode =
    js.native

  /** Audio input node. Selects input channel.
    * @param props
    *   Configuration with channel selection
    */
  def in(props: js.Object): AudioNode = js.native

  /** Outputs constant zero signal. */
  def zero(): AudioNode = js.native

end El

// ============================================================================
// Standalone Helper Functions
// ============================================================================

/** Generates a AudioNode representing a stream of random numbers uniformly
  * distributed on the range [0, 1].
  */
inline def rand: AudioNode = El.rand()

/** Generates a AudioNode representing a continuous, monotonically increasing
  * signal counting the number of elapsed audio samples in the underlying audio
  * engine.
  */
inline def time: AudioNode = El.time()

/** Returns the current sample rate as a constant audio signal.
  *
  * Useful for sample-accurate calculations that depend on the sample rate.
  * Example: `val nyquist = sr / 2.0`
  */
inline def sr: AudioNode = El.sr()

/** Returns the current sample rate as a constant audio signal.
  *
  * Alias for `sr`. Useful for sample-accurate calculations that depend on the
  * sample rate. Example: `val samplesPerMs = sampleRate / 1000.0`
  */
inline def sampleRate: AudioNode = El.sr()

/** White noise generator. Produces random values uniformly distributed between
  * -1 and 1.
  *
  * Useful as a source for noise-based synthesis, testing, or as modulation.
  * Example: `noise.lowpass(1000, 1.0) * 0.3`
  */
inline def noise: AudioNode = El.noise()

/** Pink noise generator. Produces 1/f noise with equal energy per octave.
  *
  * Pink noise sounds more balanced across frequencies than white noise, making
  * it useful for testing audio systems and creating natural-sounding noise
  * textures. Example: `pinknoise * 0.2`
  */
inline def pinknoise: AudioNode = El.pinknoise()

// ============================================================================
// AudioNode Extension Methods
// ============================================================================

/** Extension methods for AudioNode providing idiomatic Scala operators and
  * method chaining.
  *
  * These extensions enable:
  *   - Mathematical operators: +, -, *, /, %, **
  *   - Comparison operators: <, >, <=, >=, ===
  *   - Logical operators: &&, ||
  *   - Fluent signal processing chains
  */
extension (node: AudioNode)
  // Oscillators
  /** Sine wave oscillator. The input signal specifies frequency in Hz.
    *
    * Example: `440.0.cycle` produces a 440Hz sine wave.
    */
  inline def cycle: AudioNode = El.cycle(node)

  /** Triangle wave oscillator. The input signal specifies frequency in Hz.
    *
    * Example: `220.0.triangle` produces a 220Hz triangle wave.
    */
  inline def triangle: AudioNode = El.triangle(node)

  /** Sawtooth wave oscillator. The input signal specifies frequency in Hz.
    *
    * Example: `110.0.saw` produces a 110Hz sawtooth wave.
    */
  inline def saw: AudioNode = El.saw(node)

  /** Square wave oscillator. The input signal specifies frequency in Hz.
    *
    * Example: `440.0.square` produces a 440Hz square wave.
    */
  inline def square: AudioNode = El.square(node)

  /** Pulse train generator. Produces periodic pulses (0 to 1 transitions) at
    * the specified frequency.
    *
    * Useful for triggering envelopes, sequencers, and sample-and-hold circuits.
    * Example: `1.0.train` produces 1 pulse per second.
    */
  inline def train: AudioNode = El.train(node)

  /** Phasor oscillator. Produces a ramp from 0 to 1 at the specified frequency.
    *
    * Useful for wavetable synthesis and custom oscillator design. Example:
    * `2.0.phasor` ramps from 0 to 1 twice per second.
    */
  inline def phasor: AudioNode = El.phasor(node)

  // Band-limited oscillators
  /** Band-limited sawtooth oscillator using BLEP (Band-Limited Step) synthesis.
    *
    * Reduces aliasing compared to naive sawtooth. Recommended for high-quality
    * synthesis. Example: `440.0.blepsaw`
    */
  inline def blepsaw: AudioNode = El.blepsaw(node)

  /** Band-limited square wave oscillator using BLEP synthesis.
    *
    * Reduces aliasing compared to naive square wave. Recommended for
    * high-quality synthesis. Example: `440.0.blepsquare`
    */
  inline def blepsquare: AudioNode = El.blepsquare(node)

  /** Band-limited triangle oscillator using BLEP synthesis.
    *
    * Reduces aliasing compared to naive triangle wave. Recommended for
    * high-quality synthesis. Example: `440.0.bleptriangle`
    */
  inline def bleptriangle: AudioNode = El.bleptriangle(node)

  // Arithmetic operators
  inline def add(other: AudioNode): AudioNode = El.add(node, other)
  inline def sub(other: AudioNode): AudioNode = El.sub(node, other)
  inline def mul(other: AudioNode): AudioNode = El.mul(node, other)
  inline def div(other: AudioNode): AudioNode = El.div(node, other)

  inline infix def +(other: AudioNode): AudioNode = El.add(node, other)
  inline infix def -(other: AudioNode): AudioNode = El.sub(node, other)
  inline infix def *(other: AudioNode): AudioNode = El.mul(node, other)
  inline infix def /(other: AudioNode): AudioNode = El.div(node, other)

  // Comparison operators
  inline infix def <(other: AudioNode): AudioNode = El.le(node, other)
  inline infix def >(other: AudioNode): AudioNode = El.ge(node, other)
  inline infix def <=(other: AudioNode): AudioNode = El.leq(node, other)
  inline infix def >=(other: AudioNode): AudioNode = El.geq(node, other)
  inline infix def ===(other: AudioNode): AudioNode = El.eq(node, other)

  // Logical operators
  inline infix def &&(other: AudioNode): AudioNode = El.and(node, other)
  inline infix def ||(other: AudioNode): AudioNode = El.or(node, other)

  // Math - power, modulo, min/max
  inline def pow(other: AudioNode): AudioNode = El.pow(node, other)
  inline infix def **(other: AudioNode): AudioNode = El.pow(node, other)
  inline def mod(other: AudioNode): AudioNode = El.mod(node, other)
  inline infix def %(other: AudioNode): AudioNode = El.mod(node, other)
  inline def max(other: AudioNode): AudioNode = El.max(node, other)
  inline def min(other: AudioNode): AudioNode = El.min(node, other)

  // Math - rounding
  inline def abs: AudioNode = El.abs(node)
  inline def floor: AudioNode = El.floor(node)
  inline def ceil: AudioNode = El.ceil(node)
  inline def round: AudioNode = El.round(node)

  // Math - trigonometric
  inline def sin: AudioNode = El.sin(node)
  inline def cos: AudioNode = El.cos(node)
  inline def tan: AudioNode = El.tan(node)
  inline def tanh: AudioNode = El.tanh(node)
  inline def asinh: AudioNode = El.asinh(node)

  // Math - logarithmic
  inline def ln: AudioNode = El.ln(node)
  inline def log: AudioNode = El.log(node)
  inline def log2: AudioNode = El.log2(node)

  // Math - other
  inline def sqrt: AudioNode = El.sqrt(node)
  inline def exp: AudioNode = El.exp(node)

  // Noise and modulation
  /** Pink noise filter. Applies 1/f (pink noise) frequency response to the
    * input signal.
    *
    * Example: `noise.pink` creates pink noise from white noise.
    */
  inline def pink: AudioNode = El.pink(node)

  /** Hann window function. Maps input (0-1 range) to a Hann window shape.
    *
    * Useful for windowing operations in spectral processing. Example:
    * `phasor.hann`
    */
  inline def hann: AudioNode = El.hann(node)

  // Filters
  /** Second-order lowpass filter. Attenuates frequencies above the cutoff.
    *
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Resonance/quality factor (higher Q = more resonance at cutoff)
    *
    * Example: `osc.lowpass(1000, 1.0)` - filter with 1kHz cutoff
    */
  inline def lowpass(freq: AudioNode, q: AudioNode): AudioNode =
    El.lowpass(freq, q, node)

  /** Second-order highpass filter. Attenuates frequencies below the cutoff.
    *
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Resonance/quality factor (higher Q = more resonance at cutoff)
    *
    * Example: `osc.highpass(200, 0.707)` - filter with 200Hz cutoff
    */
  inline def highpass(freq: AudioNode, q: AudioNode): AudioNode =
    El.highpass(freq, q, node)

  /** Second-order bandpass filter. Allows frequencies around center frequency
    * to pass.
    *
    * @param freq
    *   Center frequency in Hz
    * @param q
    *   Bandwidth/quality factor (higher Q = narrower band)
    *
    * Example: `noise.bandpass(440, 10)` - narrow band around 440Hz
    */
  inline def bandpass(freq: AudioNode, q: AudioNode): AudioNode =
    El.bandpass(freq, q, node)

  /** Second-order notch filter (band-reject). Attenuates frequencies around
    * center frequency.
    *
    * @param freq
    *   Center frequency in Hz to reject
    * @param q
    *   Bandwidth/quality factor (higher Q = narrower notch)
    *
    * Example: `signal.notch(60, 2)` - remove 60Hz hum
    */
  inline def notch(freq: AudioNode, q: AudioNode): AudioNode =
    El.notch(freq, q, node)

  /** Second-order allpass filter. Passes all frequencies but affects phase.
    *
    * @param freq
    *   Center frequency in Hz
    * @param q
    *   Quality factor
    *
    * Useful for phase manipulation and creating chorus/flanger effects.
    */
  inline def allpass(freq: AudioNode, q: AudioNode): AudioNode =
    El.allpass(freq, q, node)

  /** Low shelf filter. Boosts or cuts frequencies below the cutoff.
    *
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Shelf slope/quality factor
    * @param gain
    *   Gain in dB (positive to boost, negative to cut)
    *
    * Example: `signal.lowshelf(200, 1, 6)` - +6dB bass boost
    */
  inline def lowshelf(
      freq: AudioNode,
      q: AudioNode,
      gain: AudioNode
  ): AudioNode =
    El.lowshelf(freq, q, gain, node)

  /** High shelf filter. Boosts or cuts frequencies above the cutoff.
    *
    * @param freq
    *   Cutoff frequency in Hz
    * @param q
    *   Shelf slope/quality factor
    * @param gain
    *   Gain in dB (positive to boost, negative to cut)
    *
    * Example: `signal.highshelf(8000, 1, -3)` - -3dB treble cut
    */
  inline def highshelf(
      freq: AudioNode,
      q: AudioNode,
      gain: AudioNode
  ): AudioNode =
    El.highshelf(freq, q, gain, node)

  /** Peaking EQ filter. Boosts or cuts frequencies around the center frequency.
    *
    * @param freq
    *   Center frequency in Hz
    * @param q
    *   Bandwidth/quality factor (higher Q = narrower peak)
    * @param gain
    *   Gain in dB (positive to boost, negative to cut)
    *
    * Example: `signal.peak(1000, 2, 4)` - +4dB boost at 1kHz
    */
  inline def peak(freq: AudioNode, q: AudioNode, gain: AudioNode): AudioNode =
    El.peak(freq, q, gain, node)

  /** DC blocking filter. Removes DC offset (0 Hz component) from the signal.
    *
    * Useful for removing unwanted DC bias that can cause speaker damage or
    * headroom issues. Example: `signal.dcblock`
    */
  inline def dcblock: AudioNode = El.dcblock(node)

  // Envelopes
  /** ADSR envelope generator. The input signal acts as the gate (0 or 1).
    *
    * @param attack
    *   Attack time in seconds
    * @param decay
    *   Decay time in seconds
    * @param sustain
    *   Sustain level (0-1)
    * @param release
    *   Release time in seconds
    *
    * Example: `gate.adsr(0.01, 0.1, 0.7, 0.5)` - quick attack, moderate decay,
    * 70% sustain, medium release
    */
  inline def adsr(
      attack: AudioNode,
      decay: AudioNode,
      sustain: AudioNode,
      release: AudioNode
  ): AudioNode = El.adsr(attack, decay, sustain, release, node)

  /** Envelope follower with separate attack and release times. Follows the
    * amplitude of the input signal.
    *
    * @param attack
    *   Attack pole position (use tau2pole for time constant conversion)
    * @param release
    *   Release pole position (use tau2pole for time constant conversion)
    *
    * Example: `signal.env(El.tau2pole(0.01), El.tau2pole(0.1))`
    */
  inline def env(attack: AudioNode, release: AudioNode): AudioNode =
    El.env(attack, release, node)

  // Delay and timing
  /** Accumulator. Outputs running sum of input samples, resets on pulse.
    *
    * @param reset
    *   Pulse train to reset the accumulator to 0
    *
    * Use with care as values accumulate quickly. Useful for building custom
    * integrators.
    */
  inline def accum(reset: AudioNode): AudioNode = El.accum(node, reset)

  /** Single-sample delay (z⁻¹ in Z-transform notation).
    *
    * Delays the signal by exactly one sample. Fundamental building block for
    * feedback systems. Example: `signal.z` in a feedback loop
    */
  inline def z: AudioNode = El.z(node)

  /** Sample-and-hold. Samples the input signal on rising edges of the train.
    *
    * @param train
    *   Pulse train indicating when to sample
    *
    * Example: `lfo.latch(clockPulse)` - step-quantize an LFO to clock
    */
  inline def latch(train: AudioNode): AudioNode = El.latch(train, node)

  /** Simple static delay without feedback.
    *
    * @param len
    *   Delay time in samples (use ms2samps for millisecond conversion)
    *
    * Example: `signal.sdelay(sampleRate * 0.5)` - 500ms delay
    */
  inline def sdelay(len: AudioNode): AudioNode = El.sdelay(len, node)

  /** Unity-gain one-pole smoothing filter. For removing discontinuities in
    * control signals.
    *
    * @param pole
    *   Pole position (use tau2pole for time constant conversion)
    *
    * Example: `controlSignal.smooth(El.tau2pole(0.01))` - 10ms smoothing
    */
  inline def smooth(pole: AudioNode): AudioNode = El.smooth(pole, node)

  /** One-pole filter.
    *
    * @param pole
    *   Pole position (0-1, closer to 1 = slower response)
    *
    * Similar to smooth but with direct pole control.
    */
  inline def pole(pole: AudioNode): AudioNode = El.pole(pole, node)

  /** One-pole filter with T60 decay time specification.
    *
    * @param t60
    *   T60 decay time (time to decay by 60dB)
    *
    * Example: `signal.mm1p(0.5)` - 500ms decay time
    */
  inline def mm1p(t60: AudioNode): AudioNode = El.mm1p(t60, node)

  /** Maximum value hold over a sliding window.
    *
    * @param length
    *   Window length in samples
    *
    * Tracks the maximum value over the specified window. Useful for peak
    * detection.
    */
  inline def maxhold(length: AudioNode): AudioNode = El.maxhold(length, node)

  // Sampling and sequencing
  /** Wavetable lookup. Reads from a wavetable using the input as phase/index
    * (0-1).
    *
    * @param pathStr
    *   Path to wavetable data file
    *
    * Example: `phasor.table("wavetable.wav")` - wavetable oscillator
    */
  @scala.annotation.nowarn
  inline def table(pathStr: String): AudioNode =
    El.table(new js.Object { val path = pathStr }, node)

  // Conversions
  /** Converts decibels to linear gain. Input in dB, output as linear
    * multiplier.
    *
    * Example: `(-6.0).db2gain` = 0.5 (half amplitude)
    */
  inline def db2gain: AudioNode = El.db2gain(node)

  /** Converts milliseconds to samples at the current sample rate.
    *
    * Example: `100.0.ms2samps` at 44.1kHz = 4410 samples
    */
  inline def ms2samps: AudioNode = El.ms2samps(node)

  /** Converts time constant (tau) to pole position for one-pole filters.
    *
    * @return
    *   Pole position suitable for smooth/pole functions
    *
    * Example: `0.01.tau2pole` - 10ms time constant
    */
  inline def tau2pole: AudioNode = El.tau2pole(node)

  /** Prewarps frequency for bilinear transform in filter design.
    *
    * Advanced filter design function. Generally used internally.
    */
  inline def prewarp: AudioNode = El.prewarp(node)

  /** Smoothing function with default parameters.
    *
    * Convenience function for quick control signal smoothing.
    */
  inline def sm: AudioNode = El.sm(node)

  // Helper functions for signal range conversion

  /** Maps signal from [0, 1] range to [-1, 1] range. */
  inline def fit0111 =
    node * 2.0 - 1.0

  /** Maps signal from [-1, 1] range to [0, 1] range. */
  inline def fit1101 =
    node * 0.5 + 0.5

  /** Wraps signal to [0, 1] range using modulo. */
  inline def wrap01 =
    ((node % 1.0) + 1.0) % 1.0

// ============================================================================
// Numeric Conversions
// ============================================================================

/** Extension for Double to create keyed constant nodes.
  *
  * Example: `440.0 ° "freq"` creates a constant with key "freq" for
  * memoization.
  */
extension (num: Double)
  /** Creates a constant AudioNode with a key for memoization.
    *
    * @param str
    *   Key string identifier
    */
  @scala.annotation.nowarn
  inline infix def °(str: String): AudioNode =
    El.const(
      new js.Object:
        val value = num
        val key = str
    )

/** Implicit conversion from Double to AudioNode constant. */
given Conversion[Double, AudioNode] with
  @scala.annotation.nowarn
  inline def apply(x: Double): AudioNode =
    El.const(
      new js.Object:
        val value = x
    )

/** Implicit conversion from Int to AudioNode constant. */
given Conversion[Int, AudioNode] with
  @scala.annotation.nowarn
  inline def apply(x: Int): AudioNode =
    El.const(
      new js.Object:
        val value = x
    )
