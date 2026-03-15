import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import type { QueryClientProviderProps } from "./queryClient.provider.types"

export const queryClient = new QueryClient()

export function ReactQueryProvider(props: QueryClientProviderProps) {
	const { children } = props

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
