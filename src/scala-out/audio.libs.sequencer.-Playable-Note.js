'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_libs_sequencer_PlayableNote(data, idx, gate) {
  this.cD = null;
  this.d6 = 0;
  this.cE = null;
  this.cD = data;
  this.d6 = idx;
  this.cE = gate;
}
export { $c_Laudio_libs_sequencer_PlayableNote as $c_Laudio_libs_sequencer_PlayableNote };
$p = $c_Laudio_libs_sequencer_PlayableNote.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_libs_sequencer_PlayableNote;
/** @constructor */
function $h_Laudio_libs_sequencer_PlayableNote() {
}
export { $h_Laudio_libs_sequencer_PlayableNote as $h_Laudio_libs_sequencer_PlayableNote };
$h_Laudio_libs_sequencer_PlayableNote.prototype = $p;
$p.am = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.s = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, 916449216);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().N(this.cD));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, this.d6);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().b(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().N(this.cE));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().p(acc, 3);
});
$p.B = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().bY(this);
});
$p.a6 = (function() {
  return 3;
});
$p.a8 = (function() {
  return "PlayableNote";
});
$p.a7 = (function(n) {
  switch (n) {
    case 0: {
      return this.cD;
      break;
    }
    case 1: {
      return this.d6;
      break;
    }
    case 2: {
      return this.cE;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
var $d_Laudio_libs_sequencer_PlayableNote = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_libs_sequencer_PlayableNote, "audio.libs.sequencer.PlayableNote", ({
  bb: 1,
  c: 1,
  M: 1,
  a: 1
}));
export { $d_Laudio_libs_sequencer_PlayableNote as $d_Laudio_libs_sequencer_PlayableNote };
