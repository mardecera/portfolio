import { createContext, useCallback } from "react"
import { useContext, useMemo, useState } from "react"

import type { ToastContent, ToastItem } from "./Toast.types"
import Toaster from "./Toaster"
import type { ToastContextValue } from "./toast.provider.types"
import type { ToastProviderProps } from "./toast.provider.types"

const ToastContext = createContext<ToastContextValue | null>(null)

/**
 * Genera un identificador único para un aviso.
 */
const createToastId = () => {
	if (typeof globalThis !== "undefined" && "crypto" in globalThis) {
		const cryptoObj = globalThis.crypto as Crypto
		if ("randomUUID" in cryptoObj) {
			return cryptoObj.randomUUID()
		}
	}

	return `toast_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

/**
 * Provee el estado de los avisos y monta la pila.
 *
 * @param props.children - Árbol que puede mostrar avisos.
 */
export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastItem[]>([])

	/**
	 * Quita un aviso de la pila.
	 *
	 * @param id - Identificador del aviso.
	 */
	const closeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id))
	}, [])

	/**
	 * Añade un aviso y devuelve su identificador.
	 *
	 * @param toast.header - Título del aviso.
	 * @param toast.body - Contenido principal.
	 * @param toast.footer - Contenido inferior.
	 * @param toast.icon - Icono del aviso.
	 * @param toast.onClose - Callback al cerrar.
	 * @param toast.autoClose - Milisegundos antes de cerrar, o `false`.
	 */
	const showToast = useCallback((toast: ToastContent) => {
		const id = createToastId()
		setToasts((prev) => [...prev, { ...toast, id }])
		return id
	}, [])

	/**
	 * Quita todos los avisos.
	 */
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

/**
 * Lee y actualiza los avisos. Debe usarse dentro de `ToastProvider`.
 */
export const useToast = () => {
	const context = useContext(ToastContext)

	if (!context) {
		throw new Error("useToast must be used within ToastProvider")
	}

	return context
}
