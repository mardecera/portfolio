import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import type { QueryClientProviderProps } from "./queryClient.provider.types"

export const queryClient = new QueryClient()

/**
 * Provee el cliente de React Query a una isla.
 *
 * @param props.children - Árbol que puede consultar o mutar datos.
 */
export function ReactQueryProvider(props: QueryClientProviderProps) {
	const { children } = props

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
