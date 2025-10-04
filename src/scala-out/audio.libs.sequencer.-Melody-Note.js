'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_libs_sequencer_MelodyNote(duration, data) {
  this.c0 = 0.0;
  this.cA = null;
  this.c0 = duration;
  this.cA = data;
}
export { $c_Laudio_libs_sequencer_MelodyNote as $c_Laudio_libs_sequencer_MelodyNote };
$p = $c_Laudio_libs_sequencer_MelodyNote.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_MelodyNote;
/** @constructor */
function $h_Laudio_libs_sequencer_MelodyNote() {
}
export { $h_Laudio_libs_sequencer_MelodyNote as $h_Laudio_libs_sequencer_MelodyNote };
$h_Laudio_libs_sequencer_MelodyNote.prototype = $p;
$p.aI = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, 1834766114);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().a4(this.c0));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().M(this.cA));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().p(acc, 2);
});
$p.C = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ck(this);
});
$p.ab = (function() {
  return 2;
});
$p.ad = (function() {
  return "MelodyNote";
});
$p.ac = (function(n) {
  if ((n === 0)) {
    return this.c0;
  }
  if ((n === 1)) {
    return this.cA;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Laudio_libs_sequencer_MelodyNote = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_MelodyNote, "audio.libs.sequencer.MelodyNote", ({
  b9: 1,
  c: 1,
  P: 1,
  a: 1
}));
export { $d_Laudio_libs_sequencer_MelodyNote as $d_Laudio_libs_sequencer_MelodyNote };
