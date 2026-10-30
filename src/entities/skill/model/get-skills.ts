import type { TFunction } from "@shared/i18n/types"

/**
 * Devuelve las tarjetas de habilidades traducidas.
 *
 * @param t - Función de traducción del idioma activo.
 */
export const getSkills = (t: TFunction) => {
	return [
		{
			icon: "tools",
			title: t("skills.support"),
			description: t("skills.supportDescription"),
			technologies: [
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
			icon: "frontend",
			title: t("skills.frontend"),
			description: t("skills.frontendDescription"),
			technologies: [
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
			icon: "testing",
			title: t("skills.testing"),
			description: t("skills.testingDescription"),
			technologies: [
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
