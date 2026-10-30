import { forwardRef, useId } from "react"

import { cn } from "@shared/lib/common"
import type { InputProps } from "./Input.types"

/**
 * Campo de texto con etiqueta y mensaje de error.
 *
 * @param props.label - Texto de la etiqueta.
 * @param props.name - Nombre del campo en el formulario.
 * @param props.error - Mensaje de validación. Si falta, reserva el espacio.
 * @param props.inputClassName - Clases del input.
 * @param props.labelClassName - Clases de la etiqueta.
 * @param props.className - Clases del contenedor.
 * @param ref - Referencia al input nativo.
 */
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
		label,
		name,
		id,
		className,
		inputClassName,
		labelClassName,
		error,
		...inputProps
	} = props
	const autoId = useId()
	const inputId = id ?? autoId

	return (
		<div className={cn("field flex flex-col gap-0.5", className)}>
			<div className=" flex flex-col gap-3">
				{label ? (
					<label
						htmlFor={inputId}
						className={cn(
							"label text-[14px] leading-[120%] font-semibold uppercase",
							labelClassName,
						)}
					>
						{label}
					</label>
				) : null}
				<input
					ref={ref}
					id={inputId}
					name={name}
					className={cn(
						"bg-neutral-50 rounded-xl py-4 px-5 text-[14px] focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 placeholder:text-gray-400 placeholder:font-light disabled:cursor-not-allowed disabled:opacity-50 border border-gray-200 w-full",
						inputClassName,
					)}
					{...inputProps}
				/>
			</div>

			<p className="error text-red-400 text-[12px]">
				{!error && <span className="opacity-0">.</span>}
				{error && <span>{error}</span>}
			</p>
		</div>
	)
})

Input.displayName = "Input"

export default Input
