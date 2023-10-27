import './index.css'
import { render } from 'solid-js/web'
import { App } from './App.jsx'
import { tracks } from './tracks'

render(() => <App tracks={tracks} />, document.getElementById('root')!)

if (import.meta.hot) {
	import.meta.hot.accept()
}
