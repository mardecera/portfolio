import agroamymProject from "@/assets/agroamym-banner.webp"
import dicovertProject from "@/assets/dicovert-banner.webp"
import pollosControlProject from "@/assets/polloscontrol.png"
import type { ProjectType } from "@/types/projects"

export const PROJECTS: ProjectType[] = [
	{
		title: "Pollos Control",
		description:
			"App de gestión avícola para pequeños productores ─ Manejo de usuarios, reporte general, notificaciones, registro de gastos y campos.",
		technologies: ["Next.js", "TypeScript", "Ant Design", "Railway"],
		codeUrl: null,
		pageUrl: "https://polloscontrol.com",
		image: pollosControlProject,
	},
	{
		title: "Agro Amym",
		description:
			"App para la gestión de una granja de cochinilla ─ Manejo de usuarios, trabajadores, asistencia, reportes y campos.",
		technologies: ["React", "TypeScript", "Vite", "Railway", "Ant Design"],
		codeUrl: null,
		pageUrl: "https://agroamym.com",
		image: agroamymProject,
	},
	{
		title: "Dicovert",
		description:
			"Pagina web para la empresa Dicovert ─ Empresa dedicada al campo de la metalurgia",
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
