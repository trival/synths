import { AudioNode__get_n, AudioNode_$ctor_6F3A48FE } from ".././lib.fs.js";
import { el } from "@elemaudio/core";
import { AudioNode__get_n as AudioNode__get_n_1 } from "../lib.fs.js";

export function render() {
    let f1;
    const node = AudioNode_$ctor_6F3A48FE(el.constant({
        value: 440,
    }));
    f1 = AudioNode_$ctor_6F3A48FE(el.cycle(AudioNode__get_n(node)));
    let f2;
    const node_1 = AudioNode_$ctor_6F3A48FE(el.constant({
        value: 441,
    }));
    f2 = AudioNode_$ctor_6F3A48FE(el.cycle(AudioNode__get_n(node_1)));
    let n;
    const arg0__1 = AudioNode_$ctor_6F3A48FE(el.add(AudioNode__get_n(f1), AudioNode__get_n(f2)));
    const arg1__1 = AudioNode_$ctor_6F3A48FE(el.constant({
        value: 2,
    }));
    n = AudioNode_$ctor_6F3A48FE(el.div(AudioNode__get_n(arg0__1), AudioNode__get_n(arg1__1)));
    return AudioNode__get_n_1(n);
}

