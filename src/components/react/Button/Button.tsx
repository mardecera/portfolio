import SpinnerIcon from "@/assets/svg/spinner.svg?react"
import { cn } from "@/utils/common.utils"
import { buttonStyles } from "./Button.styles"
import type { ButtonProps } from "./Button.types"

const Button = (props: ButtonProps) => {
	const { iconPosition = "left", type = "button", ...rest } = props
	const { variant, size, isLoading, isDisabled, ...restOne } = rest
	const { className, children, icon, ...restTwo } = restOne

	const disabled = isDisabled || isLoading

	return (
		<button
			type={type}
			disabled={disabled}
			className={cn(buttonStyles({ variant, size, disabled }), className)}
			aria-busy={isLoading}
			{...restTwo}
		>
			{isLoading && <SpinnerIcon className="w-4 h-4 animate-spin" />}
			{!isLoading && icon && iconPosition === "left" && icon}
			{children}
			{!isLoading && icon && iconPosition === "right" && icon}
		</button>
	)
}

export default Button
