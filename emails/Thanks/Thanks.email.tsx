import { Head, Html, Section } from "@react-email/components"
import { Hr, Img, Tailwind } from "@react-email/components"
import { Column, Link, Preview, Row } from "@react-email/components"
import { Body, Container } from "@react-email/components"
import { Heading, Text } from "@react-email/components"
import type { ThanksEmailProps } from "./Thanks.email.types"

const ThanksEmailTemplate = (props: ThanksEmailProps) => {
	const { name, locale = "es" } = props

	const previewText = {
		es: "Gracias por contactarme",
		en: "Thank you for reaching out!",
	}[locale]

	return (
		<Html>
			<Head />
			<Tailwind>
				<Body style={{ fontFamily: "Arial" }}>
					<Preview>{previewText}</Preview>
					<Container
						style={{ backgroundColor: "#f8f9ff" }}
						className="p-2 rounded-2xl border border-[#e9ebff]"
					>
						<Section className="bg-[#1d1d21] rounded-lg p-4 py-8">
							<Img
								src="https://fdizjrkarmgyphhhclki.supabase.co/storage/v1/object/public/mardecera-portfolio/email-logo.png"
								alt="Background"
								className="w-10 mx-auto rounded-md"
							/>
							<Heading className="text-center text-white mb-0">
								{locale === "es" && "Gracias por contactarme"}
								{locale === "en" && "Thanks for reaching out!"}
							</Heading>
						</Section>
						<Section className="px-4">
							<Text>
								{locale === "es" && "Hola, "}
								{locale === "en" && "Hello, "}
								<span className="text-[#4c0bf7] font-semibold">{name}</span>
							</Text>
							<Text>
								{locale === "es" &&
									"Gracias por ponerte en contacto conmigo. He recibido tu mensaje correctamente. En breve revisaré la información que enviaste y te responderé para conversar mejor sobre tu proyecto y cómo puedo ayudarte."}
								{locale === "en" &&
									"Thank you for reaching out to me. I have received your message successfully. I will review the information you sent shortly and get back to you to discuss your project and how I can assist you."}
							</Text>
							<Text>
								{locale === "es" && "Saludos 👋"}
								{locale === "en" && "Best regards 👋"}
							</Text>
						</Section>
						<Section className="px-3">
							<Hr className="my-2 border-[#d6daff] border-t" />
						</Section>
						<Section className="rounded-lg px-3">
							<table className="w-full">
								<tr>
									<td>
										<Row className="table-cell w-14">
											<Column className="pr-4">
												<Link
													href="https://github.com/mardecera"
													className="text-[14px] underline text-[#4c0bf7]"
												>
													Github
												</Link>
											</Column>
											<Column className="pr-2">
												<Link
													href="https://www.linkedin.com/in/marrdecera/"
													className="text-[14px] underline text-[#4c0bf7]"
												>
													Linkedin
												</Link>
											</Column>
										</Row>
									</td>
								</tr>
							</table>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}

export default ThanksEmailTemplate
