import SpinnerIcon from "@/assets/svg/spinner.svg?react"
import { cn } from "@/utils/common.utils"
import { BUTTON_CLASSES, getHasIcon, getVariant } from "./Button.helpers"
import type { ButtonProps } from "./Button.types"

const { DISABLED, TEXT } = BUTTON_CLASSES

const Button = (props: ButtonProps) => {
	const { icon, variant, isLoading, isDisabled, type, ...rest } = props
	const { children, className, iconPosition = "left", ...restOne } = rest

	const hasIcon = getHasIcon(icon)
	const VARIANT = getVariant(variant ?? "primary")

	return (
		<button
			className={cn(
				"flex flex-row items-center justify-center gap-2 px-6 rounded-full py-2.5 cursor-pointer min-h-11 w-fit",
				TEXT,
				DISABLED,
				VARIANT,
				className,
			)}
			disabled={isDisabled}
			type={type ?? "button"}
			{...restOne}
		>
			{isLoading ? <SpinnerIcon /> : null}
			{hasIcon && !isLoading && iconPosition === "left" ? icon : null}
			{children}
			{hasIcon && !isLoading && iconPosition === "right" ? icon : null}
		</button>
	)
}

export default Button
