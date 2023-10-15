import clsx from 'clsx'
import { For, createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'

export enum InputType {
	SLIDER,
	TOGGLE,
	SELECT,
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

export interface SelectDeclaration {
	type: InputType.SELECT
	label: string
	options: readonly string[]
	initialValue: number
}

export type InputDeclaration =
	| SliderDeclaration
	| ToggleDeclaration
	| SelectDeclaration

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
			class={clsx('block items-center font-medium text-gray-800', props.class)}
		>
			<span class="mb-1 block">{props.label}</span>
			<div class="flex items-start">
				<div class="w-[500px]">
					<input
						class="w-full"
						type="range"
						min={props.min}
						max={props.max}
						step={props.step}
						value={props.value}
						onInput={(e) => props.onChange(Number(e.target.value))}
					/>
					<div class="-mt-2 flex w-full text-xs text-slate-500">
						<span class="w-1/2 text-left">{props.min}</span>
						<span class="w-1/2 text-right">{props.max}</span>
					</div>
				</div>
				<input
					class="mx-4 w-[60px]"
					type="number"
					min={props.min}
					max={props.max}
					step={props.step}
					value={props.value}
					onInput={(e) => props.onChange(Number(e.target.value))}
				/>
			</div>
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
				class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
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
						props.value ? 'bg-blue-600' : 'bg-gray-400',
					)}
				/>
				<span
					aria-hidden="true"
					class={clsx(
						'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-400 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
						props.value ? 'translate-x-5' : 'translate-x-0',
					)}
				/>
			</button>
		</label>
	)
}

interface SelectProps {
	class?: string
	label: string
	options: readonly string[]
	value: number
	onChange: (val: number) => void
}

export function Select(props: SelectProps) {
	return (
		<label
			class={clsx(
				'block bg-white text-sm font-medium leading-6 text-gray-900',
				props.class,
			)}
		>
			<span class="block">{props.label}</span>
			<select
				name="location"
				class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
				onChange={(e) => props.onChange(Number(e.target.value))}
				value={props.value}
			>
				<For each={props.options}>
					{(option, i) => <option value={i()}>{option}</option>}
				</For>
			</select>
		</label>
	)
}

interface InputsProps {
	inputs: InputDeclaration[]
	values: number[]
	onChange: (values: number[]) => void
	class?: string
}

export function Inputs(props: InputsProps) {
	// eslint-disable-next-line solid/reactivity
	let [store, setStore] = createStore(props.values)
	createEffect(() => {
		setStore(props.values)
	})

	const update = (i: number, val: number) => {
		let newVals = [...store]
		newVals[i] = val
		props.onChange(newVals)
		setStore(newVals)
	}

	return (
		<div>
			<For each={props.inputs}>
				{(input, i) => {
					switch (input.type) {
						case InputType.SLIDER:
							return (
								<Slider
									class="my-4"
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
									class="my-4"
									label={input.label}
									value={store[i()] as 1 | 0}
									onChange={(val) => update(i(), val)}
								/>
							)

						case InputType.SELECT:
							return (
								<Select
									class="my-4"
									label={input.label}
									options={input.options}
									value={store[i()]}
									onChange={(val) => update(i(), val)}
								/>
							)
					}
				}}
			</For>
		</div>
	)
}
