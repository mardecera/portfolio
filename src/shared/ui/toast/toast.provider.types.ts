import type { ToastContent, ToastItem } from "./Toast.types"

export type ToastContextValue = {
	toasts: ToastItem[]
	showToast: (toast: ToastContent) => string
	closeToast: (id: string) => void
	clearToasts: () => void
}

export type ToastProviderProps = {
	children: React.ReactNode
}
