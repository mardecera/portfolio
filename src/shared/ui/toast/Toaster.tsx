import { cn } from "@shared/lib/common"
import Toast from "./Toast"
import { useToast } from "./toast.provider"

/**
 * Pila de avisos activos. No renderiza nada si no hay avisos.
 */
const Toaster = () => {
	const { toasts, closeToast } = useToast()

	if (toasts.length === 0) return null

	return (
		<div
			className={cn(
				"pointer-events-none fixed right-4 top-4 z-9999 flex w-[min(420px,calc(100vw-2rem))] flex-col gap-3",
			)}
		>
			{toasts.map((toast) => {
				/**
				 * Cierra el aviso y ejecuta su callback, si tiene uno.
				 */
				const handleClose = () => {
					toast.onClose?.()
					closeToast(toast.id)
				}

				return (
					<Toast
						key={toast.id}
						header={toast.header}
						body={toast.body}
						footer={toast.footer}
						icon={toast.icon}
						onClose={handleClose}
						autoClose={toast.autoClose}
					/>
				)
			})}
		</div>
	)
}

export default Toaster
