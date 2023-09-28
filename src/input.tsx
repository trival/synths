import clsx from 'clsx'
import { For, createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'

export enum InputType {
	SLIDER,
	TOGGLE,
}

export interface SliderDeclaration {
	type: InputType.SLIDER
	label: string
	min: number
	max: number
	step: number
	initialValue: number
}

export interface ToggleDeclaration {
	type: InputType.TOGGLE
	label: string
	initialValue: 0 | 1
}

export type InputDeclaration = SliderDeclaration | ToggleDeclaration

export interface SliderProps {
	class?: string
	label: string
	min: number
	max: number
	step: number
	value: number
	onChange: (val: number) => void
}
export function Slider(props: SliderProps) {
	return (
		<label
			class={clsx('flex items-center font-medium text-gray-800', props.class)}
		>
			<span class="mr-4">{props.label}</span>
			<input
				class="w-[400px]"
				type="range"
				min={props.min}
				max={props.max}
				step={props.step}
				value={props.value}
				onInput={(e) => props.onChange(Number(e.target.value))}
			/>
		</label>
	)
}

export interface ToggleProps {
	class?: string
	label: string
	value: 0 | 1
	onChange: (val: 0 | 1) => void
}
export function Toggle(props: ToggleProps) {
	return (
		<label
			class={clsx('flex items-center font-medium text-gray-800', props.class)}
		>
			<span class="mr-4">{props.label}</span>
			<button
				type="button"
				class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
				role="switch"
				aria-checked="false"
				onClick={() => props.onChange(props.value ? 0 : 1)}
			>
				<span
					aria-hidden="true"
					class="pointer-events-none absolute h-full w-full rounded-md bg-white"
				/>
				<span
					aria-hidden="true"
					class={clsx(
						'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
						props.value ? 'bg-indigo-600' : 'bg-gray-200',
					)}
				/>
				<span
					aria-hidden="true"
					class={clsx(
						'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
						props.value ? 'translate-x-5' : 'translate-x-0',
					)}
				/>
			</button>
		</label>
	)
}

interface InputsProps {
	inputs: InputDeclaration[]
	onChange: (values: number[]) => void
	class?: string
}

export function Inputs(props: InputsProps) {
	// eslint-disable-next-line solid/reactivity
	let [store, setStore] = createStore(props.inputs.map((i) => i.initialValue))

	const update = (i: number, val: number) => {
		let newVals = [...store]
		newVals[i] = val
		props.onChange(newVals)
		setStore(newVals)
	}

	createEffect(() => {
		setStore(props.inputs.map((i) => i.initialValue))
	})

	return (
		<div>
			<For each={props.inputs}>
				{(input, i) => {
					switch (input.type) {
						case InputType.SLIDER:
							return (
								<Slider
									class="m-4"
									label={input.label}
									max={input.max}
									min={input.min}
									step={input.step}
									value={store[i()]}
									onChange={(val) => update(i(), val)}
								/>
							)

						case InputType.TOGGLE:
							return (
								<Toggle
									class="m-4"
									label={input.label}
									value={store[i()] as 1 | 0}
									onChange={(val) => update(i(), val)}
								/>
							)
					}
				}}
			</For>
		</div>
	)
}
