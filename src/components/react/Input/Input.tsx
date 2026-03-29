import { forwardRef, useId } from "react"

import { cn } from "@/utils/common.utils"
import type { InputProps } from "./Input.types"

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { label, name, id, className, inputClassName, ...rest } = props
	const { labelClassName, error, ...restTwo } = rest
	const autoId = useId()
	const inputId = id ?? autoId

	return (
		<div className={cn("input-wrapper flex flex-col gap-0.5", className)}>
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
						"bg-shark-50 rounded-xl py-4 px-5 text-[14px] focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 placeholder:text-gray-400 placeholder:font-light disabled:cursor-not-allowed disabled:opacity-50 border border-gray-200 w-full",
						inputClassName,
					)}
					{...restTwo}
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
