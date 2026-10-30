import { ToastProvider } from "@shared/ui/toast"
import { ReactQueryProvider } from "./QueryClient/queryClient.provider"

/**
 * Envuelve una isla de React con datos y avisos.
 *
 * @param props.children - Árbol de la isla.
 */
const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReactQueryProvider>
			<ToastProvider>{children}</ToastProvider>
		</ReactQueryProvider>
	)
}

export default Providers
