module App

open Fable.Core

[<JSX.Component>]
let App () =
  JSX.html
    $"""
    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
    """
