import SpinnerIcon from "@icons/spinner.svg?react"
import { cn } from "@shared/lib/common"
import { buttonStyles } from "./Button.styles"
import type { ButtonProps } from "./Button.types"

/**
 * Botón de acción con variante, tamaño e icono opcional.
 *
 * @param props.variant - Variante visual. Por defecto, primary.
 * @param props.size - Tamaño del botón. Por defecto, md.
 * @param props.icon - Icono junto al texto.
 * @param props.iconPosition - Lado del icono: `left` o `right`.
 * @param props.isLoading - Muestra el spinner y deshabilita el botón.
 * @param props.isDisabled - Deshabilita el botón.
 * @param props.children - Contenido del botón.
 * @param props.className - Clases extra.
 */
const Button = (props: ButtonProps) => {
	const {
		type = "button",
		variant,
		size,
		icon,
		iconPosition = "left",
		isLoading,
		isDisabled,
		className,
		children,
		...buttonProps
	} = props

	const disabled = isDisabled || isLoading

	return (
		<button
			type={type}
			disabled={disabled}
			className={cn(buttonStyles({ variant, size, disabled }), className)}
			aria-busy={isLoading}
			{...buttonProps}
		>
			{isLoading && <SpinnerIcon className="w-4 h-4 animate-spin" />}
			{!isLoading && icon && iconPosition === "left" && icon}
			{children}
			{!isLoading && icon && iconPosition === "right" && icon}
		</button>
	)
}

export default Button
