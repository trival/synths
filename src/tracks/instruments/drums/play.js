/* Generated by the Nim Compiler v2.0.8 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI536871020 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI671088644 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI671088643 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI536871023 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871091 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554466 = {size: 0,kind: 1,base: null,node: null,finalizer: null};
var NTI536871066 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI687865939 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871026 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI536870917 = {size: 0, kind: 14, base: null, node: null, finalizer: null};
var NTI33554445 = {size: 0,kind: 36,base: null,node: null,finalizer: null};
var NTI536870949 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536870946 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI536870945 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NNI536870917 = {kind: 2, offset: 0, typ: null, name: null, len: 3, sons: {"0": {kind: 1, offset: 0, typ: NTI536870917, name: "Kick", len: 0, sons: null}, 
"1": {kind: 1, offset: 1, typ: NTI536870917, name: "Snare", len: 0, sons: null}, 
"2": {kind: 1, offset: 2, typ: NTI536870917, name: "Off", len: 0, sons: null}}};
NTI536870917.node = NNI536870917;
var NNI536870949 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "start", len: 0, typ: NTI33554445, name: "start", sons: null}, 
{kind: 1, offset: "duration", len: 0, typ: NTI33554445, name: "duration", sons: null}, 
{kind: 1, offset: "data", len: 0, typ: NTI536870917, name: "data", sons: null}]};
NTI536870949.node = NNI536870949;
NTI536870946.base = NTI536870949;
var NNI536870945 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "notes", len: 0, typ: NTI536870946, name: "notes", sons: null}, 
{kind: 1, offset: "duration", len: 0, typ: NTI33554445, name: "duration", sons: null}]};
NTI536870945.node = NNI536870945;
var NNI687865939 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554445, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554445, name: "Field1", sons: null}]};
NTI687865939.node = NNI687865939;
NTI536871026.base = NTI687865939;
NTI536871066.base = NTI33554466;
var NNI671088644 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI671088644.node = NNI671088644;
NTI671088643.base = NTI671088644;
var NNI536871023 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "data", len: 0, typ: NTI536870917, name: "data", sons: null}, 
{kind: 1, offset: "idx", len: 0, typ: NTI33554435, name: "idx", sons: null}, 
{kind: 1, offset: "gate", len: 0, typ: NTI671088643, name: "gate", sons: null}]};
NTI536871023.node = NNI536871023;
NTI536871091.base = NTI536871023;
NTI536871020.base = NTI536871023;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557268, src_33557269, ti_33557270) {
  var result_33557279 = null;

    switch (ti_33557270.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557259(ti_33557270))) {
      result_33557279 = src_33557269;
      }
      else {
        result_33557279 = [src_33557269[0], src_33557269[1]];
      }
      
      break;
    case 19:
            if (dest_33557268 === null || dest_33557268 === undefined) {
        dest_33557268 = {};
      }
      else {
        for (var key in dest_33557268) { delete dest_33557268[key]; }
      }
      for (var key in src_33557269) { dest_33557268[key] = src_33557269[key]; }
      result_33557279 = dest_33557268;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557270.base == null))) {
      result_33557279 = nimCopy(dest_33557268, src_33557269, ti_33557270.base);
      }
      else {
      if ((ti_33557270.kind == 17)) {
      result_33557279 = (dest_33557268 === null || dest_33557268 === undefined) ? {m_type: ti_33557270} : dest_33557268;
      }
      else {
        result_33557279 = (dest_33557268 === null || dest_33557268 === undefined) ? {} : dest_33557268;
      }
      }
      nimCopyAux(result_33557279, src_33557269, ti_33557270.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557269)) { 
        if(dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
          dest_33557268 = new src_33557269.constructor(src_33557269);
        } else {
          dest_33557268.set(src_33557269, 0);
        }
        result_33557279 = dest_33557268;
      } else {
        if (src_33557269 === null) {
          result_33557279 = null;
        }
        else {
          if (dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
            dest_33557268 = new Array(src_33557269.length);
          }
          result_33557279 = dest_33557268;
          for (var i = 0; i < src_33557269.length; ++i) {
            result_33557279[i] = nimCopy(result_33557279[i], src_33557269[i], ti_33557270.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557269 === null) {
        result_33557279 = null;
      }
      else {
        if (dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
          dest_33557268 = new Array(src_33557269.length);
        }
        result_33557279 = dest_33557268;
        for (var i = 0; i < src_33557269.length; ++i) {
          result_33557279[i] = nimCopy(result_33557279[i], src_33557269[i], ti_33557270.base);
        }
      }
    
      break;
    case 28:
            if (src_33557269 !== null) {
        result_33557279 = src_33557269.slice(0);
      }
    
      break;
    default: 
      result_33557279 = src_33557269;
      break;
    }

  return result_33557279;

}

function toJSStr(s_33556901) {
  var result_33556902 = null;

    var res_33556943 = newSeq_33556919((s_33556901).length);
    var i_33556944 = 0;
    var j_33556945 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556944 < (s_33556901).length)) break Label2;
          var c_33556946 = s_33556901[i_33556944];
          if ((c_33556946 < 128)) {
          res_33556943[j_33556945] = String.fromCharCode(c_33556946);
          i_33556944 += 1;
          }
          else {
            var helper_33556959 = newSeq_33556919(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556960 = c_33556946.toString(16);
                  if ((((code_33556960) == null ? 0 : (code_33556960).length) == 1)) {
                  helper_33556959.push("%0");;
                  }
                  else {
                  helper_33556959.push("%");;
                  }
                  
                  helper_33556959.push(code_33556960);;
                  i_33556944 += 1;
                  if ((((s_33556901).length <= i_33556944) || (s_33556901[i_33556944] < 128))) {
                  break Label3;
                  }
                  
                  c_33556946 = s_33556901[i_33556944];
                }
            };
++excHandler;
            try {
            res_33556943[j_33556945] = decodeURIComponent(helper_33556959.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556943[j_33556945] = helper_33556959.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556945 += 1;
        }
    };
    if (res_33556943.length < j_33556945) { for (var i = res_33556943.length ; i < j_33556945 ; ++i) res_33556943.push(null); }
               else { res_33556943.length = j_33556945; };
    result_33556902 = res_33556943.join("");

  return result_33556902;

}

function mnewString(len_33557003) {
        var result = new Array(len_33557003);
    for (var i = 0; i < len_33557003; i++) {result[i] = 0;}
    return result;
  

  
}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
import { el } from "@elemaudio/core" 

function isFatPointer_33557259(ti_33557260) {
  var result_33557261 = false;

  BeforeRet: {
    result_33557261 = !((ConstSet1[ti_33557260.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557261;

}

function nimCopyAux(dest_33557272, src_33557273, n_33557274) {
    switch (n_33557274.kind) {
    case 0:
      break;
    case 1:
            dest_33557272[n_33557274.offset] = nimCopy(dest_33557272[n_33557274.offset], src_33557273[n_33557274.offset], n_33557274.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557274.sons.length; i++) {
      nimCopyAux(dest_33557272, src_33557273, n_33557274.sons[i]);
    }
    
      break;
    case 3:
            dest_33557272[n_33557274.offset] = nimCopy(dest_33557272[n_33557274.offset], src_33557273[n_33557274.offset], n_33557274.typ);
      for (var i = 0; i < n_33557274.sons.length; ++i) {
        nimCopyAux(dest_33557272, src_33557273, n_33557274.sons[i][1]);
      }
    
      break;
    }

  
}

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }
  return result_33556922;

}

function timedTrigger_671088797(start_671088798, dur_671088799, key_671088800) {
  var result_671088801 = null;

    var t_671088802 = el.div(el.time(), el.sr());
    var startNode_671088803 = el.const({value: start_671088798, key: toJSStr((key_671088800 || []).concat([95,115,116,97,114,116] || []))});
    var endNode_671088804 = el.const({value: (start_671088798 + dur_671088799), key: toJSStr((key_671088800 || []).concat([95,101,110,100] || []))});
    result_671088801 = el.mul(el.ge(t_671088802, startNode_671088803), el.le(t_671088802, endNode_671088804));

  return result_671088801;

}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = (old_301990096 + n_301990095), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      var iHEX60gensym4_301990110 = 0;
      var i_536871713 = 0;
      Label3: {
          Label4: while (true) {
          if (!(i_536871713 < n_301990095)) break Label4;
            iHEX60gensym4_301990110 = i_536871713;
            result_301990092[result_301990092_Idx][(old_301990096 + iHEX60gensym4_301990110)] = x_301990093.charCodeAt((start_301990094 + iHEX60gensym4_301990110));
            i_536871713 += 1;
          }
      };
    };

  
}

function addChars_301990086(result_301990088, result_301990088_Idx, x_301990089) {
    addChars_301990090(result_301990088, result_301990088_Idx, x_301990089, 0, ((x_301990089) == null ? 0 : (x_301990089).length));

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
    addChars_301990086(result_301990112, result_301990112_Idx, ((x_301990113) + ""));

  
}

function addInt_301990129(result_301990130, result_301990130_Idx, x_301990131) {
    addInt_301990111(result_301990130, result_301990130_Idx, BigInt(x_301990131));

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

    addInt_301990129(result_369098762, 0, x_369098761);

  return result_369098762[0];

}

function createSequencer_536871080(s_536871082, initData_536871083, trackCount_536871084, bpm_536871085, repetitions_536871086, startTime_536871087, seqKey_536871088, debug_536871089) {
  var result_536871107 = ({sequence: ({notes: [], duration: 0.0}), initData: 0, trackCount: 0, bpm: 0.0, repetitions: 0, startTime: 0.0, seqKey: [], debug: false, secPerBeat: 0.0, seqDuration: 0.0, noteIntervals: [], tracks: [], playingNotes: [], currentTrackIdx: 0});

    result_536871107.sequence = nimCopy(result_536871107.sequence, s_536871082, NTI536870945);
    result_536871107.initData = initData_536871083;
    result_536871107.trackCount = trackCount_536871084;
    result_536871107.bpm = bpm_536871085;
    result_536871107.repetitions = repetitions_536871086;
    result_536871107.startTime = startTime_536871087;
    result_536871107.seqKey = nimCopy(null, seqKey_536871088, NTI33554449);
    result_536871107.debug = debug_536871089;
    var secPerBeat_536871108 = (60.0 / bpm_536871085);
    result_536871107.secPerBeat = secPerBeat_536871108;
    var seqDuration_536871109 = (s_536871082.duration * secPerBeat_536871108);
    result_536871107.seqDuration = seqDuration_536871109;
    var noteIntervals_536871114 = [];
    Label1: {
      var i_536871156 = 0;
      var note_536871157 = ({start: 0.0, duration: 0.0, data: 0});
      var i_536871697 = 0;
      var L_536871698 = (s_536871082.notes).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871697 < L_536871698)) break Label3;
            i_536871156 = i_536871697;
            note_536871157 = nimCopy(note_536871157, s_536871082.notes[i_536871697], NTI536870949);
            var start_536871158 = ((note_536871157.start * secPerBeat_536871108) - seqDuration_536871109);
            var finish_536871159 = (start_536871158 + (note_536871157.duration * secPerBeat_536871108));
            if ((0.0 < finish_536871159)) {
            noteIntervals_536871114.push({Field0: start_536871158, Field1: finish_536871159});;
            }
            
            i_536871697 += 1;
          }
      };
    };
    var playingNotes_536871168 = [];
    Label4: {
      var i_536871174 = 0;
      var note_536871175 = ({start: 0.0, duration: 0.0, data: 0});
      var i_536871701 = 0;
      var L_536871702 = (s_536871082.notes).length;
      Label5: {
          Label6: while (true) {
          if (!(i_536871701 < L_536871702)) break Label6;
            i_536871174 = i_536871701;
            note_536871175 = nimCopy(note_536871175, s_536871082.notes[i_536871701], NTI536870949);
            var start_536871176 = (note_536871175.start * secPerBeat_536871108);
            var finish_536871177 = (start_536871176 + (note_536871175.duration * secPerBeat_536871108));
            noteIntervals_536871114.push({Field0: start_536871176, Field1: finish_536871177});;
            playingNotes_536871168.push(false);;
            i_536871701 += 1;
          }
      };
    };
    result_536871107.noteIntervals = nimCopy(null, noteIntervals_536871114, NTI536871026);
    result_536871107.playingNotes = nimCopy(null, playingNotes_536871168, NTI536871066);
    var tracks_536871191 = [];
    Label7: {
      var i_536871196 = 0;
      var i_536871705 = 0;
      Label8: {
          Label9: while (true) {
          if (!(i_536871705 < trackCount_536871084)) break Label9;
            i_536871196 = i_536871705;
            tracks_536871191.push({data: initData_536871083, idx: i_536871196, gate: timedTrigger_671088797(0.0, 0.0, (seqKey_536871088 || []).concat(HEX24_369098760(i_536871196) || []))});;
            i_536871705 += 1;
          }
      };
    };
    result_536871107.tracks = nimCopy(null, tracks_536871191, NTI536871091);

  return result_536871107;

}

function HEX2BHEX3D_536871005(x_536871007, x_536871007_Idx, y_536871008) {
    x_536871007[x_536871007_Idx] = (x_536871007[x_536871007_Idx] + y_536871008);

  
}

function toSequence_536870963(melody_536870965, null_536870966) {
  var result_536870972 = ({notes: [], duration: 0.0});

    Label1: {
      var note_536870993 = {Field0: 0.0, Field1: 0};
      var i_536871717 = 0;
      var L_536871718 = (melody_536870965).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871717 < L_536871718)) break Label3;
            note_536870993 = melody_536870965[i_536871717];
            if (!((note_536870993.Field1 == null_536870966))) {
            var n_536871000 = {start: result_536870972.duration, duration: note_536870993.Field0, data: note_536870993.Field1};
            var Temporary4 = nimCopy(null, n_536871000, NTI536870949);
            result_536870972.notes.push(Temporary4);;
            }
            
            HEX2BHEX3D_536871005(result_536870972, "duration", note_536870993.Field0);
            i_536871717 += 1;
          }
      };
    };

  return result_536870972;

}

function toInt_33556014(f_33556015) {
    var Temporary1;

  var result_33556016 = 0;

    if ((0.0 <= f_33556015)) {
    Temporary1 = (((f_33556015 + 0.5)) | 0);
    }
    else {
    Temporary1 = (((f_33556015 - 0.5)) | 0);
    }
    
    result_33556016 = Temporary1;

  return result_33556016;

}

function getNextTrackIdx_536871418(s_536871420) {
  var result_536871421 = 0;

    result_536871421 = s_536871420.currentTrackIdx;
    s_536871420.currentTrackIdx = Math.trunc((s_536871420.currentTrackIdx + 1) % s_536871420.trackCount);

  return result_536871421;

}

function addQuoted_536871582(s_536871584, s_536871584_Idx, x_536871585) {
    addInt_301990129(s_536871584, s_536871584_Idx, x_536871585);

  
}

function collectionToString_536871550(x_536871552, prefix_536871553, separator_536871554, suffix_536871555) {
  var result_536871556 = [[]];

    result_536871556[0] = nimCopy(null, prefix_536871553, NTI33554449);
    var firstElement_536871557 = true;
    Label1: {
      var value_536871578 = 0;
      var i_536871737 = 0;
      var L_536871738 = (x_536871552).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871737 < L_536871738)) break Label3;
            value_536871578 = x_536871552[i_536871737];
            if (firstElement_536871557) {
            firstElement_536871557 = false;
            }
            else {
            result_536871556[0].push.apply(result_536871556[0], separator_536871554);;
            }
            
            addQuoted_536871582(result_536871556, 0, value_536871578);
            i_536871737 += 1;
          }
      };
    };
    result_536871556[0].push.apply(result_536871556[0], suffix_536871555);;

  return result_536871556[0];

}

function HEX24_536871546(x_536871548) {
  var result_536871549 = [];

    result_536871549 = nimCopy(null, collectionToString_536871550(x_536871548, [64,91], [44,32], [93]), NTI33554449);

  return result_536871549;

}

function currentNotes_536871345(s_536871347, currentTime_536871348) {
  var result_536871349 = [];

    var currentLoop_536871350 = Math.floor(((currentTime_536871348 - s_536871347.startTime) / s_536871347.seqDuration));
    if (((s_536871347.repetitions == 0) || (toInt_33556014(currentLoop_536871350) < s_536871347.repetitions))) {
    var seqTime_536871351 = (currentTime_536871348 - (currentLoop_536871350 * s_536871347.seqDuration));
    Label1: {
      var i_536871392 = 0;
      var n_536871393 = {Field0: 0.0, Field1: 0.0};
      var i_536871727 = 0;
      var L_536871728 = (s_536871347.noteIntervals).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871727 < L_536871728)) break Label3;
            i_536871392 = i_536871727;
            n_536871393 = nimCopy(n_536871393, s_536871347.noteIntervals[i_536871727], NTI687865939);
            if ((((n_536871393.Field0 - 0.1) <= seqTime_536871351) && (seqTime_536871351 < n_536871393.Field1))) {
            if (!(s_536871347.playingNotes[i_536871392])) {
            var note_536871394 = nimCopy(null, s_536871347.sequence.notes[i_536871392], NTI536870949);
            var start_536871395 = (n_536871393.Field0 + (currentLoop_536871350 * s_536871347.seqDuration));
            var nextTrackIdx_536871422 = getNextTrackIdx_536871418(s_536871347);
            s_536871347.tracks[nextTrackIdx_536871422].data = note_536871394.data;
            s_536871347.tracks[nextTrackIdx_536871422].gate = timedTrigger_671088797(start_536871395, (note_536871394.duration * s_536871347.secPerBeat), (s_536871347.seqKey || []).concat(HEX24_369098760(nextTrackIdx_536871422) || []));
            s_536871347.playingNotes[i_536871392] = true;
            }
            
            }
            else {
              if (s_536871347.playingNotes[i_536871392]) {
              s_536871347.playingNotes[i_536871392] = false;
              }
              
            }
            
            i_536871727 += 1;
          }
      };
    };
    if (s_536871347.debug) {
    var playing_536871427 = [];
    Label4: {
      var i_536871467 = 0;
      var v_536871468 = false;
      var i_536871732 = 0;
      var L_536871733 = (s_536871347.playingNotes).length;
      Label5: {
          Label6: while (true) {
          if (!(i_536871732 < L_536871733)) break Label6;
            i_536871467 = i_536871732;
            v_536871468 = s_536871347.playingNotes[i_536871732];
            if (v_536871468) {
            playing_536871427.push(i_536871467);;
            }
            
            i_536871732 += 1;
          }
      };
    };
    rawEcho(s_536871347.seqKey, [32], HEX24_369098760(s_536871347.currentTrackIdx), [32], HEX24_536871546(playing_536871427));
    }
    
    }
    
    result_536871349 = nimCopy(null, s_536871347.tracks, NTI536871020);

  return result_536871349;

}

function HEX2BHEX3D_671088685(a_671088686, a_671088686_Idx, b_671088687) {
    a_671088686[a_671088686_Idx] = el.add(a_671088686[a_671088686_Idx], b_671088687);

  
}

function highpass_671088780(sig_671088781, fq_671088782, q_671088783) {
  var result_671088784 = null;

    return el.highpass(fq_671088782, q_671088783, sig_671088781)

  return result_671088784;

}

function lowpass_671088775(sig_671088776, fq_671088777, q_671088778) {
  var result_671088779 = null;

    return el.lowpass(fq_671088777, q_671088778, sig_671088776)

  return result_671088779;

}

function bassdrum_536870915(gate_536870916) {
  var result_536870917 = null;

    var duration_536870918 = el.const({value: 0.6});
    var noiseDuration_536870919 = el.const({value: 0.03});
    var env_536870920 = el.adsr(el.const({value: 0.01}), duration_536870918, el.const({value: 0.0}), duration_536870918, gate_536870916);
    var envNoise_536870921 = el.adsr(el.const({value: 0.01}), noiseDuration_536870919, el.const({value: 0.0}), noiseDuration_536870919, gate_536870916);
    var fq_536870922 = el.add(22.5, el.mul(env_536870920, 90.0));
    var spectrum_536870923 = el.mul(highpass_671088780(lowpass_671088775(el.cycle(el.add(fq_536870922, el.mul(190.0, el.cycle(45.0)))), el.add(fq_536870922, 45.0), el.const({value: 1.0})), el.const({value: 90.0}), el.const({value: 1.0})), 0.8);
    var noise_536870924 = highpass_671088780(lowpass_671088775(el.noise(), el.add(400.0, el.mul(8000.0, envNoise_536870921)), el.const({value: 1.0})), el.const({value: 200.0}), el.const({value: 1.0}));
    result_536870917 = el.mul(el.mul(el.add(el.mul(noise_536870924, 0.015), spectrum_536870923), env_536870920), 0.8);

  return result_536870917;

}

function snare_536870925(gate_536870926, intensity_536870927) {
  var result_536870928 = null;

    var duration_536870929 = el.const({value: 0.3});
    var env_536870930 = el.adsr(el.const({value: 0.01}), duration_536870929, el.const({value: 0.0}), duration_536870929, gate_536870926);
    var env2_536870931 = el.adsr(el.const({value: 0.01}), el.div(duration_536870929, 2.0), el.const({value: 0.0}), el.div(duration_536870929, 2.0), gate_536870926);
    var fq1_536870932 = 286.0;
    var band1_536870933 = el.mul(el.mul(lowpass_671088775(el.cycle(el.add(fq1_536870932, el.mul(400.0, el.cycle(111.0)))), el.const({value: fq1_536870932}), el.const({value: 1.0})), env_536870930), 0.5);
    var fq2_536870934 = 335.0;
    var band2_536870935 = el.mul(el.mul(lowpass_671088775(el.cycle(el.add(fq2_536870934, el.mul(400.0, el.cycle(111.0)))), el.const({value: fq2_536870934}), el.const({value: 1.0})), env_536870930), 0.6);
    var band3_536870936 = el.mul(el.cycle(180.0), env2_536870931);
    var band4_536870937 = el.mul(el.cycle(330.0), env2_536870931);
    var noiseComponent_536870938 = highpass_671088780(lowpass_671088775(el.noise(), el.const({value: 6000.0}), el.const({value: 1.0})), el.const({value: 400.0}), el.const({value: 1.0}));
    result_536870928 = el.mul(el.add(el.mul(el.mul(el.add(el.add(el.add(band1_536870933, band2_536870935), band3_536870936), band4_536870937), el.sub(1.0, el.mul(intensity_536870927, 0.3))), 0.5), el.mul(el.mul(noiseComponent_536870938, env_536870930), el.add(0.3, el.mul(intensity_536870927, 0.3)))), el.add(0.7, el.mul(intensity_536870927, 0.3)));

  return result_536870928;

}

function play_536871319(midiNotes_536871320, time_536871321) {
  var result_536871322 = [null];

    var notes_536871603 = currentNotes_536871345(seq1_536871318[0], time_536871321);
    result_536871322[0] = el.const({value: 0.0});
    Label1: {
      var hit_536871624 = ({data: 0, idx: 0, gate: null});
      var i_536871722 = 0;
      var L_536871723 = (notes_536871603).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871722 < L_536871723)) break Label3;
            hit_536871624 = notes_536871603[i_536871722];
            if ((hit_536871624.data == 0)) {
            HEX2BHEX3D_671088685(result_536871322, 0, bassdrum_536870915(hit_536871624.gate));
            }
            else {
            if ((hit_536871624.data == 1)) {
            HEX2BHEX3D_671088685(result_536871322, 0, snare_536870925(hit_536871624.gate, el.latch(hit_536871624.gate, el.noise())));
            }
            }
            i_536871722 += 1;
          }
      };
    };

  return result_536871322[0];

}
var beat_536870957 = [{Field0: 1.0, Field1: 0}, {Field0: 1.0, Field1: 1}];
var seq1_536871318 = [createSequencer_536871080(toSequence_536870963(beat_536870957, 2), 2, 2, 65.0, 0, 0.0, [115,101,113,95,116,114,105,103,103,101,114], false)];
export {play_536871319 as play}
