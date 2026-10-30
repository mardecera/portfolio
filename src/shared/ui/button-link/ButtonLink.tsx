import SpinnerIcon from "@icons/spinner.svg?react"
import { cn } from "@shared/lib/common"
import { buttonStyles } from "@shared/ui/button"
import type { ButtonLinkProps } from "./ButtonLink.types"

/**
 * Enlace con la misma apariencia que el botón.
 *
 * @param props.href - Destino del enlace.
 * @param props.variant - Variante visual. Por defecto, primary.
 * @param props.size - Tamaño del enlace. Por defecto, md.
 * @param props.icon - Icono junto al texto.
 * @param props.iconPosition - Lado del icono: `left` o `right`.
 * @param props.isLoading - Muestra el spinner y deshabilita el enlace.
 * @param props.isDisabled - Deshabilita el enlace.
 * @param props.children - Contenido del enlace.
 * @param props.className - Clases extra.
 */
const ButtonLink = (props: ButtonLinkProps) => {
	const {
		href,
		variant,
		size,
		icon,
		iconPosition = "left",
		isLoading,
		isDisabled,
		className,
		children,
		...anchorProps
	} = props

	const disabled = isDisabled || isLoading
	const attributes = href?.startsWith("http")
		? { target: "_blank", rel: "noopener noreferrer", href }
		: { href }

	return (
		<a
			className={cn(buttonStyles({ variant, size, disabled }), className)}
			aria-busy={isLoading}
			{...anchorProps}
			{...attributes}
		>
			{isLoading && <SpinnerIcon className="size-5 animate-spin" />}
			{!isLoading && icon && iconPosition === "left" && icon}
			{children}
			{!isLoading && icon && iconPosition === "right" && icon}
		</a>
	)
}

export default ButtonLink
