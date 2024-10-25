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
$p.B = (function(bpm, slices) {
  var freq = ((bpm / 60.0) / 8.0);
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var freq$1 = 0.0;
    freq$1 = freq;
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = freq$1;
    return this$1;
  })());
  var node$proxy2 = $i_$0040elemaudio$002fcore.el.phasor(node$proxy1);
  var other$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var slices$1 = 0.0;
    slices$1 = slices;
    var this$2 = ({});
    this$2.value = 0.0;
    this$2.value = slices$1;
    return this$2;
  })());
  var phase = $i_$0040elemaudio$002fcore.el.mul(node$proxy2, other$proxy1);
  var other$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$3 = ({});
    this$3.value = 0.0;
    this$3.value = 1.0;
    return this$3;
  })());
  var node$proxy3 = $i_$0040elemaudio$002fcore.el.mod(phase, other$proxy2);
  var other$proxy3 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$4 = ({});
    this$4.value = 0.0;
    this$4.value = 1.0;
    return this$4;
  })());
  var node$proxy4 = $i_$0040elemaudio$002fcore.el.add(node$proxy3, other$proxy3);
  var other$proxy4 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$5 = ({});
    this$5.value = 0.0;
    this$5.value = 1.0;
    return this$5;
  })());
  var beatPhase = $i_$0040elemaudio$002fcore.el.mod(node$proxy4, other$proxy4);
  var other$proxy5 = $i_$0040elemaudio$002fcore.el.z(beatPhase);
  var node$proxy5 = $i_$0040elemaudio$002fcore.el.sub(beatPhase, other$proxy5);
  var node$proxy6 = $i_$0040elemaudio$002fcore.el.abs(node$proxy5);
  var other$proxy6 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$6 = ({});
    this$6.value = 0.0;
    this$6.value = 0.5;
    return this$6;
  })());
  var train = $i_$0040elemaudio$002fcore.el.ge(node$proxy6, other$proxy6);
  var other$proxy7 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$7 = ({});
    this$7.value = 0.0;
    this$7.value = 1.2;
    return this$7;
  })());
  var node$proxy10 = $i_$0040elemaudio$002fcore.el.mul(phase, other$proxy7);
  var node$proxy7 = $i_$0040elemaudio$002fcore.el.noise();
  var other$proxy8 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$8 = ({});
    this$8.value = 0.0;
    this$8.value = 0.2;
    return this$8;
  })());
  var node$proxy8 = $i_$0040elemaudio$002fcore.el.mul(node$proxy7, other$proxy8);
  var other$proxy9 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$9 = ({});
    this$9.value = 0.0;
    this$9.value = 2.0;
    return this$9;
  })());
  var node$proxy9 = $i_$0040elemaudio$002fcore.el.mul(node$proxy8, other$proxy9);
  var other$proxy10 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$10 = ({});
    this$10.value = 0.0;
    this$10.value = 1.0;
    return this$10;
  })());
  var other$proxy11 = $i_$0040elemaudio$002fcore.el.sub(node$proxy9, other$proxy10);
  var node$proxy11 = $i_$0040elemaudio$002fcore.el.add(node$proxy10, other$proxy11);
  var node$proxy12 = $i_$0040elemaudio$002fcore.el.floor(node$proxy11);
  var other$proxy12 = $i_$0040elemaudio$002fcore.el.latch(train, node$proxy12);
  var node$proxy13 = $i_$0040elemaudio$002fcore.el.add(beatPhase, other$proxy12);
  var other$proxy13 = $i_$0040elemaudio$002fcore.el.const((() => {
    var slices$2 = 0.0;
    slices$2 = slices;
    var this$11 = ({});
    this$11.value = 0.0;
    this$11.value = slices$2;
    return this$11;
  })());
  var sig = $i_$0040elemaudio$002fcore.el.div(node$proxy13, other$proxy13);
  var other$proxy14 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$12 = ({});
    this$12.value = 0.0;
    this$12.value = 1.0;
    return this$12;
  })());
  var node$proxy14 = $i_$0040elemaudio$002fcore.el.mod(sig, other$proxy14);
  var other$proxy15 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$13 = ({});
    this$13.value = 0.0;
    this$13.value = 1.0;
    return this$13;
  })());
  var node$proxy15 = $i_$0040elemaudio$002fcore.el.add(node$proxy14, other$proxy15);
  var other$proxy16 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$14 = ({});
    this$14.value = 0.0;
    this$14.value = 1.0;
    return this$14;
  })());
  var node$proxy16 = $i_$0040elemaudio$002fcore.el.mod(node$proxy15, other$proxy16);
  return $i_$0040elemaudio$002fcore.el.table((() => {
    var this$15 = ({});
    this$15.path = null;
    this$15.path = "sample1";
    return this$15;
  })(), node$proxy16);
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
