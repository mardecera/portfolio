import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Section,
	Tailwind,
} from "@react-email/components"
import { CONSTANTS } from "../../email.constants"
import { emailTailwindConfig } from "../../email.tailwind.config"
import type { EmailShellProps } from "./EmailShell.types"

export const EmailShell = (props: EmailShellProps) => {
	const { title, preview, children, footer } = props

	const canvasStyle = {
		backgroundColor: CONSTANTS.CANVAS_BG,
		margin: 0,
		padding: "32px 16px",
	} as const

	return (
		<Html>
			<Head />
			<Tailwind config={emailTailwindConfig}>
				<Body
					className="font-sans m-0"
					style={{ ...canvasStyle, width: "100%", minHeight: "100%" }}
				>
					{preview ? <Preview>{preview}</Preview> : null}
					<Section style={canvasStyle}>
						<Container className="mx-auto max-w-140 bg-email-surface p-2 rounded-2xl border border-primary-50">
							<Section className="bg-email-header rounded-lg px-4 py-8">
								<Img
									src={CONSTANTS.LOGO_URL}
									alt="Jonathan Cervantes"
									width={40}
									height={40}
									className="mx-auto rounded-md"
								/>
								<Heading className="text-center text-white text-xl font-semibold mt-4 mb-0 leading-8">
									{title}
								</Heading>
							</Section>
							<Section className="px-6 py-6">{children}</Section>
							{footer ? (
								<Section className="px-6 pb-6">{footer}</Section>
							) : null}
						</Container>
					</Section>
				</Body>
			</Tailwind>
		</Html>
	)
}
