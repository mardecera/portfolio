import Providers from "@/providers/providers"
import ContactForm from "./ContactForm"
import type { ContactFormProps } from "./ContactForm.types"

const ContactFormIsland = (props: ContactFormProps) => {
	return (
		<Providers>
			<ContactForm {...props} />
		</Providers>
	)
}

export default ContactFormIsland
