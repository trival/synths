import { class_type } from "../../fable_modules/fable-library.4.4.1/Reflection.js";

export class AudioNode {
    constructor(n) {
        this["n@9"] = n;
    }
}

export function AudioNode_$reflection() {
    return class_type("FsAudio.AudioNode", void 0, AudioNode);
}

export function AudioNode_$ctor_6F3A48FE(n) {
    return new AudioNode(n);
}

export function AudioNode__get_n(_) {
    return _["n@9"];
}

