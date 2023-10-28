import { For, Show, createEffect, createSignal } from 'solid-js'
import { Track } from './utils/base'
import { TrackPlayer } from './Player'
import { tracks as trackData } from './tracks'

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
		<div class="flex h-full w-full">
			<div class="m-8 mr-16 h-full overflow-y-auto">
				<For each={tracks()}>
					{(track) => (
						<div class="mb-4">
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
						</div>
					)}
				</For>
			</div>
			<div class="auto m-8 h-full overflow-y-auto">
				<Show when={trackIdx() !== -1}>
					<TrackPlayer track={tracks()[trackIdx()]} />
				</Show>
			</div>
		</div>
	)
}

if (import.meta.hot) {
	import.meta.hot.accept('./tracks', (newTracks) => {
		if (newTracks) {
			setTracks(newTracks.tracks)
		}
	})
}
