/* Generated by the Nim Compiler v2.0.4 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI536871089 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI671088644 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI671088643 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI536871088 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871159 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554466 = {size: 0,kind: 1,base: null,node: null,finalizer: null};
var NTI536871134 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI872415275 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871094 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI536871031 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871032 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI536871027 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33554445 = {size: 0,kind: 36,base: null,node: null,finalizer: null};
var NTI536870926 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI687866335 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI687866266 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
NTI687866266.base = NTI33554435;
NTI687866335.base = NTI33554435;
var NNI536870926 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554445, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}]};
NTI536870926.node = NNI536870926;
var NNI536871031 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "start", len: 0, typ: NTI33554445, name: "start", sons: null}, 
{kind: 1, offset: "duration", len: 0, typ: NTI33554445, name: "duration", sons: null}, 
{kind: 1, offset: "data", len: 0, typ: NTI33554435, name: "data", sons: null}]};
NTI536871031.node = NNI536871031;
NTI536871032.base = NTI536871031;
var NNI536871027 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "notes", len: 0, typ: NTI536871032, name: "notes", sons: null}, 
{kind: 1, offset: "duration", len: 0, typ: NTI33554445, name: "duration", sons: null}]};
NTI536871027.node = NNI536871027;
var NNI872415275 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554445, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554445, name: "Field1", sons: null}]};
NTI872415275.node = NNI872415275;
NTI536871094.base = NTI872415275;
NTI536871134.base = NTI33554466;
var NNI671088644 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI671088644.node = NNI671088644;
NTI671088643.base = NTI671088644;
var NNI536871088 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "data", len: 0, typ: NTI33554435, name: "data", sons: null}, 
{kind: 1, offset: "idx", len: 0, typ: NTI33554435, name: "idx", sons: null}, 
{kind: 1, offset: "gate", len: 0, typ: NTI671088643, name: "gate", sons: null}]};
NTI536871088.node = NNI536871088;
NTI536871159.base = NTI536871088;
NTI536871089.base = NTI536871088;

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
    var sharps_687865887 = new Uint8Array([0, 1, 3, 4, 6, 7, 8, 10, 11, 13, 14, 16]);
    var flats_687865888 = new Uint8Array([0, 2, 3, 5, 6, 7, 9, 10, 12, 13, 15, 16]);

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

function midiOffsets_687866392(scale_687866393) {
    var Temporary1;

  var result_687866394 = [];

    switch (scale_687866393) {
    case 0:
      Temporary1 = [0, 2, 4, 5, 7, 9, 11];
      break;
    case 1:
      Temporary1 = [0, 2, 3, 5, 7, 8, 10];
      break;
    case 2:
      Temporary1 = [0, 2, 3, 5, 7, 8, 11];
      break;
    case 3:
      Temporary1 = [0, 2, 4, 7, 9];
      break;
    case 4:
      Temporary1 = [0, 3, 5, 7, 10];
      break;
    case 5:
      Temporary1 = [0, 3, 5, 6, 7, 10];
      break;
    }
    result_687866394 = nimCopy(null, Temporary1, NTI687866266);

  return result_687866394;

}

function scale_687866467(baseNoteMidi_687866468, scale_687866469) {
  var result_687866470 = [];

    var offsets_687866471 = midiOffsets_687866392(scale_687866469);
    Label1: {
      var j_687866476 = 0;
      var i_536871684 = 0;
      Label2: {
          Label3: while (true) {
          if (!(i_536871684 < 3)) break Label3;
            j_687866476 = i_536871684;
            Label4: {
              var i_687866480 = 0;
              var i_536871681 = 0;
              var L_536871682 = (offsets_687866471).length;
              Label5: {
                  Label6: while (true) {
                  if (!(i_536871681 < L_536871682)) break Label6;
                    i_687866480 = offsets_687866471[i_536871681];
                    result_687866470.push(((i_687866480 + baseNoteMidi_687866468) + (j_687866476 * 12)));;
                    i_536871681 += 1;
                  }
              };
            };
            i_536871684 += 1;
          }
      };
    };

  return result_687866470;

}

function find_687865889(a_687865892, item_687865893) {
  var result_687865894 = 0;

  BeforeRet: {
    result_687865894 = 0;
    Label1: {
      var i_687865937 = 0;
      var i_536871688 = 0;
      Label2: {
          Label3: while (true) {
          if (!true) break Label3;
            i_687865937 = a_687865892[i_536871688];
            if ((i_687865937 == item_687865893)) {
            break BeforeRet;
            }
            
            result_687865894 += 1;
            if ((11 <= i_536871688)) {
            break Label2;
            }
            
            i_536871688 += 1;
          }
      };
    };
    result_687865894 = (-1);
  };

  return result_687865894;

}

function toMidi_687865884(note_687865885) {
  var result_687865886 = 0;

    var toneIndex_687865980 = find_687865889(sharps_687865887, note_687865885.Field0);
    if ((toneIndex_687865980 == (-1))) {
    toneIndex_687865980 = find_687865889(flats_687865888, note_687865885.Field0);
    }
    
    result_687865886 = (((note_687865885.Field1 + 1) * 12) + toneIndex_687865980);

  return result_687865886;

}

function scale_687866485(baseNote_687866486, scaleType_687866487) {
  var result_687866488 = [];

    result_687866488 = nimCopy(null, scale_687866467(toMidi_687865884(baseNote_687866486), scaleType_687866487), NTI687866335);

  return result_687866488;

}

function note_536870918(duration_536870919, scaleIndex_536870920) {
  var result_536870924 = {Field0: 0.0, Field1: 0};

    var colontmp__536871690 = duration_536870919;
    var colontmp__536871691 = s_536870916[(scaleIndex_536870920 - 1)];
    result_536870924 = nimCopy(result_536870924, {Field0: colontmp__536871690, Field1: colontmp__536871691}, NTI536870926);

  return result_536870924;

}

function brk_536870947(duration_536870948) {
  var result_536870950 = {Field0: 0.0, Field1: 0};

    var colontmp__536871692 = duration_536870948;
    var colontmp__536871693 = bassNull_536870917;
    result_536870950 = nimCopy(result_536870950, {Field0: colontmp__536871692, Field1: colontmp__536871693}, NTI536870926);

  return result_536870950;

}

function sharp_536870942(n_536870944) {
  var result_536870946 = {Field0: 0.0, Field1: 0};

    var colontmp__536871694 = n_536870944["Field0"];
    var colontmp__536871695 = (n_536870944["Field1"] + 1);
    result_536870946 = nimCopy(result_536870946, {Field0: colontmp__536871694, Field1: colontmp__536871695}, NTI536870926);

  return result_536870946;

}

function HEX26_536870966(x_536870968, y_536870969) {
  var result_536870970 = [];

    result_536870970 = new Array(((x_536870968).length + (y_536870969).length)); for (var i = 0 ; i < ((x_536870968).length + (y_536870969).length) ; ++i) { result_536870970[i] = {Field0: 0.0, Field1: 0}; }    Label1: {
      var i_536870989 = 0;
      var colontmp__536871697 = 0;
      colontmp__536871697 = ((x_536870968).length - 1);
      var res_536871699 = 0;
      Label2: {
          Label3: while (true) {
          if (!(res_536871699 <= colontmp__536871697)) break Label3;
            i_536870989 = res_536871699;
            result_536870970[i_536870989] = nimCopy(result_536870970[i_536870989], x_536870968[i_536870989], NTI536870926);
            res_536871699 += 1;
          }
      };
    };
    Label4: {
      var i_536870997 = 0;
      var colontmp__536871702 = 0;
      colontmp__536871702 = ((y_536870969).length - 1);
      var res_536871703 = 0;
      Label5: {
          Label6: while (true) {
          if (!(res_536871703 <= colontmp__536871702)) break Label6;
            i_536870997 = res_536871703;
            result_536870970[(i_536870997 + (x_536870968).length)] = nimCopy(result_536870970[(i_536870997 + (x_536870968).length)], y_536870969[i_536870997], NTI536870926);
            res_536871703 += 1;
          }
      };
    };

  return result_536870970;

}

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }
  return result_33556922;

}

function timedTrigger_671088808(start_671088809, dur_671088810, key_671088811) {
  var result_671088812 = null;

    var t_671088813 = el.div(el.time(), el.sr());
    var startNode_671088814 = el.const({value: start_671088809, key: toJSStr((key_671088811 || []).concat([95,115,116,97,114,116] || []))});
    var endNode_671088815 = el.const({value: (start_671088809 + dur_671088810), key: toJSStr((key_671088811 || []).concat([95,101,110,100] || []))});
    result_671088812 = el.mul(el.ge(t_671088813, startNode_671088814), el.le(t_671088813, endNode_671088815));

  return result_671088812;

}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = (old_301990096 + n_301990095), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      var iHEX60gensym4_301990110 = 0;
      var i_536871723 = 0;
      Label3: {
          Label4: while (true) {
          if (!(i_536871723 < n_301990095)) break Label4;
            iHEX60gensym4_301990110 = i_536871723;
            result_301990092[result_301990092_Idx][(old_301990096 + iHEX60gensym4_301990110)] = x_301990093.charCodeAt((start_301990094 + iHEX60gensym4_301990110));
            i_536871723 += 1;
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

function createSequencer_536871109(s_536871111, initData_536871112, trackCount_536871113, bpm_536871114, repetitions_536871115, startTime_536871116, seqKey_536871117, debug_536871118) {
  var result_536871136 = ({sequence: ({notes: [], duration: 0.0}), initData: 0, trackCount: 0, bpm: 0.0, repetitions: 0, startTime: 0.0, seqKey: [], debug: false, secPerBeat: 0.0, seqDuration: 0.0, noteIntervals: [], tracks: [], playingNotes: [], currentTrackIdx: 0});

    result_536871136.sequence = nimCopy(result_536871136.sequence, s_536871111, NTI536871027);
    result_536871136.initData = initData_536871112;
    result_536871136.trackCount = trackCount_536871113;
    result_536871136.bpm = bpm_536871114;
    result_536871136.repetitions = repetitions_536871115;
    result_536871136.startTime = startTime_536871116;
    result_536871136.seqKey = nimCopy(null, seqKey_536871117, NTI33554449);
    result_536871136.debug = debug_536871118;
    var secPerBeat_536871137 = (60.0 / bpm_536871114);
    result_536871136.secPerBeat = secPerBeat_536871137;
    var seqDuration_536871138 = (s_536871111.duration * secPerBeat_536871137);
    result_536871136.seqDuration = seqDuration_536871138;
    var noteIntervals_536871143 = [];
    Label1: {
      var i_536871185 = 0;
      var note_536871186 = ({start: 0.0, duration: 0.0, data: 0});
      var i_536871707 = 0;
      var L_536871708 = (s_536871111.notes).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871707 < L_536871708)) break Label3;
            i_536871185 = i_536871707;
            note_536871186 = nimCopy(note_536871186, s_536871111.notes[i_536871707], NTI536871031);
            var start_536871187 = ((note_536871186.start * secPerBeat_536871137) - seqDuration_536871138);
            var finish_536871188 = (start_536871187 + (note_536871186.duration * secPerBeat_536871137));
            if ((0.0 < finish_536871188)) {
            noteIntervals_536871143.push({Field0: start_536871187, Field1: finish_536871188});;
            }
            
            i_536871707 += 1;
          }
      };
    };
    var playingNotes_536871197 = [];
    Label4: {
      var i_536871203 = 0;
      var note_536871204 = ({start: 0.0, duration: 0.0, data: 0});
      var i_536871711 = 0;
      var L_536871712 = (s_536871111.notes).length;
      Label5: {
          Label6: while (true) {
          if (!(i_536871711 < L_536871712)) break Label6;
            i_536871203 = i_536871711;
            note_536871204 = nimCopy(note_536871204, s_536871111.notes[i_536871711], NTI536871031);
            var start_536871205 = (note_536871204.start * secPerBeat_536871137);
            var finish_536871206 = (start_536871205 + (note_536871204.duration * secPerBeat_536871137));
            noteIntervals_536871143.push({Field0: start_536871205, Field1: finish_536871206});;
            playingNotes_536871197.push(false);;
            i_536871711 += 1;
          }
      };
    };
    result_536871136.noteIntervals = nimCopy(null, noteIntervals_536871143, NTI536871094);
    result_536871136.playingNotes = nimCopy(null, playingNotes_536871197, NTI536871134);
    var tracks_536871220 = [];
    Label7: {
      var i_536871225 = 0;
      var i_536871715 = 0;
      Label8: {
          Label9: while (true) {
          if (!(i_536871715 < trackCount_536871113)) break Label9;
            i_536871225 = i_536871715;
            tracks_536871220.push({data: initData_536871112, idx: i_536871225, gate: timedTrigger_671088808(0.0, 0.0, (seqKey_536871117 || []).concat(HEX24_369098760(i_536871225) || []))});;
            i_536871715 += 1;
          }
      };
    };
    result_536871136.tracks = nimCopy(null, tracks_536871220, NTI536871159);

  return result_536871136;

}

function HEX2BHEX3D_536871066(x_536871068, x_536871068_Idx, y_536871069) {
    x_536871068[x_536871068_Idx] = (x_536871068[x_536871068_Idx] + y_536871069);

  
}

function toSequence_536871030(melody_536871032, null_536871033) {
  var result_536871039 = ({notes: [], duration: 0.0});

    Label1: {
      var note_536871059 = {Field0: 0.0, Field1: 0};
      var i_536871727 = 0;
      var L_536871728 = (melody_536871032).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871727 < L_536871728)) break Label3;
            note_536871059 = melody_536871032[i_536871727];
            if (!((note_536871059.Field1 == null_536871033))) {
            var n_536871061 = {start: result_536871039.duration, duration: note_536871059.Field0, data: note_536871059.Field1};
            var Temporary4 = nimCopy(null, n_536871061, NTI536871031);
            result_536871039.notes.push(Temporary4);;
            }
            
            HEX2BHEX3D_536871066(result_536871039, "duration", note_536871059.Field0);
            i_536871727 += 1;
          }
      };
    };

  return result_536871039;

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

function getNextTrackIdx_536871447(s_536871449) {
  var result_536871450 = 0;

    result_536871450 = s_536871449.currentTrackIdx;
    s_536871449.currentTrackIdx = Math.trunc((s_536871449.currentTrackIdx + 1) % s_536871449.trackCount);

  return result_536871450;

}

function addQuoted_536871545(s_536871547, s_536871547_Idx, x_536871548) {
    addInt_301990129(s_536871547, s_536871547_Idx, x_536871548);

  
}

function collectionToString_536871530(x_536871532, prefix_536871533, separator_536871534, suffix_536871535) {
  var result_536871536 = [[]];

    result_536871536[0] = nimCopy(null, prefix_536871533, NTI33554449);
    var firstElement_536871537 = true;
    Label1: {
      var value_536871541 = 0;
      var i_536871746 = 0;
      var L_536871747 = (x_536871532).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871746 < L_536871747)) break Label3;
            value_536871541 = x_536871532[i_536871746];
            if (firstElement_536871537) {
            firstElement_536871537 = false;
            }
            else {
            result_536871536[0].push.apply(result_536871536[0], separator_536871534);;
            }
            
            addQuoted_536871545(result_536871536, 0, value_536871541);
            i_536871746 += 1;
          }
      };
    };
    result_536871536[0].push.apply(result_536871536[0], suffix_536871535);;

  return result_536871536[0];

}

function HEX24_536871526(x_536871528) {
  var result_536871529 = [];

    result_536871529 = nimCopy(null, collectionToString_536871530(x_536871528, [64,91], [44,32], [93]), NTI33554449);

  return result_536871529;

}

function currentNotes_536871374(s_536871376, currentTime_536871377) {
  var result_536871378 = [];

    var currentLoop_536871379 = Math.floor(((currentTime_536871377 - s_536871376.startTime) / s_536871376.seqDuration));
    if (((s_536871376.repetitions == 0) || (toInt_33556014(currentLoop_536871379) < s_536871376.repetitions))) {
    var seqTime_536871380 = (currentTime_536871377 - (currentLoop_536871379 * s_536871376.seqDuration));
    Label1: {
      var i_536871421 = 0;
      var n_536871422 = {Field0: 0.0, Field1: 0.0};
      var i_536871737 = 0;
      var L_536871738 = (s_536871376.noteIntervals).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871737 < L_536871738)) break Label3;
            i_536871421 = i_536871737;
            n_536871422 = nimCopy(n_536871422, s_536871376.noteIntervals[i_536871737], NTI872415275);
            if ((((n_536871422.Field0 - 0.1) <= seqTime_536871380) && (seqTime_536871380 < n_536871422.Field1))) {
            if (!(s_536871376.playingNotes[i_536871421])) {
            var note_536871423 = nimCopy(null, s_536871376.sequence.notes[i_536871421], NTI536871031);
            var start_536871424 = (n_536871422.Field0 + (currentLoop_536871379 * s_536871376.seqDuration));
            var nextTrackIdx_536871451 = getNextTrackIdx_536871447(s_536871376);
            s_536871376.tracks[nextTrackIdx_536871451].data = note_536871423.data;
            s_536871376.tracks[nextTrackIdx_536871451].gate = timedTrigger_671088808(start_536871424, (note_536871423.duration * s_536871376.secPerBeat), (s_536871376.seqKey || []).concat(HEX24_369098760(nextTrackIdx_536871451) || []));
            s_536871376.playingNotes[i_536871421] = true;
            }
            
            }
            else {
              if (s_536871376.playingNotes[i_536871421]) {
              s_536871376.playingNotes[i_536871421] = false;
              }
              
            }
            
            i_536871737 += 1;
          }
      };
    };
    if (s_536871376.debug) {
    var playing_536871456 = [];
    Label4: {
      var i_536871496 = 0;
      var v_536871497 = false;
      var i_536871742 = 0;
      var L_536871743 = (s_536871376.playingNotes).length;
      Label5: {
          Label6: while (true) {
          if (!(i_536871742 < L_536871743)) break Label6;
            i_536871496 = i_536871742;
            v_536871497 = s_536871376.playingNotes[i_536871742];
            if (v_536871497) {
            playing_536871456.push(i_536871496);;
            }
            
            i_536871742 += 1;
          }
      };
    };
    rawEcho(s_536871376.seqKey, [32], HEX24_369098760(s_536871376.currentTrackIdx), [32], HEX24_536871526(playing_536871456));
    }
    
    }
    
    result_536871378 = nimCopy(null, s_536871376.tracks, NTI536871089);

  return result_536871378;

}

function HEX40_671088648(val_671088649, key_671088650) {
  var result_671088651 = null;

    result_671088651 = el.const({value: val_671088649, key: toJSStr(key_671088650)});

  return result_671088651;

}

function toFrequency_687865986(midi_687865987) {
  var result_687865988 = 0.0;

    result_687865988 = (Math.pow(2.0, ((midi_687865987 - 69) / 12.0)) * 440.0);

  return result_687865988;

}

function lowpass_671088795(sig_671088796, fq_671088797, q_671088798) {
  var result_671088799 = null;

    return el.lowpass(fq_671088797, q_671088798, sig_671088796)

  return result_671088799;

}

function HEX2BHEX3D_671088705(a_671088706, a_671088706_Idx, b_671088707) {
    a_671088706[a_671088706_Idx] = el.add(a_671088706[a_671088706_Idx], b_671088707);

  
}

function play_536871349(time_536871350) {
  var result_536871351 = null;

    var bassNotes_536871566 = currentNotes_536871374(bassSeq_536871347[0], time_536871350);
    var bassSound_536871567 = [HEX40_671088648(0.0, [98,97,115,115])];
    var bassGain_536871568 = [HEX40_671088648(0.0, [98,97,115,115,95,103,97,105,110])];
    Label1: {
      var n_536871589 = ({data: 0, idx: 0, gate: null});
      var i_536871732 = 0;
      var L_536871733 = (bassNotes_536871566).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536871732 < L_536871733)) break Label3;
            n_536871589 = bassNotes_536871566[i_536871732];
            var fq_536871590 = HEX40_671088648(toFrequency_687865986(n_536871589.data), ([98] || []).concat(HEX24_369098760(n_536871589.idx) || []));
            var amount_536871591 = el.mul(fq_536871590, 2.41);
            var fq2_536871592 = el.add(fq_536871590, el.mul(el.saw(el.add(fq_536871590, el.mul(el.mul(el.cycle(0.3), fq_536871590), 0.01))), amount_536871591));
            var sound_536871593 = lowpass_671088795(el.triangle(el.mul(fq2_536871592, 0.5)), el.mul(fq_536871590, 2.5), el.const({value: 2.0}));
            var env_536871594 = el.adsr(el.const({value: 0.3}), el.const({value: 0.3}), el.const({value: 0.6}), el.const({value: release_536871027}), n_536871589.gate);
            HEX2BHEX3D_671088705(bassSound_536871567, 0, el.mul(sound_536871593, env_536871594));
            HEX2BHEX3D_671088705(bassGain_536871568, 0, env_536871594);
            i_536871732 += 1;
          }
      };
    };
    var bass_536871595 = el.div(bassSound_536871567[0], bassGain_536871568[0]);
    var noise1_536871596 = lowpass_671088795(el.mul(el.mul(el.pinknoise(), el.add(el.cycle(bps_536871348), 3.0)), el.const({value: 0.03})), el.const({value: 8000.0}), el.const({value: 0.6}));
    var bps2_536871597 = (bps_536871348 / 2.0);
    var bps4_536871598 = (bps_536871348 / 4.0);
    var noise2_536871599 = lowpass_671088795(el.mul(el.mul(el.mul(el.mul(el.sub(1.0, el.train(bps2_536871597)), el.noise()), 0.07), el.sub(1.0, el.pow(el.phasor(bps2_536871597), 0.3))), el.add(1.0, el.mul(-0.3, el.cycle(bps4_536871598)))), el.mul(el.mul(el.sub(1.0, el.train(bps2_536871597)), el.add(0.2, el.phasor(bps2_536871597))), 10000.0), el.const({value: 0.8}));
    result_536871351 = el.add(el.add(el.mul(bass_536871595, 0.8), noise1_536871596), noise2_536871599);

  return result_536871351;

}
var s_536870916 = scale_687866485({Field0: 10, Field1: 2}, 1);
var bassNull_536870917 = 0;
var bassA_536870955 = [nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926), nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926), nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 5), NTI536870926), nimCopy(null, note_536870918(1, 1), NTI536870926), nimCopy(null, note_536870918(3, 4), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 4), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, sharp_536870942(note_536870918(3, 6)), NTI536870926), nimCopy(null, note_536870918(1, 2), NTI536870926), nimCopy(null, note_536870918(3, 4), NTI536870926), nimCopy(null, note_536870918(1, 7), NTI536870926), nimCopy(null, note_536870918(3, 3), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926), nimCopy(null, note_536870918(2, 1), NTI536870926), nimCopy(null, sharp_536870942(note_536870918(2, 3)), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926)];
var bassB_536870960 = [nimCopy(null, note_536870918(3, 5), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(2, 1), NTI536870926), nimCopy(null, sharp_536870942(note_536870918(2, 3)), NTI536870926), nimCopy(null, note_536870918(3, 4), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 4), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 4), NTI536870926), nimCopy(null, sharp_536870942(note_536870918(1, 1)), NTI536870926), nimCopy(null, note_536870918(3, 7), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 3), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926)];
var bassA2_536870965 = [nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926), nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926), nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, sharp_536870942(note_536870918(1, 6)), NTI536870926), nimCopy(null, note_536870918(3, 6), NTI536870926), nimCopy(null, note_536870918(1, 5), NTI536870926), nimCopy(null, note_536870918(3, 1), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926), nimCopy(null, note_536870918(3, 2), NTI536870926), nimCopy(null, brk_536870947(1.0), NTI536870926)];
var bassSong_536871025 = HEX26_536870966(HEX26_536870966(HEX26_536870966(bassA_536870955, bassA_536870955), bassB_536870960), bassA2_536870965);
var bpm_536871026 = 105.0;
var release_536871027 = 2.5;
var bassSeq_536871347 = [createSequencer_536871109(toSequence_536871030(bassSong_536871025, bassNull_536870917), bassNull_536870917, 2, bpm_536871026, 0, 0.0, [98,97,115,115], false)];
var bps_536871348 = (bpm_536871026 / 60.0);
export {play_536871349 as play}
