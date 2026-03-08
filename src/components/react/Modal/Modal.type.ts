import type React from "react"

export type ModalProps = {
	open: boolean
	onClose: () => void
	children: React.ReactNode
	header?: React.ReactNode
	className?: string
	dialogClassName?: string
	offset?: boolean
}
