export type VariantButton = "primary" | "secondary" | "outline"
export type SizeButton = "sm" | "md" | "lg"

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
	variant?: VariantButton
	size?: SizeButton
	icon?: React.ReactNode
	iconPosition?: "left" | "right"
	isLoading?: boolean
	isDisabled?: boolean
}
