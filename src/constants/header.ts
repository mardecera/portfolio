import { useTranslations } from "@/i18n/utils"

export const getLinks = (currentLocale: "es" | "en") => {
	const t = useTranslations(currentLocale)

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
