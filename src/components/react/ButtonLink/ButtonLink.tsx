import SpinnerIcon from "@/assets/svg/spinner.svg?react"
import { cn } from "@/utils/common.utils"
import { buttonStyles } from "../Button/Button.styles"
import type { ButtonLinkProps } from "./ButtonLink.types"

const ButtonLink = (props: ButtonLinkProps) => {
	const { iconPosition = "left", type = "button", ...rest } = props
	const { variant, size, isLoading, isDisabled, ...restOne } = rest
	const { className, children, icon, href, ...restTwo } = restOne

	const disabled = isDisabled || isLoading
	const attributes = href?.startsWith("http")
		? { target: "_blank", rel: "noopener noreferrer", href }
		: { href }

	return (
		<a
			className={cn(buttonStyles({ variant, size, disabled }), className)}
			aria-busy={isLoading}
			{...restTwo}
			{...attributes}
		>
			{isLoading && <SpinnerIcon className="animate-spin" />}
			{!isLoading && icon && iconPosition === "left" && icon}
			{children}
			{!isLoading && icon && iconPosition === "right" && icon}
		</a>
	)
}

export default ButtonLink
