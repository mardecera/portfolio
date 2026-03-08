import agroamymProject from "@/assets/agroamym-banner.webp"
import dicovertProject from "@/assets/dicovert-banner.webp"
import pollosControlProject from "@/assets/polloscontrol.png"
import { useTranslations } from "@/i18n/utils"

export const getProjects = (currentLocale: "en" | "es") => {
	const t = useTranslations(currentLocale)
	return [
		{
			title: "Pollos Control",
			description: t("projects.pollosControlDescription"),
			technologies: ["Next.js", "TypeScript", "Ant Design", "Railway"],
			codeUrl: null,
			pageUrl: "https://polloscontrol.com",
			image: pollosControlProject,
		},
		{
			title: "Agro Amym",
			description: t("projects.agroAmymDescription"),
			technologies: ["React", "TypeScript", "Vite", "Railway", "Ant Design"],
			codeUrl: null,
			pageUrl: "https://agroamym.com",
			image: agroamymProject,
		},
		{
			title: "Dicovert",
			description: t("projects.dicovertDescription"),
			technologies: [
				"Astro",
				"TypeScript",
				"CSS",
				"React",
				"App Script",
				"Hostinger",
			],
			codeUrl: null,
			pageUrl: "https://dicovert.com",
			image: dicovertProject,
		},
	]
}
