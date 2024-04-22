import { For, createSignal, Show } from 'solid-js'
import { Track } from '../lib/base'

interface MenuItem {
	track: Track
	label: string
}

interface Menu {
	label: string
	items: MenuItem[]
	submenus: Menu[]
	showLabel: boolean
	isOpen: () => boolean
	toggleOpen: () => void
}

function addTrackToMenu(menu: Menu, track: Track, paths: string[]) {
	const [current, ...rest] = paths
	if (rest.length === 0) {
		menu.items.push({ track, label: current })
	} else {
		let submenu = menu.submenus.find((m) => m.label === current)
		if (!submenu) {
			const [isOpen, setIsOpen] = createSignal(true)
			submenu = {
				label: current,
				items: [],
				submenus: [],
				showLabel: true,
				isOpen,
				toggleOpen: () => setIsOpen(!isOpen()),
			}
			menu.submenus.push(submenu)
		}
		addTrackToMenu(submenu, track, rest)
	}
}

function tracksToNavigation(tracks: Track[]): Menu {
	const root: Menu = {
		label: '',
		items: [],
		submenus: [],
		showLabel: false,
		isOpen: () => true,
		toggleOpen: () => {},
	}
	for (const track of tracks) {
		const parts = track.text.split('/').map((p) => p.trim())
		addTrackToMenu(root, track, parts)
	}
	return root
}

interface MenuProps {
	menu: Menu
	onSelect: (track: Track) => void
	class?: string
}

function RenderMenu(props: MenuProps) {
	return (
		<nav class={props.class}>
			<Show when={props.menu.showLabel}>
				<button onClick={() => props.menu.toggleOpen()} class="font-semibold">
					{props.menu.label}{' '}
					<span class="inline-block px-2 font-light">
						{props.menu.isOpen() ? 'v' : '>'}
					</span>
				</button>
			</Show>
			<Show when={props.menu.isOpen()}>
				<Show when={props.menu.submenus.length > 0}>
					<ul class="mb-3 pl-3">
						<For each={props.menu.submenus}>
							{(submenu) => (
								<li>
									<RenderMenu menu={submenu} onSelect={props.onSelect} />
								</li>
							)}
						</For>
					</ul>
				</Show>
				<ul class="mb-3 pl-3">
					<For each={props.menu.items}>
						{(item) => (
							<li>
								<button
									class="block font-bold text-blue-500 underline"
									type="button"
									onClick={() => {
										props.onSelect(item.track)
									}}
								>
									{item.label}
								</button>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</nav>
	)
}

interface TrackMenuProps {
	tracks: Track[]
	onSelect: (track: Track) => void
}

export function TrackMenu(props: TrackMenuProps) {
	const menu = () => tracksToNavigation(props.tracks)

	return <RenderMenu menu={menu()} onSelect={props.onSelect} class="py-6" />
}
