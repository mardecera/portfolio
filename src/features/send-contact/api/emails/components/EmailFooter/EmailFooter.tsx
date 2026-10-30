import { Column, Hr, Link, Row, Text } from "@react-email/components"
import { emailBrand } from "../../email.constants"
import type { EmailFooterProps } from "./EmailFooter.types"

/**
 * Pie del correo con el sitio y las redes.
 *
 * @param props.siteLinkText - Texto del enlace al sitio.
 */
export const EmailFooter = (props: EmailFooterProps) => {
	const { siteLinkText } = props

	return (
		<>
			<Hr className="border-primary-100 border-t my-0" />
			{siteLinkText ? (
				<Row className="mt-4">
					<Column align="center">
						<Link
							href={emailBrand.siteUrl}
							className="text-primary-700 text-sm font-medium underline"
						>
							{siteLinkText}
						</Link>
					</Column>
				</Row>
			) : null}
			<Text className="text-center text-neutral-500 text-xs mt-3 mb-0">
				<Link
					href={emailBrand.socialLinks.github}
					className="text-neutral-500 underline"
				>
					Github
				</Link>
				{" · "}
				<Link
					href={emailBrand.socialLinks.linkedin}
					className="text-neutral-500 underline"
				>
					LinkedIn
				</Link>
			</Text>
		</>
	)
}
