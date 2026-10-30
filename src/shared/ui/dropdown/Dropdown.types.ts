type Option = {
	value: string
	label: string
	href: string
}

export type DropdownProps = {
	value?: string
	options: Option[]
	className?: string
	onSelect?: (option: Option) => void
}
