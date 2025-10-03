'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_libs_sequencer_SeqNote(start, duration, data) {
  this.cF = 0.0;
  this.c4 = 0.0;
  this.c3 = null;
  this.cF = start;
  this.c4 = duration;
  this.c3 = data;
}
export { $c_Laudio_libs_sequencer_SeqNote as $c_Laudio_libs_sequencer_SeqNote };
$p = $c_Laudio_libs_sequencer_SeqNote.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_SeqNote;
/** @constructor */
function $h_Laudio_libs_sequencer_SeqNote() {
}
export { $h_Laudio_libs_sequencer_SeqNote as $h_Laudio_libs_sequencer_SeqNote };
$h_Laudio_libs_sequencer_SeqNote.prototype = $p;
$p.am = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.s = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, (-648269615));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().a4(this.cF));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().a4(this.c4));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().N(this.c3));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().p(acc, 3);
});
$p.B = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().bY(this);
});
$p.a6 = (function() {
  return 3;
});
$p.a8 = (function() {
  return "SeqNote";
});
$p.a7 = (function(n) {
  switch (n) {
    case 0: {
      return this.cF;
      break;
    }
    case 1: {
      return this.c4;
      break;
    }
    case 2: {
      return this.c3;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
var $d_Laudio_libs_sequencer_SeqNote = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_SeqNote, "audio.libs.sequencer.SeqNote", ({
  bc: 1,
  c: 1,
  M: 1,
  a: 1
}));
export { $d_Laudio_libs_sequencer_SeqNote as $d_Laudio_libs_sequencer_SeqNote };
