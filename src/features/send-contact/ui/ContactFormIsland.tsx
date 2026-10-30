import Providers from "@app/providers"
import ContactForm from "./ContactForm"
import type { ContactFormProps } from "./ContactForm.types"

/**
 * Isla del formulario. Monta los providers que el layout de Astro no hereda.
 *
 * @param props.locale - Idioma que recibe el formulario.
 */
const ContactFormIsland = (props: ContactFormProps) => {
	return (
		<Providers>
			<ContactForm {...props} />
		</Providers>
	)
}

export default ContactFormIsland
