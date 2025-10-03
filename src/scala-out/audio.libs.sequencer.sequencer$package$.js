'use strict';
import * as $i_$0040elemaudio$002fcore from "@elemaudio/core";
import * as $j_audio$002elibs$002esequencer$002e$002dSeq$002dNote from "./audio.libs.sequencer.-Seq-Note.js";
import * as $j_audio$002elibs$002esequencer$002e$002dSequence from "./audio.libs.sequencer.-Sequence.js";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_libs_sequencer_sequencer$package$() {
}
export { $c_Laudio_libs_sequencer_sequencer$package$ as $c_Laudio_libs_sequencer_sequencer$package$ };
$p = $c_Laudio_libs_sequencer_sequencer$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_sequencer$package$;
/** @constructor */
function $h_Laudio_libs_sequencer_sequencer$package$() {
}
export { $h_Laudio_libs_sequencer_sequencer$package$ as $h_Laudio_libs_sequencer_sequencer$package$ };
$h_Laudio_libs_sequencer_sequencer$package$.prototype = $p;
$p.fZ = (function(melody) {
  var notes = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Seq$().eE());
  var duration = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_DoubleRef(0.0);
  melody.dF(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((note) => {
    var this$3 = note.cC;
    if ((!this$3.O())) {
      var x0 = this$3.d0();
      notes.cl = notes.cl.S(new $j_audio$002elibs$002esequencer$002e$002dSeq$002dNote.$c_Laudio_libs_sequencer_SeqNote(duration.bX, note.c2, x0));
    }
    duration.bX = (duration.bX + note.c2);
  })));
  return new $j_audio$002elibs$002esequencer$002e$002dSequence.$c_Laudio_libs_sequencer_Sequence(notes.cl, duration.bX);
});
$p.eU = (function(start, duration, key) {
  var t = $i_$0040elemaudio$002fcore.el.time();
  var str$proxy1 = (key + "_start");
  var startNode = $i_$0040elemaudio$002fcore.el.const((() => {
    var start$2 = 0.0;
    var str$proxy1$1 = null;
    start$2 = start;
    str$proxy1$1 = str$proxy1;
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.key = null;
    this$1.value = start$2;
    this$1.key = str$proxy1$1;
    return this$1;
  })());
  var num$proxy1 = (start + duration);
  var str$proxy2 = (key + "_end");
  var endNode = $i_$0040elemaudio$002fcore.el.const((() => {
    var num$proxy1$1 = 0.0;
    var str$proxy2$1 = null;
    num$proxy1$1 = num$proxy1;
    str$proxy2$1 = str$proxy2;
    var this$2 = ({});
    this$2.value = 0.0;
    this$2.key = null;
    this$2.value = num$proxy1$1;
    this$2.key = str$proxy2$1;
    return this$2;
  })());
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.geq(t, startNode);
  var other$proxy1 = $i_$0040elemaudio$002fcore.el.le(t, endNode);
  return $i_$0040elemaudio$002fcore.el.and(node$proxy1, other$proxy1);
});
var $d_Laudio_libs_sequencer_sequencer$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_sequencer$package$, "audio.libs.sequencer.sequencer$package$", ({
  bf: 1
}));
export { $d_Laudio_libs_sequencer_sequencer$package$ as $d_Laudio_libs_sequencer_sequencer$package$ };
var $n_Laudio_libs_sequencer_sequencer$package$;
function $m_Laudio_libs_sequencer_sequencer$package$() {
  if ((!$n_Laudio_libs_sequencer_sequencer$package$)) {
    $n_Laudio_libs_sequencer_sequencer$package$ = new $c_Laudio_libs_sequencer_sequencer$package$();
  }
  return $n_Laudio_libs_sequencer_sequencer$package$;
}
export { $m_Laudio_libs_sequencer_sequencer$package$ as $m_Laudio_libs_sequencer_sequencer$package$ };
