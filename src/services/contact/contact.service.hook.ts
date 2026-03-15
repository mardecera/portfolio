import { useMutation } from "@tanstack/react-query"
import { sendEmail } from "./contact.service"

export const useSendEmail = () => {
	return useMutation({
		mutationFn: sendEmail,
	})
}
