import { Head, Html } from "@react-email/components"
import { Body, Container } from "@react-email/components"
import { Heading, Text } from "@react-email/components"
import type { ContactEmailProps } from "./Contact.email.types"

const ContactEmailTemplate = (props: ContactEmailProps) => {
	const {
		name = "Jhon Cervantes",
		email = "mardecera.personal@gmail.com",
		message = "Hola, me gustaría contactarte para hablar sobre una posible colaboración. ¿Podríamos agendar una reunión para discutirlo? Quedo atento a tu respuesta. ¡Gracias!",
	} = props

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
