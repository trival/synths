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

			<main class="flex min-h-screen flex-col lg:py-6 lg:pl-72">
				<div class="flex-grow px-4 sm:px-6 lg:px-8">{props.children}</div>
				<footer class="px-4 pb-4 pt-8 sm:px-6 lg:px-8 lg:pb-0">
					Sound synthesis experiments by{' '}
					<a class="text-blue-500" href="https://trival.xyz">
						trival.xyz
					</a>
					.{` `}
					<br class="sm:hidden" />
					Source code on{' '}
					<a href="https://github.com/trival/synths" class="text-blue-500">
						github{' '}
						<svg
							class="inline-block h-6 w-6 fill-current align-bottom"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
						>
							<title>github</title>
							<path d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z" />
						</svg>
					</a>
				</footer>
			</main>
		</div>
	)
}
