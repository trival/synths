module App

open Fable.Core
open Fable.Core.JsInterop

// import {el} from '@elemaudio/core';
// import WebRenderer from '@elemaudio/web-renderer';

// const ctx = new AudioContext();
// const core = new WebRenderer();

// core.on('load', function() {
//   core.render(el.cycle(440), el.cycle(441));
// });

// (async function main() {
//   let node = await core.initialize(ctx, {
//     numberOfInputs: 0,
//     numberOfOutputs: 1,
//     outputChannelCount: [2],
//   });

//   node.connect(ctx.destination);
// })();

// ====

// [<Import("hello", "./hello.js")>]
// let hello : unit -> unit = jsNative

// hello()

let ctx = createEmpty ()
emitJsStatement () "ctx = new AudioContext()"

[<Import("el", "@elemaudio/core")>]
let el: Elemaudio.Core.Stdlib = jsNative

[<Import("default", "@elemaudio/web-renderer")>]
let WebRenderer: Elemaudio.WebRenderer.WebAudioRendererStatic = jsNative

let core = WebRenderer.Create()

[<JSX.Component>]
let App () =
  core.on ("load", (fun _ -> ())) |> ignore

  let render () =
    core.render ResizeArray.create (el.cycle (440)) (el.cycle (441)) |> ignore

  JSX.html
    $"""
    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
    """
