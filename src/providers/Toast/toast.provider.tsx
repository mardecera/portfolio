import { createContext, useCallback } from "react"
import { useContext, useMemo, useState } from "react"

import type { ToastContent } from "@/components/react/Toaster/Toast.types"
import type { ToastItem } from "@/components/react/Toaster/Toast.types"
import Toaster from "@/components/react/Toaster/Toaster"
import type { ToastContextValue } from "./toast.provider.types"
import type { ToastProviderProps } from "./toast.provider.types"

const ToastContext = createContext<ToastContextValue | null>(null)

const createToastId = () => {
	if (typeof globalThis !== "undefined" && "crypto" in globalThis) {
		const cryptoObj = globalThis.crypto as Crypto
		if ("randomUUID" in cryptoObj) {
			return cryptoObj.randomUUID()
		}
	}

	return `toast_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastItem[]>([])

	const closeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id))
	}, [])

	const showToast = useCallback((toast: ToastContent) => {
		const id = createToastId()
		setToasts((prev) => [...prev, { ...toast, id }])
		return id
	}, [])

	const clearToasts = useCallback(() => {
		setToasts([])
	}, [])

	const value = useMemo(
		() => ({
			toasts,
			showToast,
			closeToast,
			clearToasts,
		}),
		[toasts, showToast, closeToast, clearToasts],
	)

	return (
		<ToastContext.Provider value={value}>
			{children}
			<Toaster />
		</ToastContext.Provider>
	)
}

export const useToast = () => {
	const context = useContext(ToastContext)

	if (!context) {
		throw new Error("useToast must be used within ToastProvider")
	}

	return context
}
