import { cn } from "@/utils/common.utils"
import { useEffect } from "react"
import type { ModalProps } from "./Modal.type"

const Modal = (props: ModalProps) => {
	const { open, onClose, header, children, className } = props
	const { offset = false, dialogClassName } = props

	useEffect(() => {
		if (!offset) {
			if (open) {
				document.body.style.overflow = "hidden"
			} else {
				document.body.style.overflow = ""
			}

			return () => {
				document.body.style.overflow = ""
			}
		}
	}, [open, offset])

	if (!open) return null

	return (
		<div
			className={cn(
				"modal fixed inset-0 flex justify-center items-center w-full h-full bg-modal z-9999 overflow-hidden",
				dialogClassName,
			)}
			onClick={onClose}
			onKeyUp={onClose}
		>
			<div
				className={cn(
					"modal-content bg-white overflow-y-auto max-h-fit",
					className,
				)}
				onClick={(e) => e.stopPropagation()}
				onKeyUp={(e) => e.stopPropagation()}
			>
				{/* HEADER */}
				{header ? header : null}
				{/* BODY */}
				{children}
			</div>
		</div>
	)
}

export default Modal
