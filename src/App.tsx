import { For, Show, createEffect, createSignal } from 'solid-js'
import { Track } from './utils/base'
import { TrackPlayer } from './Player'
import { tracks as trackData } from './tracks/basic'
import Container from './Container'

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
				<ul class="py-6">
					<For each={tracks()}>
						{(track) => (
							<li class="mb-4">
								<button
									class="block font-bold text-blue-500 underline"
									type="button"
									onClick={() => {
										setTrack(track)
										setTrackFromQuery()
									}}
								>
									{track.text}
								</button>
							</li>
						)}
					</For>
				</ul>
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
