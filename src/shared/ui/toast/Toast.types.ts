import type React from "react"

export type ToastContent = {
	header?: React.ReactNode
	body?: React.ReactNode
	footer?: React.ReactNode
	icon?: React.ReactNode
	onClose?: () => void
	autoClose?: number | boolean
}

export type ToastItem = ToastContent & {
	id: string
}

export type ToastProps = ToastContent & {
	onClose: () => void
}
