import type { AstroComponentFactory } from "astro/runtime/server/index.js"

export type ButtonProps = {
	type?: "primary" | "secondary"
	variant?: "solid" | "outline" | "dashed" | "filled" | "text" | "link"
	href?: string
	icon?: AstroComponentFactory
	download?: string
	className?: string
	disabled?: boolean
	htmlType?: "button" | "submit" | "reset"
}
