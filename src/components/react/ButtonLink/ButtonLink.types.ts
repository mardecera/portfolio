export type VariantButton = "primary" | "secondary" | "outline"
export type SizeButton = "sm" | "md" | "lg"

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: VariantButton
	size?: SizeButton
	icon?: React.ReactNode
	iconPosition?: "left" | "right"
	isLoading?: boolean
	isDisabled?: boolean
}
