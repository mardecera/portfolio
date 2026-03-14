import { ReactQueryProvider } from "@/providers/QueryClient/queryClient.provider"
import ContactForm from "./ContactForm"
import type { ContactFormProps } from "./ContactForm.types"

const ContactFormWithProvider = (props: ContactFormProps) => {
	return (
		<ReactQueryProvider>
			<ContactForm {...props} />
		</ReactQueryProvider>
	)
}

ContactFormWithProvider.displayName = "ContactFormWithProvider"

export default ContactFormWithProvider
