import { useMutation } from "@tanstack/react-query"
import { sendEmail } from "./contact.service"

/**
 * Mutación para enviar el formulario de contacto.
 */
export const useSendEmail = () => {
	return useMutation({
		mutationFn: sendEmail,
	})
}
