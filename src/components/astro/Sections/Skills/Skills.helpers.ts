import type { TFunction } from "@/types/i18n.types"

export const getSkills = (t: TFunction) => {
	return [
		{
			icon: "tools",
			title: t("skills.support"),
			description: t("skills.supportDescription"),
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
			icon: "stack",
			title: t("skills.frontend"),
			description: t("skills.frontendDescription"),
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
			icon: "test",
			title: t("skills.testing"),
			description: t("skills.testingDescription"),
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
