import { createSignal, Show } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { Transition } from 'solid-transition-group'

interface Props {
	sidebar: JSX.Element
	children: JSX.Element
}

export default function Container(props: Props) {
	const [sidebarOpen, setSidebarOpen] = createSignal(false)

	return (
		<div>
			<Show when={sidebarOpen()}>
				<div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
					{/* <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
					<Transition>
						<Show when={sidebarOpen()}>
							<div class="fixed inset-0 bg-gray-900/30" />
						</Show>
					</Transition>

					<Transition>
						<Show when={sidebarOpen()}>
							<div class="fixed inset-0 flex">
								{/* <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        	Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        	Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      --> */}
								<div class="relative mr-16 flex w-full max-w-xs flex-1">
									{/* <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
									<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
										<button
											type="button"
											class="-m-2.5 p-2.5"
											onClick={() => setSidebarOpen(false)}
										>
											<span class="sr-only">Close sidebar</span>
											<svg
												class="h-6 w-6 text-white"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>

									<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
										{props.sidebar}
									</div>
								</div>
							</div>
						</Show>
					</Transition>
				</div>
			</Show>

			{/* <!-- Static sidebar for desktop --> */}
			<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				<div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
					{props.sidebar}
				</div>
			</div>

			<div class="absolute flex items-center gap-x-6 px-4 py-4 sm:px-6 lg:hidden">
				<button
					type="button"
					class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
					onClick={() => setSidebarOpen(true)}
				>
					<span class="sr-only">Open sidebar</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>

			<main class="lg:py-6 lg:pl-72">
				<div class="px-4 sm:px-6 lg:px-8">{props.children}</div>
			</main>
		</div>
	)
}
