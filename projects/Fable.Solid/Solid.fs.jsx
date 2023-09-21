import { class_type } from "../../fable_modules/fable-library.4.1.4/Reflection.js";
import { append } from "../../fable_modules/fable-library.4.1.4/Array.js";
import { render } from "solid-js/web";
import { FSharpRef } from "../../fable_modules/fable-library.4.1.4/Types.js";
import { defaultOf } from "../../fable_modules/fable-library.4.1.4/Util.js";

export class SolidStorePath$2 {
    constructor(setter, path) {
        this.setter = setter;
        this.path = path;
    }
}

export function SolidStorePath$2_$reflection(gen0, gen1) {
    return class_type("SolidStorePath`2", [gen0, gen1], SolidStorePath$2);
}

export function SolidStorePath$2_$ctor_Z56D2980F(setter, path) {
    return new SolidStorePath$2(setter, path);
}

export function SolidStorePath$2__get_Setter(_) {
    return _.setter;
}

export function SolidStorePath$2__get_Path(_) {
    return _.path;
}

export function SolidStorePath$2__Update_2B594(this$, value) {
    SolidStorePath$2__get_Setter(this$)(...append(SolidStorePath$2__get_Path(this$), [value]));
}

export function SolidStorePath$2__Update_Z1D9544EA(this$, updater) {
    SolidStorePath$2__get_Setter(this$)(...append(SolidStorePath$2__get_Path(this$), [updater]));
}

export function SolidStoreSetter$1__SolidStoreSetter$1_get_Path(this$) {
    return SolidStorePath$2_$ctor_Z56D2980F(this$, []);
}

export class SolidStorePathExtensions {
    constructor() {
    }
}

export function SolidStorePathExtensions_$reflection() {
    return class_type("SolidStorePathExtensions", void 0, SolidStorePathExtensions);
}

export class Solid {
    constructor() {
    }
}

export function Solid_$reflection() {
    return class_type("Solid", void 0, Solid);
}

export function Solid_renderDisposable_20D54555(f, el) {
    const disp = render(f, el);
    return {
        Dispose() {
            disp();
        },
    };
}

export function Solid_createRef() {
    return new FSharpRef(defaultOf());
}

