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
$p.B = (function(bpm, slices, rate, scrub) {
  var phase = ((bpm / 60.0) / 8.0);
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var phase$1 = 0.0;
    phase$1 = phase;
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = phase$1;
    return this$1;
  })());
  var node$proxy2 = $i_$0040elemaudio$002fcore.el.phasor(node$proxy1);
  var other$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var rate$1 = 0.0;
    rate$1 = rate;
    var this$2 = ({});
    this$2.value = 0.0;
    this$2.value = rate$1;
    return this$2;
  })());
  var node$proxy3 = $i_$0040elemaudio$002fcore.el.mul(node$proxy2, other$proxy1);
  var other$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
    var scrub$1 = 0.0;
    scrub$1 = scrub;
    var this$3 = ({});
    this$3.value = 0.0;
    this$3.value = scrub$1;
    return this$3;
  })());
  var sig = $i_$0040elemaudio$002fcore.el.add(node$proxy3, other$proxy2);
  var other$proxy3 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$4 = ({});
    this$4.value = 0.0;
    this$4.value = 1.0;
    return this$4;
  })());
  var node$proxy4 = $i_$0040elemaudio$002fcore.el.mod(sig, other$proxy3);
  var other$proxy4 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$5 = ({});
    this$5.value = 0.0;
    this$5.value = 1.0;
    return this$5;
  })());
  var node$proxy5 = $i_$0040elemaudio$002fcore.el.add(node$proxy4, other$proxy4);
  var other$proxy5 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$6 = ({});
    this$6.value = 0.0;
    this$6.value = 1.0;
    return this$6;
  })());
  var node$proxy6 = $i_$0040elemaudio$002fcore.el.mod(node$proxy5, other$proxy5);
  var node$proxy7 = $i_$0040elemaudio$002fcore.el.table((() => {
    var this$7 = ({});
    this$7.path = null;
    this$7.path = "sample1";
    return this$7;
  })(), node$proxy6);
  var freq$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$8 = ({});
    this$8.value = 0;
    this$8.value = 2000;
    return this$8;
  })());
  var q$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$9 = ({});
    this$9.value = 0;
    this$9.value = 1;
    return this$9;
  })());
  return $i_$0040elemaudio$002fcore.el.lowpass(freq$proxy1, q$proxy1, node$proxy7);
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
