import { ReactQueryProvider } from "./QueryClient/queryClient.provider"
import { ToastProvider } from "./Toast/toast.provider"

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReactQueryProvider>
			<ToastProvider>{children}</ToastProvider>
		</ReactQueryProvider>
	)
}

export default Providers
