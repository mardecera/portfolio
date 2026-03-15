import { Head, Html } from "@react-email/components"
import { Body, Container } from "@react-email/components"
import { Heading, Text } from "@react-email/components"
import type { ContactEmailProps } from "./Contact.email.types"

const ContactEmailTemplate = (props: ContactEmailProps) => {
	const { name, email, message } = props

	return (
		<Html>
			<Head />
			<Body style={{ fontFamily: "Arial" }}>
				<Container>
					<Heading>Nuevo mensaje desde tu portfolio</Heading>
					<Text>
						<strong>Nombre:</strong> {name}
					</Text>
					<Text>
						<strong>Email:</strong> {email}
					</Text>
					<Text>
						<strong>Mensaje:</strong> {message}
					</Text>
				</Container>
			</Body>
		</Html>
	)
}

export default ContactEmailTemplate
