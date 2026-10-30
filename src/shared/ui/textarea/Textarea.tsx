import { forwardRef, useId } from "react"

import { cn } from "@shared/lib/common"
import type { TextareaProps } from "./Textarea.types"

/**
 * Área de texto con etiqueta y mensaje de error.
 *
 * @param props.label - Texto de la etiqueta.
 * @param props.name - Nombre del campo en el formulario.
 * @param props.error - Mensaje de validación. Si falta, reserva el espacio.
 * @param props.textareaClassName - Clases del textarea.
 * @param props.labelClassName - Clases de la etiqueta.
 * @param props.className - Clases del contenedor.
 * @param ref - Referencia al textarea nativo.
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(props, ref) => {
		const {
			label,
			name,
			id,
			className,
			textareaClassName,
			labelClassName,
			error,
			...textareaProps
		} = props
		const autoId = useId()
		const inputId = id ?? autoId

		return (
			<div className={cn("field flex flex-col gap-0.5", className)}>
				<div className="flex flex-col gap-3">
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
					<textarea
						ref={ref}
						id={inputId}
						name={name}
						className={cn(
							"bg-neutral-50 rounded-2xl py-5 px-5 text-[14px] focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 placeholder:text-gray-400 placeholder:font-light disabled:cursor-not-allowed disabled:opacity-50 border border-gray-200 w-full",
							textareaClassName,
						)}
						{...textareaProps}
					/>
				</div>

				<p className="error text-red-400 text-[12px]">
					{!error && <span className="opacity-0">.</span>}
					{error && <span>{error}</span>}
				</p>
			</div>
		)
	},
)

Textarea.displayName = "Input"

export default Textarea
