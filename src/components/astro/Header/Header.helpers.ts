import type { TFunction } from "@/types/i18n.types"

export const getLinks = (t: TFunction) => {
	return [
		{
			label: t("header.about"),
			href: "#aboutme",
		},
		{
			label: t("header.skills"),
			href: "#skills",
		},
		{
			label: t("header.projects"),
			href: "#projects",
		},
		{
			label: t("header.contact"),
			href: "#contact",
		},
	]
}
