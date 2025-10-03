'use strict';
import * as $j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote from "./audio.libs.sequencer.-Playable-Note.js";
import * as $j_audio$002elibs$002esequencer$002esequencer$0024package$0024 from "./audio.libs.sequencer.sequencer$package$.js";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
function $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I($thiz) {
  var idx = $thiz.cI;
  $thiz.cI = ((((1 + $thiz.cI) | 0) % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor($thiz.dN)) | 0);
  return idx;
}
export { $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I as $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I };
/** @constructor */
function $c_Laudio_libs_sequencer_Sequencer(sequence, trackCount, bpm, repetitions, startTime, seqKey, debug) {
  this.dN = 0;
  this.dM = 0.0;
  this.d7 = null;
  this.dK = false;
  this.c6 = 0.0;
  this.dL = 0.0;
  this.c5 = null;
  this.cJ = null;
  this.d8 = null;
  this.cI = 0;
  this.dN = trackCount;
  this.dM = startTime;
  this.d7 = seqKey;
  this.dK = debug;
  this.c6 = (60.0 / bpm);
  this.dL = (sequence.cG * this.c6);
  this.c5 = sequence.cH.eW();
  this.cJ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$UnfoldIterator(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1) => {
    var loop = (x$1.ca | 0);
    var idx = (x$1.cb | 0);
    if (((repetitions > 0) && (loop >= repetitions))) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var note = this.c5.l(idx);
      var loopOffset = (loop * this.dL);
      var start = ((note.cF * this.c6) + loopOffset);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3(note, start, (start + (note.c4 * this.c6))), ((((1 + idx) | 0) >= this.c5.h()) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(((1 + loop) | 0), 0) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(loop, ((1 + idx) | 0)))));
    }
  }))));
  var isEmpty = (trackCount <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + trackCount) | 0);
  if (((trackCount <= 0) && (!isEmpty))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().gn(0, trackCount, 1, false);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().bj();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
  while (it.bL) {
    var x0 = it.eN();
    b.aI(new $j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$c_Laudio_libs_sequencer_PlayableNote(this.c5.l(((x0 % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor(this.c5.h())) | 0)).c3, x0, $j_audio$002elibs$002esequencer$002esequencer$0024package$0024.$m_Laudio_libs_sequencer_sequencer$package$().eU(0.0, 0.0, (("" + seqKey) + x0))));
  }
  var this$16 = b.b9();
  if ((this$16.h() >= 0)) {
    var destination = new ($j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$d_Laudio_libs_sequencer_PlayableNote.r().C)(this$16.h());
    this$16.ak(destination, 0, 2147483647);
    var $x_1 = destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it$1 = this$16.k();
    while (it$1.u()) {
      var elem$1 = it$1.g();
      var unboxedElem = ((elem$1 === null) ? null : elem$1);
      jsElems.push(unboxedElem);
    }
    var $x_1 = new ($j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$d_Laudio_libs_sequencer_PlayableNote.r().C)(jsElems);
  }
  this.d8 = $x_1;
  this.cI = 0;
}
export { $c_Laudio_libs_sequencer_Sequencer as $c_Laudio_libs_sequencer_Sequencer };
$p = $c_Laudio_libs_sequencer_Sequencer.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_Sequencer;
/** @constructor */
function $h_Laudio_libs_sequencer_Sequencer() {
}
export { $h_Laudio_libs_sequencer_Sequencer as $h_Laudio_libs_sequencer_Sequencer };
$h_Laudio_libs_sequencer_Sequencer.prototype = $p;
$p.fD = (function(currentTime) {
  var lookAhead = (currentTime + 0.1);
  while ((this.cJ.u() && ((+this.cJ.al().bG) <= lookAhead))) {
    var timing = this.cJ.g();
    if (((+timing.cM) > currentTime)) {
      var nextTrackIdx = $p_Laudio_libs_sequencer_Sequencer__getNextTrackIdx__I(this);
      this.d8.a[nextTrackIdx] = new $j_audio$002elibs$002esequencer$002e$002dPlayable$002dNote.$c_Laudio_libs_sequencer_PlayableNote(timing.cc.c3, nextTrackIdx, $j_audio$002elibs$002esequencer$002esequencer$0024package$0024.$m_Laudio_libs_sequencer_sequencer$package$().eU(((+timing.bG) - this.dM), (timing.cc.c4 * this.c6), (("" + this.d7) + nextTrackIdx)));
      if (this.dK) {
        var x = ((((this.d7 + " scheduled note on track ") + nextTrackIdx) + " at ") + (+timing.bG));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$().ge().fT((x + "\n"));
      }
    }
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().gr(this.d8);
});
var $d_Laudio_libs_sequencer_Sequencer = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_Sequencer, "audio.libs.sequencer.Sequencer", ({
  be: 1
}));
export { $d_Laudio_libs_sequencer_Sequencer as $d_Laudio_libs_sequencer_Sequencer };
