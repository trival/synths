'use strict';
import * as $i_$0040elemaudio$002fcore from "@elemaudio/core";
import * as $j_audio$002elibs$002emusic$002e$002dChord from "./audio.libs.music.-Chord.js";
import * as $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024 from "./audio.libs.music.-Note-Name$.js";
import * as $j_audio$002elibs$002emusic$002emusic$0024package$0024 from "./audio.libs.music.music$package$.js";
import * as $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote from "./audio.libs.sequencer.-Melody-Note.js";
import * as $j_audio$002elibs$002esequencer$002e$002dSequencer from "./audio.libs.sequencer.-Sequencer.js";
import * as $j_audio$002elibs$002esequencer$002esequencer$0024package$0024 from "./audio.libs.sequencer.sequencer$package$.js";
import * as $j_audio$002etracks$002escala$002esequencer$002e$002dSynth$002dSignal from "./audio.tracks.scala.sequencer.-Synth-Signal.js";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_tracks_scala_sequencer_audio$package$() {
}
export { $c_Laudio_tracks_scala_sequencer_audio$package$ as $c_Laudio_tracks_scala_sequencer_audio$package$ };
$p = $c_Laudio_tracks_scala_sequencer_audio$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_tracks_scala_sequencer_audio$package$;
/** @constructor */
function $h_Laudio_tracks_scala_sequencer_audio$package$() {
}
export { $h_Laudio_tracks_scala_sequencer_audio$package$ as $h_Laudio_tracks_scala_sequencer_audio$package$ };
$h_Laudio_tracks_scala_sequencer_audio$package$.prototype = $p;
$p.ft = (function(signals) {
  if (signals.O()) {
    return $i_$0040elemaudio$002fcore.el.const((() => {
      var this$1 = ({});
      this$1.value = 0.0;
      this$1.value = 0.0;
      return this$1;
    })());
  } else {
    var sum = signals.aT(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((s) => {
      var node$proxy1 = $i_$0040elemaudio$002fcore.el.mul(s.d9, s.c7);
      return $i_$0040elemaudio$002fcore.el.mul(node$proxy1, s.c7);
    }))).d4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((a, b) => $i_$0040elemaudio$002fcore.el.add(a, b))));
    var volume = signals.aT(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((_$1) => _$1.c7))).d4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((a$2, b$2) => $i_$0040elemaudio$002fcore.el.add(a$2, b$2))));
    return $i_$0040elemaudio$002fcore.el.div(sum, volume);
  }
});
$p.go = (function(tick) {
  var _1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__C__Laudio_libs_music_NoteName();
  var \u03b42$___1;
  var \u03b42$___2;
  var \u03b42$___1 = _1;
  var \u03b42$___2 = 3;
  var name = \u03b42$___1;
  var octave = (\u03b42$___2 | 0);
  matchResult7: {
    var base;
    var x = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__C__Laudio_libs_music_NoteName();
    if ((x === name)) {
      var base = 0;
      break matchResult7;
    }
    var x$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Cx__Laudio_libs_music_NoteName();
    if ((x$3 === name)) {
      var base = 1;
      break matchResult7;
    }
    var x$5 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Db__Laudio_libs_music_NoteName();
    if ((x$5 === name)) {
      var base = 1;
      break matchResult7;
    }
    var x$7 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__D__Laudio_libs_music_NoteName();
    if ((x$7 === name)) {
      var base = 2;
      break matchResult7;
    }
    var x$9 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Dx__Laudio_libs_music_NoteName();
    if ((x$9 === name)) {
      var base = 3;
      break matchResult7;
    }
    var x$11 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Eb__Laudio_libs_music_NoteName();
    if ((x$11 === name)) {
      var base = 3;
      break matchResult7;
    }
    var x$13 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__E__Laudio_libs_music_NoteName();
    if ((x$13 === name)) {
      var base = 4;
      break matchResult7;
    }
    var x$15 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__F__Laudio_libs_music_NoteName();
    if ((x$15 === name)) {
      var base = 5;
      break matchResult7;
    }
    var x$17 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Fx__Laudio_libs_music_NoteName();
    if ((x$17 === name)) {
      var base = 6;
      break matchResult7;
    }
    var x$19 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gb__Laudio_libs_music_NoteName();
    if ((x$19 === name)) {
      var base = 6;
      break matchResult7;
    }
    var x$21 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__G__Laudio_libs_music_NoteName();
    if ((x$21 === name)) {
      var base = 7;
      break matchResult7;
    }
    var x$23 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gx__Laudio_libs_music_NoteName();
    if ((x$23 === name)) {
      var base = 8;
      break matchResult7;
    }
    var x$25 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ab__Laudio_libs_music_NoteName();
    if ((x$25 === name)) {
      var base = 8;
      break matchResult7;
    }
    var x$27 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__A__Laudio_libs_music_NoteName();
    if ((x$27 === name)) {
      var base = 9;
      break matchResult7;
    }
    var x$29 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ax__Laudio_libs_music_NoteName();
    if ((x$29 === name)) {
      var base = 10;
      break matchResult7;
    }
    var x$31 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Bb__Laudio_libs_music_NoteName();
    if ((x$31 === name)) {
      var base = 10;
      break matchResult7;
    }
    var x$33 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__B__Laudio_libs_music_NoteName();
    if ((x$33 === name)) {
      var base = 11;
      break matchResult7;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(name);
  }
  var midiRoot = ((base + Math.imul(12, ((1 + octave) | 0))) | 0);
  var chordType = $j_audio$002elibs$002emusic$002e$002dChord.$s_Laudio_libs_music_Chord$__Major__Laudio_libs_music_Chord();
  var cMaj = $j_audio$002elibs$002emusic$002e$002dChord.$m_Laudio_libs_music_Chord$().cY(midiRoot, chordType);
  var _1$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__F__Laudio_libs_music_NoteName();
  var \u03b42$$1___1;
  var \u03b42$$1___2;
  var \u03b42$$1___1 = _1$1;
  var \u03b42$$1___2 = 2;
  var name$1 = \u03b42$$1___1;
  var octave$1 = (\u03b42$$1___2 | 0);
  matchResult7$1: {
    var base$1;
    var x$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__C__Laudio_libs_music_NoteName();
    if ((x$1 === name$1)) {
      var base$1 = 0;
      break matchResult7$1;
    }
    var x$3$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Cx__Laudio_libs_music_NoteName();
    if ((x$3$1 === name$1)) {
      var base$1 = 1;
      break matchResult7$1;
    }
    var x$5$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Db__Laudio_libs_music_NoteName();
    if ((x$5$1 === name$1)) {
      var base$1 = 1;
      break matchResult7$1;
    }
    var x$7$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__D__Laudio_libs_music_NoteName();
    if ((x$7$1 === name$1)) {
      var base$1 = 2;
      break matchResult7$1;
    }
    var x$9$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Dx__Laudio_libs_music_NoteName();
    if ((x$9$1 === name$1)) {
      var base$1 = 3;
      break matchResult7$1;
    }
    var x$11$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Eb__Laudio_libs_music_NoteName();
    if ((x$11$1 === name$1)) {
      var base$1 = 3;
      break matchResult7$1;
    }
    var x$13$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__E__Laudio_libs_music_NoteName();
    if ((x$13$1 === name$1)) {
      var base$1 = 4;
      break matchResult7$1;
    }
    var x$15$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__F__Laudio_libs_music_NoteName();
    if ((x$15$1 === name$1)) {
      var base$1 = 5;
      break matchResult7$1;
    }
    var x$17$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Fx__Laudio_libs_music_NoteName();
    if ((x$17$1 === name$1)) {
      var base$1 = 6;
      break matchResult7$1;
    }
    var x$19$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gb__Laudio_libs_music_NoteName();
    if ((x$19$1 === name$1)) {
      var base$1 = 6;
      break matchResult7$1;
    }
    var x$21$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__G__Laudio_libs_music_NoteName();
    if ((x$21$1 === name$1)) {
      var base$1 = 7;
      break matchResult7$1;
    }
    var x$23$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gx__Laudio_libs_music_NoteName();
    if ((x$23$1 === name$1)) {
      var base$1 = 8;
      break matchResult7$1;
    }
    var x$25$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ab__Laudio_libs_music_NoteName();
    if ((x$25$1 === name$1)) {
      var base$1 = 8;
      break matchResult7$1;
    }
    var x$27$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__A__Laudio_libs_music_NoteName();
    if ((x$27$1 === name$1)) {
      var base$1 = 9;
      break matchResult7$1;
    }
    var x$29$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ax__Laudio_libs_music_NoteName();
    if ((x$29$1 === name$1)) {
      var base$1 = 10;
      break matchResult7$1;
    }
    var x$31$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Bb__Laudio_libs_music_NoteName();
    if ((x$31$1 === name$1)) {
      var base$1 = 10;
      break matchResult7$1;
    }
    var x$33$1 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__B__Laudio_libs_music_NoteName();
    if ((x$33$1 === name$1)) {
      var base$1 = 11;
      break matchResult7$1;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(name$1);
  }
  var midiRoot$1 = ((base$1 + Math.imul(12, ((1 + octave$1) | 0))) | 0);
  var chordType$1 = $j_audio$002elibs$002emusic$002e$002dChord.$s_Laudio_libs_music_Chord$__Major__Laudio_libs_music_Chord();
  var fMaj = $j_audio$002elibs$002emusic$002e$002dChord.$m_Laudio_libs_music_Chord$().cY(midiRoot$1, chordType$1);
  var _1$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__G__Laudio_libs_music_NoteName();
  var \u03b42$$2___1;
  var \u03b42$$2___2;
  var \u03b42$$2___1 = _1$2;
  var \u03b42$$2___2 = 2;
  var name$2 = \u03b42$$2___1;
  var octave$2 = (\u03b42$$2___2 | 0);
  matchResult7$2: {
    var base$2;
    var x$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__C__Laudio_libs_music_NoteName();
    if ((x$2 === name$2)) {
      var base$2 = 0;
      break matchResult7$2;
    }
    var x$3$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Cx__Laudio_libs_music_NoteName();
    if ((x$3$2 === name$2)) {
      var base$2 = 1;
      break matchResult7$2;
    }
    var x$5$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Db__Laudio_libs_music_NoteName();
    if ((x$5$2 === name$2)) {
      var base$2 = 1;
      break matchResult7$2;
    }
    var x$7$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__D__Laudio_libs_music_NoteName();
    if ((x$7$2 === name$2)) {
      var base$2 = 2;
      break matchResult7$2;
    }
    var x$9$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Dx__Laudio_libs_music_NoteName();
    if ((x$9$2 === name$2)) {
      var base$2 = 3;
      break matchResult7$2;
    }
    var x$11$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Eb__Laudio_libs_music_NoteName();
    if ((x$11$2 === name$2)) {
      var base$2 = 3;
      break matchResult7$2;
    }
    var x$13$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__E__Laudio_libs_music_NoteName();
    if ((x$13$2 === name$2)) {
      var base$2 = 4;
      break matchResult7$2;
    }
    var x$15$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__F__Laudio_libs_music_NoteName();
    if ((x$15$2 === name$2)) {
      var base$2 = 5;
      break matchResult7$2;
    }
    var x$17$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Fx__Laudio_libs_music_NoteName();
    if ((x$17$2 === name$2)) {
      var base$2 = 6;
      break matchResult7$2;
    }
    var x$19$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gb__Laudio_libs_music_NoteName();
    if ((x$19$2 === name$2)) {
      var base$2 = 6;
      break matchResult7$2;
    }
    var x$21$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__G__Laudio_libs_music_NoteName();
    if ((x$21$2 === name$2)) {
      var base$2 = 7;
      break matchResult7$2;
    }
    var x$23$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gx__Laudio_libs_music_NoteName();
    if ((x$23$2 === name$2)) {
      var base$2 = 8;
      break matchResult7$2;
    }
    var x$25$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ab__Laudio_libs_music_NoteName();
    if ((x$25$2 === name$2)) {
      var base$2 = 8;
      break matchResult7$2;
    }
    var x$27$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__A__Laudio_libs_music_NoteName();
    if ((x$27$2 === name$2)) {
      var base$2 = 9;
      break matchResult7$2;
    }
    var x$29$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ax__Laudio_libs_music_NoteName();
    if ((x$29$2 === name$2)) {
      var base$2 = 10;
      break matchResult7$2;
    }
    var x$31$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Bb__Laudio_libs_music_NoteName();
    if ((x$31$2 === name$2)) {
      var base$2 = 10;
      break matchResult7$2;
    }
    var x$33$2 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__B__Laudio_libs_music_NoteName();
    if ((x$33$2 === name$2)) {
      var base$2 = 11;
      break matchResult7$2;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(name$2);
  }
  var midiRoot$2 = ((base$2 + Math.imul(12, ((1 + octave$2) | 0))) | 0);
  var chordType$2 = $j_audio$002elibs$002emusic$002e$002dChord.$s_Laudio_libs_music_Chord$__Major__Laudio_libs_music_Chord();
  var gMaj = $j_audio$002elibs$002emusic$002e$002dChord.$m_Laudio_libs_music_Chord$().cY(midiRoot$2, chordType$2);
  var _1$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__A__Laudio_libs_music_NoteName();
  var \u03b42$$3___1;
  var \u03b42$$3___2;
  var \u03b42$$3___1 = _1$3;
  var \u03b42$$3___2 = 2;
  var name$3 = \u03b42$$3___1;
  var octave$3 = (\u03b42$$3___2 | 0);
  matchResult7$3: {
    var base$3;
    var x$4 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__C__Laudio_libs_music_NoteName();
    if ((x$4 === name$3)) {
      var base$3 = 0;
      break matchResult7$3;
    }
    var x$3$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Cx__Laudio_libs_music_NoteName();
    if ((x$3$3 === name$3)) {
      var base$3 = 1;
      break matchResult7$3;
    }
    var x$5$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Db__Laudio_libs_music_NoteName();
    if ((x$5$3 === name$3)) {
      var base$3 = 1;
      break matchResult7$3;
    }
    var x$7$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__D__Laudio_libs_music_NoteName();
    if ((x$7$3 === name$3)) {
      var base$3 = 2;
      break matchResult7$3;
    }
    var x$9$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Dx__Laudio_libs_music_NoteName();
    if ((x$9$3 === name$3)) {
      var base$3 = 3;
      break matchResult7$3;
    }
    var x$11$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Eb__Laudio_libs_music_NoteName();
    if ((x$11$3 === name$3)) {
      var base$3 = 3;
      break matchResult7$3;
    }
    var x$13$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__E__Laudio_libs_music_NoteName();
    if ((x$13$3 === name$3)) {
      var base$3 = 4;
      break matchResult7$3;
    }
    var x$15$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__F__Laudio_libs_music_NoteName();
    if ((x$15$3 === name$3)) {
      var base$3 = 5;
      break matchResult7$3;
    }
    var x$17$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Fx__Laudio_libs_music_NoteName();
    if ((x$17$3 === name$3)) {
      var base$3 = 6;
      break matchResult7$3;
    }
    var x$19$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gb__Laudio_libs_music_NoteName();
    if ((x$19$3 === name$3)) {
      var base$3 = 6;
      break matchResult7$3;
    }
    var x$21$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__G__Laudio_libs_music_NoteName();
    if ((x$21$3 === name$3)) {
      var base$3 = 7;
      break matchResult7$3;
    }
    var x$23$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Gx__Laudio_libs_music_NoteName();
    if ((x$23$3 === name$3)) {
      var base$3 = 8;
      break matchResult7$3;
    }
    var x$25$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ab__Laudio_libs_music_NoteName();
    if ((x$25$3 === name$3)) {
      var base$3 = 8;
      break matchResult7$3;
    }
    var x$27$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__A__Laudio_libs_music_NoteName();
    if ((x$27$3 === name$3)) {
      var base$3 = 9;
      break matchResult7$3;
    }
    var x$29$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Ax__Laudio_libs_music_NoteName();
    if ((x$29$3 === name$3)) {
      var base$3 = 10;
      break matchResult7$3;
    }
    var x$31$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__Bb__Laudio_libs_music_NoteName();
    if ((x$31$3 === name$3)) {
      var base$3 = 10;
      break matchResult7$3;
    }
    var x$33$3 = $j_audio$002elibs$002emusic$002e$002dNote$002dName$0024.$s_Laudio_libs_music_NoteName$__B__Laudio_libs_music_NoteName();
    if ((x$33$3 === name$3)) {
      var base$3 = 11;
      break matchResult7$3;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(name$3);
  }
  var midiRoot$3 = ((base$3 + Math.imul(12, ((1 + octave$3) | 0))) | 0);
  var chordType$3 = $j_audio$002elibs$002emusic$002e$002dChord.$s_Laudio_libs_music_Chord$__Minor__Laudio_libs_music_Chord();
  var aMin = $j_audio$002elibs$002emusic$002e$002dChord.$m_Laudio_libs_music_Chord$().cY(midiRoot$3, chordType$3);
  var notes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Seq$().eq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().gv(new ($j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$d_Laudio_libs_sequencer_MelodyNote.r().C)([new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(cMaj, 0))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(cMaj, 1))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(cMaj, 2))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(fMaj, 0))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(fMaj, 1))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(fMaj, 2))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(gMaj, 0))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(gMaj, 1))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(gMaj, 2))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(aMin, 0))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(aMin, 1))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(aMin, 2))), new $j_audio$002elibs$002esequencer$002e$002dMelody$002dNote.$c_Laudio_libs_sequencer_MelodyNote(1.0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())])));
  var sequence = $j_audio$002elibs$002esequencer$002esequencer$0024package$0024.$m_Laudio_libs_sequencer_sequencer$package$().fZ(notes);
  var sequencer = new $j_audio$002elibs$002esequencer$002e$002dSequencer.$c_Laudio_libs_sequencer_Sequencer(sequence, 3, 140.0, 0, 0.0, "seq_trigger", false);
  var activeNotes = sequencer.fD(tick);
  if (activeNotes.O()) {
    return $i_$0040elemaudio$002fcore.el.const((() => {
      var this$109 = ({});
      this$109.value = 0.0;
      this$109.value = 0.0;
      return this$109;
    })());
  } else {
    var node$proxy3 = $m_Laudio_tracks_scala_sequencer_audio$package$().ft(activeNotes.aT(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((n) => {
      var x$proxy1 = $j_audio$002elibs$002emusic$002emusic$0024package$0024.$m_Laudio_libs_music_music$package$().g0((n.cD | 0));
      var node$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
        var x$proxy1$1 = 0.0;
        x$proxy1$1 = x$proxy1;
        var this$110 = ({});
        this$110.value = 0.0;
        this$110.value = x$proxy1$1;
        return this$110;
      })());
      var $x_1 = $i_$0040elemaudio$002fcore.el.cycle(node$proxy2);
      var attack$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
        var this$2$2 = ({});
        this$2$2.value = 0.0;
        this$2$2.value = 0.1;
        return this$2$2;
      })());
      var decay$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
        var this$3$1 = ({});
        this$3$1.value = 0.0;
        this$3$1.value = 0.2;
        return this$3$1;
      })());
      var sustain$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
        var this$4$1 = ({});
        this$4$1.value = 0.0;
        this$4$1.value = 0.6;
        return this$4$1;
      })());
      var release$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
        var releaseTime$2 = 0.0;
        releaseTime$2 = 0.5;
        var this$5$1 = ({});
        this$5$1.value = 0.0;
        this$5$1.value = releaseTime$2;
        return this$5$1;
      })());
      return new $j_audio$002etracks$002escala$002esequencer$002e$002dSynth$002dSignal.$c_Laudio_tracks_scala_sequencer_SynthSignal($x_1, $i_$0040elemaudio$002fcore.el.adsr(attack$proxy1, decay$proxy1, sustain$proxy1, release$proxy1, n.cE));
    }))));
    var other$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
      var this$3$2 = ({});
      this$3$2.value = 0.0;
      this$3$2.value = 0.7;
      return this$3$2;
    })());
    return $i_$0040elemaudio$002fcore.el.mul(node$proxy3, other$proxy1);
  }
});
var $d_Laudio_tracks_scala_sequencer_audio$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_tracks_scala_sequencer_audio$package$, "audio.tracks.scala.sequencer.audio$package$", ({
  bh: 1
}));
export { $d_Laudio_tracks_scala_sequencer_audio$package$ as $d_Laudio_tracks_scala_sequencer_audio$package$ };
var $n_Laudio_tracks_scala_sequencer_audio$package$;
function $m_Laudio_tracks_scala_sequencer_audio$package$() {
  if ((!$n_Laudio_tracks_scala_sequencer_audio$package$)) {
    $n_Laudio_tracks_scala_sequencer_audio$package$ = new $c_Laudio_tracks_scala_sequencer_audio$package$();
  }
  return $n_Laudio_tracks_scala_sequencer_audio$package$;
}
export { $m_Laudio_tracks_scala_sequencer_audio$package$ as $m_Laudio_tracks_scala_sequencer_audio$package$ };
