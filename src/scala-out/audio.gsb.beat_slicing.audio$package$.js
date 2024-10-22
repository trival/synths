'use strict';
import * as $i_$0040elemaudio$002fcore from "@elemaudio/core";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_gsb_beat\uff3fslicing_audio$package$() {
}
export { $c_Laudio_gsb_beat\uff3fslicing_audio$package$ as $c_Laudio_gsb_beat\uff3fslicing_audio$package$ };
$p = $c_Laudio_gsb_beat\uff3fslicing_audio$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_gsb_beat\uff3fslicing_audio$package$;
/** @constructor */
function $h_Laudio_gsb_beat\uff3fslicing_audio$package$() {
}
export { $h_Laudio_gsb_beat\uff3fslicing_audio$package$ as $h_Laudio_gsb_beat\uff3fslicing_audio$package$ };
$h_Laudio_gsb_beat\uff3fslicing_audio$package$.prototype = $p;
$p.m = (function() {
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = 0.1;
    return this$1;
  })());
  var node$proxy2 = $i_$0040elemaudio$002fcore.el.cycle(node$proxy1);
  var other$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$2 = ({});
    this$2.value = 0;
    this$2.value = 1;
    return this$2;
  })());
  var node$proxy3 = $i_$0040elemaudio$002fcore.el.add(node$proxy2, other$proxy1);
  var other$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$3 = ({});
    this$3.value = 0.0;
    this$3.value = 0.5;
    return this$3;
  })());
  var rate = $i_$0040elemaudio$002fcore.el.mul(node$proxy3, other$proxy2);
  return $i_$0040elemaudio$002fcore.el.table((() => {
    var this$4 = ({});
    this$4.path = null;
    this$4.path = "sample1";
    return this$4;
  })(), rate);
});
var $d_Laudio_gsb_beat\uff3fslicing_audio$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_gsb_beat\uff3fslicing_audio$package$, "audio.gsb.beat_slicing.audio$package$", ({
  h: 1
}));
export { $d_Laudio_gsb_beat\uff3fslicing_audio$package$ as $d_Laudio_gsb_beat\uff3fslicing_audio$package$ };
var $n_Laudio_gsb_beat\uff3fslicing_audio$package$;
function $m_Laudio_gsb_beat\uff3fslicing_audio$package$() {
  if ((!$n_Laudio_gsb_beat\uff3fslicing_audio$package$)) {
    $n_Laudio_gsb_beat\uff3fslicing_audio$package$ = new $c_Laudio_gsb_beat\uff3fslicing_audio$package$();
  }
  return $n_Laudio_gsb_beat\uff3fslicing_audio$package$;
}
export { $m_Laudio_gsb_beat\uff3fslicing_audio$package$ as $m_Laudio_gsb_beat\uff3fslicing_audio$package$ };
