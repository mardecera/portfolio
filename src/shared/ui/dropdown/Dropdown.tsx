import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"

import DownIcon from "@icons/down.svg?react"
import { cn } from "@shared/lib/common"
import { type DropdownPosition, getDropdownPosition } from "./Dropdown.helpers"
import type { DropdownProps } from "./Dropdown.types"

/**
 * Menú desplegable que se posiciona respecto a su botón.
 *
 * @param props.value - Valor de la opción seleccionada.
 * @param props.options - Opciones con valor, etiqueta y enlace.
 * @param props.onSelect - Se llama al elegir una opción.
 * @param props.className - Clases del contenedor.
 */
const Dropdown = (props: DropdownProps) => {
	const { value, options, className, onSelect } = props
	const dropdownId = useId()
	const triggerRef = useRef<HTMLButtonElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const [position, setPosition] = useState<DropdownPosition>({
		top: 0,
		left: 0,
		width: 0,
		placement: "bottom",
	})

	const selectedOption = options.find((option) => option.value === value)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (!isOpen) {
			return
		}

		/**
		 * Recalcula la posición del menú respecto al botón.
		 */
		const updatePosition = () => {
			const triggerElement = triggerRef.current
			const contentElement = contentRef.current

			if (!triggerElement) {
				return
			}

			if (!contentElement) {
				const triggerRect = triggerElement.getBoundingClientRect()
				setPosition((currentPosition) => ({
					...currentPosition,
					top: triggerRect.bottom + 8,
					left: triggerRect.left,
					width: triggerRect.width,
				}))
				return
			}

			setPosition(
				getDropdownPosition({
					triggerRect: triggerElement.getBoundingClientRect(),
					contentRect: contentElement.getBoundingClientRect(),
				}),
			)
		}

		updatePosition()

		/**
		 * Cierra el menú si el clic ocurre fuera de él.
		 *
		 * @param event - Evento de ratón del documento.
		 */
		const handlePointerDown = (event: MouseEvent) => {
			const target = event.target as Node

			if (
				triggerRef.current?.contains(target) ||
				contentRef.current?.contains(target)
			) {
				return
			}

			setIsOpen(false)
		}

		/**
		 * Cierra el menú al pulsar Escape.
		 *
		 * @param event - Evento de teclado del documento.
		 */
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false)
			}
		}

		window.addEventListener("resize", updatePosition)
		window.addEventListener("scroll", updatePosition, true)
		document.addEventListener("mousedown", handlePointerDown)
		document.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("resize", updatePosition)
			window.removeEventListener("scroll", updatePosition, true)
			document.removeEventListener("mousedown", handlePointerDown)
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [isOpen])

	return (
		<div className={cn("dropdown w-fit", className)}>
			<button
				ref={triggerRef}
				className="dropdown-trigger bg-white rounded-full! border! border-(--gray-color-300)! hover:border-(--primary-color-500)! px-4! gap-2! hover:text-(--primary-color-500)! flex h-11 items-center justify-center text-[14px] font-medium cursor-pointer"
				type="button"
				aria-expanded={isOpen}
				aria-haspopup="menu"
				aria-controls={dropdownId}
				onClick={() => setIsOpen((open) => !open)}
			>
				<span>{selectedOption?.label || "Select an option"}</span>
				<DownIcon className={cn("w-5 h-5", isOpen && "rotate-180")} />
			</button>
			{isMounted &&
				isOpen &&
				createPortal(
					<div
						ref={contentRef}
						id={dropdownId}
						role="menu"
						className="dropdown-content bg-white rounded-2xl overflow-hidden shadow-lg border border-(--gray-color-300)!"
						style={{
							position: "fixed",
							top: position.top,
							left: position.left,
							minWidth: position.width,
							zIndex: 1000,
							transformOrigin:
								position.placement === "top" ? "bottom center" : "top center",
						}}
					>
						{options.map((option) => (
							<button
								key={option.value}
								type="button"
								role="menuitem"
								onClick={() => {
									onSelect?.(option)
									setIsOpen(false)
								}}
								className={cn(
									"w-full! dropdown-item py-2 px-6 cursor-pointer  rounded-none! text-left! justify-start! not-last:border-b! border-(--gray-color-100)! hover:text-(--primary-color-500)!",
									option.value === value &&
										"bg-(--gray-color-50) text-(--primary-color-500)!",
								)}
							>
								{option.label}
							</button>
						))}
					</div>,
					document.body,
				)}
		</div>
	)
}

export default Dropdown
