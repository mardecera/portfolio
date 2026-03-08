import { type AppLocale, DEFAULT_LOCALE } from "@/utils/locale.utils"

export const ui = {
	es: {
		aboutMe: {
			section: "Sobre mi",
			title: "Desarrollador Web Apasionado",
			descriptionOne:
				"Con 1 ano de experiencia en crear aplicaciones web, responsive y rapidas.",
			descriptionTwo:
				"Me motiva solucionar problemas reales mediante la programacion y el desarrollo, para que el usuario pueda usarlos en apps de la manera mas simple y efectiva.",
			descriptionThree:
				"Ya sea creando un proyecto desde cero o integrandome a uno ya avanzado, estoy listo para seguir avanzando hasta culminarlo.",
			download: "Descargar CV",
		},
		banner: {
			title: "¿Listo para hacer algo increible?",
			description:
				"Estoy emocionado por desarrollar tus ideas en nuevos proyectos y aplicaciones.",
			contact: "Contactame",
		},
		contact: {
			section: "Contacto",
			description:
				"Estoy disponible para trabajar como freelance y para posiciones de tiempo completo. Si tienes un proyecto que necesita un toque creativo, me encantaria escuchar sobre el.",
		},
		layout: {
			title: "Jonathan Cervantes Alarcon | Desarrollador Frontend",
			description:
				"Portafolio web de un desarrollador frontend, mostrando proyectos y habilidades en tecnologias modernas. Tienes un proyecto que necesita un toque creativo? Me encantaria escucharlo.",
		},
		footer: {
			copy: "Todos los derechos reservados",
		},
		header: {
			about: "Sobre mi",
			skills: "Habilidades",
			projects: "Proyectos",
			contact: "Contacto",
		},
		hero: {
			badge: "Desarrollador Frontend",
			description:
				"Construyo aplicaciones web optimizadas, responsive y estructuradas con un enfoque en codigo limpio y excelente experiencia de usuario.",
			projects: "Ver mi trabajo",
			contact: "Contactame",
		},
		projects: {
			section: "Proyectos",
			title: "Una seleccion de mis proyectos recientes y personales",
			viewProject: "Ver proyecto",
			viewAll: "Ver todos los proyectos",
			pollosControlDescription:
				"App de gestion avicola para pequenos productores. Incluye manejo de usuarios, reporte general, notificaciones, registro de gastos y campos.",
			agroAmymDescription:
				"App para la gestion de una granja de cochinilla. Incluye manejo de usuarios, trabajadores, asistencia, reportes y campos.",
			dicovertDescription:
				"Pagina web para la empresa Dicovert, dedicada al campo de la metalurgia.",
		},
		skills: {
			section: "Habilidades",
			title:
				"Estas son las tecnologias y herramientas con las que trabajo para dar vida a mis ideas.",
			support: "Desarrollo y Herramientas de apoyo",
			frontend: "Frontend y Frameworks",
			testing: "Testing, APIs y Deploy",
		},
		notFound: {
			title: "Lo siento, la pagina que buscas no existe.",
			description:
				"Es posible que la URL este mal escrita o que la pagina haya cambiado de lugar.",
			cta: "Volver al inicio",
		},
	},
	en: {
		aboutMe: {
			section: "About me",
			title: "Passionate Web Developer",
			descriptionOne:
				"With 1 year of experience building responsive and fast web applications.",
			descriptionTwo:
				"I am driven by solving real problems through programming and development, so users can benefit from apps in the simplest and most effective way.",
			descriptionThree:
				"Whether it means building a project from scratch or joining one already in progress, I am ready to keep moving forward until it is finished.",
			download: "Download CV",
		},
		banner: {
			title: "Ready to build something incredible?",
			description:
				"I am excited to help bring your ideas to life through new projects and applications.",
			contact: "Contact me",
		},
		contact: {
			section: "Contact",
			description:
				"I am available for freelance work and full-time roles. If you have a project that needs a creative touch, I would love to hear about it.",
		},
		layout: {
			title: "Jonathan Cervantes Alarcon | Frontend Developer",
			description:
				"Web portfolio of a frontend developer showcasing projects and skills in modern technologies. If you have a project that needs a creative touch, I would love to hear about it.",
		},
		footer: {
			copy: "All rights reserved",
		},
		header: {
			about: "About me",
			skills: "Skills",
			projects: "Projects",
			contact: "Contact",
		},
		hero: {
			badge: "Frontend Developer",
			description:
				"I build optimized, responsive, and well-structured web applications with a focus on clean code and a strong user experience.",
			projects: "See my work",
			contact: "Contact me",
		},
		projects: {
			section: "Projects",
			title: "A selection of my recent and personal projects",
			viewProject: "View project",
			viewAll: "View all projects",
			pollosControlDescription:
				"Poultry management app for small producers. Includes user management, general reports, notifications, expense tracking, and field records.",
			agroAmymDescription:
				"Management app for a cochineal farm. Includes user management, workers, attendance, reports, and field records.",
			dicovertDescription:
				"Website for Dicovert, a company focused on the metallurgy industry.",
		},
		skills: {
			section: "Skills",
			title:
				"These are the technologies and tools I use to bring my ideas to life.",
			support: "Development and Supporting Tools",
			frontend: "Frontend and Frameworks",
			testing: "Testing, APIs and Deployment",
		},
		notFound: {
			title: "Sorry, the page you are looking for does not exist.",
			description: "The URL may be incorrect, or the page may have been moved.",
			cta: "Back to home",
		},
	},
} as const satisfies Record<AppLocale, Record<string, unknown>>

export const fallbackLocale = DEFAULT_LOCALE
