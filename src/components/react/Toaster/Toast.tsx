import { cn } from "@/utils/common.utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { ToastProps } from "./Toast.types"

const DEFAULT_AUTO_CLOSE_MS = 4000
const EXIT_ANIMATION_MS = 240

const Toast = (props: ToastProps) => {
	const { header, body, footer, icon, onClose, autoClose = true } = props
	const [isClosing, setIsClosing] = useState(false)
	const closeTimeoutRef = useRef<number | null>(null)
	const autoCloseTimeoutRef = useRef<number | null>(null)
	const remainingMsRef = useRef<number | null>(null)
	const startedAtRef = useRef<number | null>(null)

	const autoCloseMs = useMemo(() => {
		if (autoClose === true) return DEFAULT_AUTO_CLOSE_MS
		if (typeof autoClose === "number") return autoClose
		return null
	}, [autoClose])

	const clearAutoCloseTimeout = useCallback(() => {
		if (autoCloseTimeoutRef.current) {
			window.clearTimeout(autoCloseTimeoutRef.current)
			autoCloseTimeoutRef.current = null
		}
	}, [])

	const requestClose = useCallback(() => {
		if (isClosing) return
		setIsClosing(true)

		closeTimeoutRef.current = window.setTimeout(() => {
			onClose()
		}, EXIT_ANIMATION_MS)
	}, [isClosing, onClose])

	const startAutoClose = useCallback(() => {
		if (!autoCloseMs || isClosing) return

		const remainingMs = remainingMsRef.current ?? autoCloseMs
		remainingMsRef.current = remainingMs
		startedAtRef.current = Date.now()

		autoCloseTimeoutRef.current = window.setTimeout(() => {
			requestClose()
		}, remainingMs)
	}, [autoCloseMs, isClosing, requestClose])

	const pauseAutoClose = useCallback(() => {
		if (!autoCloseMs || isClosing || !startedAtRef.current) return

		const elapsed = Date.now() - startedAtRef.current
		const remaining = Math.max(
			0,
			(remainingMsRef.current ?? autoCloseMs) - elapsed,
		)
		remainingMsRef.current = remaining
		startedAtRef.current = null
		clearAutoCloseTimeout()
	}, [autoCloseMs, clearAutoCloseTimeout, isClosing])

	useEffect(() => {
		if (!autoCloseMs) return
		startAutoClose()

		return () => {
			clearAutoCloseTimeout()
		}
	}, [autoCloseMs, clearAutoCloseTimeout, startAutoClose])

	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current) {
				window.clearTimeout(closeTimeoutRef.current)
			}
			clearAutoCloseTimeout()
		}
	}, [clearAutoCloseTimeout])

	return (
		<div
			className={cn(
				"group toast pointer-events-auto  rounded-2xl border border-gray-800 bg-black  text-white shadow-lg",
				"transition-all duration-200 ease-out overflow-hidden",
				isClosing ? "toast-exit" : "toast-enter",
			)}
			onMouseEnter={pauseAutoClose}
			onMouseLeave={startAutoClose}
		>
			<div className="flex w-full gap-3 p-4">
				{icon ? icon : null}
				<div className="flex min-w-0 flex-1 flex-col gap-2">
					{header ? (
						<div className="text-sm font-semibold tracking-wide">{header}</div>
					) : null}
					{body ? <div className="text-sm text-gray-200">{body}</div> : null}
					{footer ? (
						<div className="pt-1 text-xs text-gray-400">{footer}</div>
					) : null}
				</div>
				<button
					className="inline-flex items-center h-fit justify-center rounded-full text-gray-300 transition cursor-pointer"
					onClick={requestClose}
					aria-label="Cerrar"
					type="button"
				>
					<span className="text-base leading-none">×</span>
				</button>
			</div>
			{autoCloseMs ? (
				<div
					className="time h-px w-full bg-white opacity-25"
					style={{ animationDuration: `${autoCloseMs}ms` }}
				/>
			) : null}
		</div>
	)
}

export default Toast
