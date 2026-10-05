import { Column, Hr, Link, Row, Text } from "@react-email/components"
import { CONSTANTS } from "../../email.constants"
import type { EmailFooterProps } from "./EmailFooter.types"

export const EmailFooter = (props: EmailFooterProps) => {
	const { siteLinkText } = props

	return (
		<>
			<Hr className="border-primary-100 border-t my-0" />
			{siteLinkText ? (
				<Row className="mt-4">
					<Column align="center">
						<Link
							href={CONSTANTS.SITE_URL}
							className="text-primary-700 text-sm font-medium underline"
						>
							{siteLinkText}
						</Link>
					</Column>
				</Row>
			) : null}
			<Text className="text-center text-shark-500 text-xs mt-3 mb-0">
				<Link
					href={CONSTANTS.SOCIAL_LINKS.GITHUB}
					className="text-shark-500 underline"
				>
					Github
				</Link>
				{" · "}
				<Link
					href={CONSTANTS.SOCIAL_LINKS.LINKEDIN}
					className="text-shark-500 underline"
				>
					LinkedIn
				</Link>
			</Text>
		</>
	)
}
