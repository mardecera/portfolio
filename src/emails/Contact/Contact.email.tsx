import { Button, Link, Section, Text } from "@react-email/components"
import { EmailShell } from "../components/EmailShell/EmailShell"
import type { ContactEmailProps } from "./Contact.email.types"

const ContactEmailTemplate = (props: ContactEmailProps) => {
	const { name, email, message, locale = "es" } = props

	const copy = {
		es: {
			preview: `Nuevo contacto de ${name}`,
			title: "Nuevo mensaje del portfolio",
			intro: "Alguien completó el formulario de contacto en mardecera.com.",
			name: "Nombre",
			email: "Correo",
			message: "Mensaje",
			reply: `Responder a ${name}`,
			replySubject: `Re: Tu mensaje en mardecera.com (${name})`,
		},
		en: {
			preview: `New contact from ${name}`,
			title: "New portfolio message",
			intro: "Someone submitted the contact form on mardecera.com.",
			name: "Name",
			email: "Email",
			message: "Message",
			reply: `Reply to ${name}`,
			replySubject: `Re: Your message on mardecera.com (${name})`,
		},
	}[locale]

	const mailto = `mailto:${email}?subject=${encodeURIComponent(copy.replySubject)}`

	return (
		<EmailShell preview={copy.preview} title={copy.title}>
			<Text className="text-shark-500 text-sm leading-5 mt-0 mb-6">
				{copy.intro}
			</Text>

			<Section className="mb-4">
				<Text className="text-shark-400 text-xs uppercase tracking-wide mt-0 mb-1">
					{copy.name}
				</Text>
				<Text className="text-shark-900 text-base font-medium mt-0 mb-0">
					{name}
				</Text>
			</Section>

			<Section className="mb-4">
				<Text className="text-shark-400 text-xs uppercase tracking-wide mt-0 mb-1">
					{copy.email}
				</Text>
				<Link
					href={mailto}
					className="text-primary-700 text-base font-medium no-underline"
				>
					{email}
				</Link>
			</Section>

			<Section className="bg-primary-50 border border-primary-100 rounded-lg px-4 py-4 mb-6">
				<Text className="text-shark-400 text-xs uppercase tracking-wide mt-0 mb-2">
					{copy.message}
				</Text>
				<Text className="text-shark-800 text-sm leading-6 mt-0 mb-0 whitespace-pre-wrap">
					{message}
				</Text>
			</Section>

			<Button
				href={mailto}
				className="bg-primary-700 text-white text-sm font-semibold rounded-lg px-5 py-3 text-center no-underline"
			>
				{copy.reply}
			</Button>
		</EmailShell>
	)
}

export default ContactEmailTemplate
