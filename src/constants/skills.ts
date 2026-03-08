import { useTranslations } from "@/i18n/utils"

export const getSkills = (currentLocale: "es" | "en") => {
	const t = useTranslations(currentLocale)
	return [
		{
			icon: "Front",
			title: t("skills.support"),
			tecnologies: [
				"Git",
				"GitHub",
				"VS Code",
				"Figma",
				"Scrum",
				"Jira",
				"CI/CD",
				"Jenkins",
			],
		},
		{
			icon: "Responsive",
			title: t("skills.frontend"),
			tecnologies: [
				"HTML5",
				"CSS3",
				"JavaScript",
				"TypeScript",
				"React",
				"Next.js",
				"Astro",
				"Ant Design",
				"React Router",
				"Storybook",
			],
		},
		{
			icon: "Tools",
			title: t("skills.testing"),
			tecnologies: [
				"Vitest",
				"React Testing Library",
				"API REST",
				"Axios",
				"React Query",
				"Netlify",
				"Railway",
			],
		},
	]
}
