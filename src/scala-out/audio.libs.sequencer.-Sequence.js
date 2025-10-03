'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_libs_sequencer_Sequence(notes, duration) {
  this.cH = null;
  this.cG = 0.0;
  this.cH = notes;
  this.cG = duration;
}
export { $c_Laudio_libs_sequencer_Sequence as $c_Laudio_libs_sequencer_Sequence };
$p = $c_Laudio_libs_sequencer_Sequence.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_Sequence;
/** @constructor */
function $h_Laudio_libs_sequencer_Sequence() {
}
export { $h_Laudio_libs_sequencer_Sequence as $h_Laudio_libs_sequencer_Sequence };
$h_Laudio_libs_sequencer_Sequence.prototype = $p;
$p.am = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.s = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, 1414192097);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().N(this.cH));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().a4(this.cG));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().p(acc, 2);
});
$p.B = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().bY(this);
});
$p.a6 = (function() {
  return 2;
});
$p.a8 = (function() {
  return "Sequence";
});
$p.a7 = (function(n) {
  if ((n === 0)) {
    return this.cH;
  }
  if ((n === 1)) {
    return this.cG;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Laudio_libs_sequencer_Sequence = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_Sequence, "audio.libs.sequencer.Sequence", ({
  bd: 1,
  c: 1,
  M: 1,
  a: 1
}));
export { $d_Laudio_libs_sequencer_Sequence as $d_Laudio_libs_sequencer_Sequence };
