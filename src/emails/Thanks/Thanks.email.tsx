import { Text } from "@react-email/components"
import { EmailFooter } from "../components/EmailFooter/EmailFooter"
import { EmailShell } from "../components/EmailShell/EmailShell"
import type { ThanksEmailProps } from "./Thanks.email.types"

const ThanksEmailTemplate = (props: ThanksEmailProps) => {
	const { name, locale = "es" } = props

	const copy = {
		es: {
			preview: `Recibí tu mensaje, ${name}`,
			title: "Gracias por contactarme",
			greeting: "Hola,",
			body: "Recibí tu mensaje y te responderé pronto para hablar de tu proyecto.",
			closing: "Saludos,",
			signature: "Jonathan Cervantes",
			siteLink: "mardecera.com",
		},
		en: {
			preview: `I got your message, ${name}`,
			title: "Thanks for reaching out",
			greeting: "Hello,",
			body: "I received your message and will get back to you soon to talk about your project.",
			closing: "Best regards,",
			signature: "Jonathan Cervantes",
			siteLink: "mardecera.com",
		},
	}[locale]

	return (
		<EmailShell
			preview={copy.preview}
			title={copy.title}
			footer={<EmailFooter siteLinkText={copy.siteLink} />}
		>
			<Text className="text-shark-700 text-base leading-6 mt-0 mb-4">
				{copy.greeting}{" "}
				<span className="text-primary-700 font-semibold">{name}</span>
			</Text>
			<Text className="text-shark-600 text-sm leading-6 mt-0 mb-6">
				{copy.body}
			</Text>
			<Text className="text-shark-600 text-sm mt-0 mb-1">{copy.closing}</Text>
			<Text className="text-shark-900 text-base font-medium mt-0 mb-0">
				{copy.signature}
			</Text>
		</EmailShell>
	)
}

export default ThanksEmailTemplate
