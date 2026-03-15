import type { Variant } from "./Button.types"

export const BUTTON_CLASSES = {
	DISABLED: "disabled:cursor-not-allowed disabled:opacity-50",
	FOCUS: "focus:outline-none focus:ring-4",
	TEXT: "text-[14px] font-medium",
}

export const getVariant = (variant: Variant) => {
	return {
		primary: "bg-(--primary-color-500) text-white!",
		secondary: "btn-secondary",
	}[variant]
}

export const getHasIcon = (icon: React.ReactNode | undefined) => {
	return !!icon
}
