import { cva } from "class-variance-authority"

export const tagStyles = cva("", {
	variants: {
		variant: {
			// dark: "text-primary-500 bg-primary-50/50",
			dark: "text-gray-500 bg-gray-100/50 outline-gray-200",
			light: "outline-white/10 text-white/70",
		},
	},
	defaultVariants: {
		variant: "dark",
	},
})
