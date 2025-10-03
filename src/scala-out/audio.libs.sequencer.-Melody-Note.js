'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_libs_sequencer_MelodyNote(duration, data) {
  this.c2 = 0.0;
  this.cC = null;
  this.c2 = duration;
  this.cC = data;
}
export { $c_Laudio_libs_sequencer_MelodyNote as $c_Laudio_libs_sequencer_MelodyNote };
$p = $c_Laudio_libs_sequencer_MelodyNote.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_MelodyNote;
/** @constructor */
function $h_Laudio_libs_sequencer_MelodyNote() {
}
export { $h_Laudio_libs_sequencer_MelodyNote as $h_Laudio_libs_sequencer_MelodyNote };
$h_Laudio_libs_sequencer_MelodyNote.prototype = $p;
$p.am = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.s = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, 1834766114);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().a4(this.c2));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().N(this.cC));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().p(acc, 2);
});
$p.B = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().bY(this);
});
$p.a6 = (function() {
  return 2;
});
$p.a8 = (function() {
  return "MelodyNote";
});
$p.a7 = (function(n) {
  if ((n === 0)) {
    return this.c2;
  }
  if ((n === 1)) {
    return this.cC;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Laudio_libs_sequencer_MelodyNote = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_MelodyNote, "audio.libs.sequencer.MelodyNote", ({
  ba: 1,
  c: 1,
  M: 1,
  a: 1
}));
export { $d_Laudio_libs_sequencer_MelodyNote as $d_Laudio_libs_sequencer_MelodyNote };
