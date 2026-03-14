import { Head, Html, Section } from "@react-email/components"
import { Hr, Img, Tailwind } from "@react-email/components"
import { Column, Link, Preview, Row } from "@react-email/components"
import { Body, Container } from "@react-email/components"
import { Heading, Text } from "@react-email/components"
import type { ThanksEmailProps } from "./Thanks.email.types"

const ThanksEmailTemplate = (props: ThanksEmailProps) => {
	const { name } = props

	return (
		<Html>
			<Head />
			<Tailwind>
				<Body style={{ fontFamily: "Arial" }}>
					<Preview>Gracias por contactarme.</Preview>
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
								Gracias por contactarme
							</Heading>
						</Section>
						<Section className="px-4">
							<Text>
								Hola,{" "}
								<span className="text-[#4c0bf7] font-semibold">{name}</span>
							</Text>
							<Text>
								Gracias por ponerte en contacto conmigo. He recibido tu mensaje
								correctamente. En breve revisaré la información que enviaste y
								te responderé para conversar mejor sobre tu proyecto y cómo
								puedo ayudarte.
							</Text>
							<Text>Saludos 👋</Text>
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
