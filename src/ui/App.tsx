import { Show, createEffect, createSignal } from 'solid-js'
import { Track } from '../lib/base.js'
import trackData from '../tracks/tracks.jsx'
import Container from './Container.jsx'
import { TrackPlayer } from './Player.jsx'
import { TrackMenu } from './TrackMenu.jsx'

function setTrack(track: Track) {
	window.history.replaceState({}, '', `?${paramName}=${track.text}`)
}

const paramName = 'track'

const [tracks, setTracks] = createSignal(trackData)

export function App() {
	const [trackIdx, setTrackIdx] = createSignal(-1)

	function setTrackFromQuery() {
		const query = new URLSearchParams(window.location.search)
		if (query.has(paramName)) {
			const trackName = query.get(paramName)
			const trackIndex = tracks().findIndex((t) => t.text === trackName)
			if (trackIndex !== -1) {
				setTrackIdx(trackIndex)
			}
		}
	}

	createEffect(() => {
		setTrackFromQuery()
		if (trackIdx() === -1) {
			setTrack(tracks()[0])
			setTrackFromQuery()
		}
	})

	return (
		<Container
			sidebar={
				<TrackMenu
					tracks={tracks()}
					onSelect={(track) => {
						setTrack(track)
						setTrackFromQuery()
					}}
				/>
			}
		>
			<Show when={trackIdx() !== -1}>
				<TrackPlayer track={tracks()[trackIdx()]} />
			</Show>
		</Container>
	)
}

if (import.meta.hot) {
	import.meta.hot.accept('./tracks', (newTracks) => {
		if (newTracks) {
			setTracks(newTracks.tracks)
		}
	})
}
