export type Variant = "primary" | "secondary"

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
	variant?: Variant
	icon?: React.ReactNode
	iconPosition?: "left" | "right"
	isLoading?: boolean
	isDisabled?: boolean
}
