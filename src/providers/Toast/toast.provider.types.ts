import type { ToastContent } from "@/components/react/Toaster/Toast.types"
import type { ToastItem } from "@/components/react/Toaster/Toast.types"

export type ToastContextValue = {
	toasts: ToastItem[]
	showToast: (toast: ToastContent) => string
	closeToast: (id: string) => void
	clearToasts: () => void
}

export type ToastProviderProps = {
	children: React.ReactNode
}
