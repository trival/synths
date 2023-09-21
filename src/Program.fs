module Program

open Browser

Fable.Core.JsInterop.emitJsStatement () "import './index.css'"

Solid.render (App.App, document.getElementById ("root"))
