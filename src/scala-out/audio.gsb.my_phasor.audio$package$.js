'use strict';
import * as $i_$0040elemaudio$002fcore from "@elemaudio/core";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_gsb_my\uff3fphasor_audio$package$() {
}
export { $c_Laudio_gsb_my\uff3fphasor_audio$package$ as $c_Laudio_gsb_my\uff3fphasor_audio$package$ };
$p = $c_Laudio_gsb_my\uff3fphasor_audio$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_gsb_my\uff3fphasor_audio$package$;
/** @constructor */
function $h_Laudio_gsb_my\uff3fphasor_audio$package$() {
}
export { $h_Laudio_gsb_my\uff3fphasor_audio$package$ as $h_Laudio_gsb_my\uff3fphasor_audio$package$ };
$h_Laudio_gsb_my\uff3fphasor_audio$package$.prototype = $p;
$p.g3 = (function(hz) {
  var other$proxy1 = $i_$0040elemaudio$002fcore.el.sr();
  var node$proxy2 = $i_$0040elemaudio$002fcore.el.div(hz, other$proxy1);
  var other$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = 1.0;
    return this$1;
  })());
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.mul(hz, other$proxy2);
  var reset$proxy1 = $i_$0040elemaudio$002fcore.el.train(node$proxy1);
  return $i_$0040elemaudio$002fcore.el.accum(node$proxy2, reset$proxy1);
});
$p.gl = (function(hz) {
  var node$proxy3 = $m_Laudio_gsb_my\uff3fphasor_audio$package$().g3($i_$0040elemaudio$002fcore.el.const((() => {
    var hz$1 = 0.0;
    hz$1 = hz;
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = hz$1;
    return this$1;
  })()));
  return $i_$0040elemaudio$002fcore.el.table((() => {
    var this$2 = ({});
    this$2.path = null;
    this$2.path = "sample1";
    return this$2;
  })(), node$proxy3);
});
var $d_Laudio_gsb_my\uff3fphasor_audio$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_gsb_my\uff3fphasor_audio$package$, "audio.gsb.my_phasor.audio$package$", ({
  b2: 1
}));
export { $d_Laudio_gsb_my\uff3fphasor_audio$package$ as $d_Laudio_gsb_my\uff3fphasor_audio$package$ };
var $n_Laudio_gsb_my\uff3fphasor_audio$package$;
function $m_Laudio_gsb_my\uff3fphasor_audio$package$() {
  if ((!$n_Laudio_gsb_my\uff3fphasor_audio$package$)) {
    $n_Laudio_gsb_my\uff3fphasor_audio$package$ = new $c_Laudio_gsb_my\uff3fphasor_audio$package$();
  }
  return $n_Laudio_gsb_my\uff3fphasor_audio$package$;
}
export { $m_Laudio_gsb_my\uff3fphasor_audio$package$ as $m_Laudio_gsb_my\uff3fphasor_audio$package$ };
