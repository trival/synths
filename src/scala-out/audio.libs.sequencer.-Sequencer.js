'use strict';
import * as $j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote from "./audio.libs.sequencer.-Playable-Note.js";
import * as $j_audio$002elibs$002esequencer$002esequencer$0024package$0024 from "./audio.libs.sequencer.sequencer$package$.js";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
function $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I($thiz) {
  var idx = $thiz.cF;
  $thiz.cF = ((((1 + $thiz.cF) | 0) % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor($thiz.dO)) | 0);
  return idx;
}
export { $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I as $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I };
/** @constructor */
function $c_Laudio_libs_sequencer_Sequencer(sequence, trackCount, bpm, repetitions, startTime, seqKey, debug) {
  this.dO = 0;
  this.dN = 0.0;
  this.d7 = null;
  this.dL = false;
  this.c4 = 0.0;
  this.dM = 0.0;
  this.c3 = null;
  this.cG = null;
  this.d8 = null;
  this.cF = 0;
  this.dO = trackCount;
  this.dN = startTime;
  this.d7 = seqKey;
  this.dL = debug;
  this.c4 = (60.0 / bpm);
  this.dM = (sequence.cD * this.c4);
  this.c3 = sequence.cE.f0();
  this.cG = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$UnfoldIterator(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1) => {
    var loop = (x$1.c7 | 0);
    var idx = (x$1.c8 | 0);
    if (((repetitions > 0) && (loop >= repetitions))) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var note = this.c3.l(idx);
      var loopOffset = (loop * this.dM);
      var start = ((note.cC * this.c4) + loopOffset);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3(note, start, (start + (note.c2 * this.c4))), ((((1 + idx) | 0) >= this.c3.k()) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(((1 + loop) | 0), 0) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(loop, ((1 + idx) | 0)))));
    }
  }))));
  var isEmpty = (trackCount <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + trackCount) | 0);
  if (((trackCount <= 0) && (!isEmpty))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().gp(0, trackCount, 1, false);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().bi();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
  while (it.bJ) {
    var x0 = it.eR();
    b.aF(new $j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$c_Laudio_libs_sequencer_PlayableNote(this.c3.l(((x0 % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor(this.c3.k())) | 0)).c1, x0, $j_audio$002elibs$002esequencer$002esequencer$0024package$0024.$m_Laudio_libs_sequencer_sequencer$package$().eY(0.0, 0.0, (("" + seqKey) + x0))));
  }
  var this$16 = b.b7();
  if ((this$16.k() >= 0)) {
    var destination = new ($j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$d_Laudio_libs_sequencer_PlayableNote.r().C)(this$16.k());
    this$16.ak(destination, 0, 2147483647);
    var $x_1 = destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it$1 = this$16.j();
    while (it$1.v()) {
      var elem$1 = it$1.g();
      var unboxedElem = ((elem$1 === null) ? null : elem$1);
      jsElems.push(unboxedElem);
    }
    var $x_1 = new ($j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$d_Laudio_libs_sequencer_PlayableNote.r().C)(jsElems);
  }
  this.d8 = $x_1;
  this.cF = 0;
}
export { $c_Laudio_libs_sequencer_Sequencer as $c_Laudio_libs_sequencer_Sequencer };
$p = $c_Laudio_libs_sequencer_Sequencer.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_Sequencer;
/** @constructor */
function $h_Laudio_libs_sequencer_Sequencer() {
}
export { $h_Laudio_libs_sequencer_Sequencer as $h_Laudio_libs_sequencer_Sequencer };
$h_Laudio_libs_sequencer_Sequencer.prototype = $p;
$p.fG = (function(currentTime) {
  var lookAhead = (currentTime + 0.1);
  while ((this.cG.v() && ((+this.cG.al().bE) <= lookAhead))) {
    var timing = this.cG.g();
    if (((+timing.cN) > currentTime)) {
      var nextTrackIdx = $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I(this);
      this.d8.a[nextTrackIdx] = new $j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$c_Laudio_libs_sequencer_PlayableNote(timing.c9.c1, nextTrackIdx, $j_audio$002elibs$002esequencer$002esequencer$0024package$0024.$m_Laudio_libs_sequencer_sequencer$package$().eY(((+timing.bE) - this.dN), (timing.c9.c2 * this.c4), (("" + this.d7) + nextTrackIdx)));
      if (this.dL) {
        var x = ((((this.d7 + " scheduled note on track ") + nextTrackIdx) + " at ") + (+timing.bE));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$().gg().fW((x + "\n"));
      }
    }
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().gt(this.d8);
});
var $d_Laudio_libs_sequencer_Sequencer = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_Sequencer, "audio.libs.sequencer.Sequencer", ({
  bd: 1
}));
export { $d_Laudio_libs_sequencer_Sequencer as $d_Laudio_libs_sequencer_Sequencer };
