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
			title: "¿Tienes un proyecto en mente?",
			description:
				"Estoy listo para ayudarte a convertir tus ideas en productos digitales reales. Hablemos.",
			contact: "Contactame ahora",
		},
		contact: {
			section: "Contacto",
			title1: "Conversemos sobre tu",
			title2: "próximo proyecto",
			description:
				"Estoy disponible para trabajar como freelance y para posiciones de tiempo completo. Si tienes un proyecto que necesita un toque creativo, me encantaria escuchar sobre el.",
			inputNamePlaceholder: "Jhon Doe",
			inputNameLabel: "Nombre",
			inputEmailPlaceholder: "email@ejemplo.com",
			inputEmailLabel: "Correo",
			inputMessagePlaceholder: "Escribe tu mensaje aqui...",
			inputMessageLabel: "Mensaje",
			buttonSubmit: "Enviar mensaje",
			sendSuccess: "Mensaje a sido enviado con exito",
			toastTitle: "Enviado",
			status: {
				idle: "Enviar mensaje",
				pending: "Enviando...",
				success: "Tu mensaje a sido enviado con exito",
				error:
					"Ocurrio un error al enviar el mensaje. Por favor intenta de nuevo mas tarde.",
			},
		},
		layout: {
			title: "Jonathan Cervantes Alarcon | Desarrollador Frontend",
			description:
				"Portafolio web de un desarrollador frontend, mostrando proyectos y habilidades en tecnologias modernas. Tienes un proyecto que necesita un toque creativo? Me encantaria escucharlo.",
		},
		footer: {
			copy: "Todos los derechos reservados",
			brand:
				"Construyendo experiencias digitales excepcionales con pasión por el detalle y el código de alta calidad.",
			titleSections: "Secciones",
			titleNetwork: "Social",
			poweredBy: "Hecho con ♥️ por JCA",
		},
		header: {
			about: "Sobre mi",
			skills: "Habilidades",
			projects: "Proyectos",
			contact: "Contacto",
		},
		hero: {
			badge: "Desarrollador Fullstack",
			description:
				"Construyo aplicaciones web optimizadas, responsive y estructuradas con un enfoque en codigo limpio y excelente experiencia de usuario.",
			projects: "Ver mi trabajo",
			contact: "Contactame",
			whatsappMessage:
				"Hola, ¿qué tal? Estoy interesado en trabajar contigo en un proyecto. 🚀",
		},
		projects: {
			section: "Proyectos",
			title: "Una seleccion de mis proyectos recientes y personales",
			description:
				"He trabajado en proyectos que van desde aplicaciones móviles hasta sitios web empresariales.",
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
			support: "Desarrollo y Herramientas",
			supportDescription: "Entorno de desarrollo y control de versiones",
			frontend: "Frontend y Frameworks",
			frontendDescription: "Tecnologías para construir interfaces modernas",
			testing: "Testing, APIs y Deploy",
			testingDescription: "Calidad, integración y despliegue continuo",
		},
		notFound: {
			title: "Lo siento, la pagina que buscas no existe.",
			description:
				"Es posible que la URL este mal escrita o que la pagina haya cambiado de lugar.",
			cta: "Volver al inicio",
		},
		errors: {
			forms: {
				emailInvalid: "Ingresa un correo electrónico válido",
				emailRequired: "Ingresa tu correo electrónico",
				nameRequired: "Ingresa tu nombre",
				messageRequired: "Ingresa un mensaje",
			},
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
			title: "Do you have a project in mind?",
			description:
				"I am ready to help you turn your ideas into real digital products. Let's talk.",
			contact: "Contact me",
		},
		contact: {
			section: "Contact",
			title1: "Let's talk about your",
			title2: "next project",
			description:
				"I am available for freelance work and full-time roles. If you have a project that needs a creative touch, I would love to hear about it.",
			inputNamePlaceholder: "Jhon Doe",
			inputNameLabel: "Name",
			inputEmailPlaceholder: "email@example.com",
			inputEmailLabel: "Email",
			inputMessagePlaceholder: "Write your message here...",
			inputMessageLabel: "Message",
			buttonSubmit: "Send message",
			toastTitle: "Sent",
			status: {
				idle: "Send message",
				pending: "Sending...",
				success: "Your message sent successfully",
				error:
					"An error occurred while sending the message. Please try again later.",
			},
		},
		layout: {
			title: "Jonathan Cervantes Alarcon | Frontend Developer",
			description:
				"Web portfolio of a frontend developer showcasing projects and skills in modern technologies. If you have a project that needs a creative touch, I would love to hear about it.",
		},
		footer: {
			copy: "All rights reserved",
			brand:
				"Building exceptional digital experiences with passion for detail and high-quality code.",
			titleSections: "Sections",
			titleNetworks: "Networks",
			poweredBy: "Building with ♥️ by JCA",
		},
		header: {
			about: "About me",
			skills: "Skills",
			projects: "Projects",
			contact: "Contact",
		},
		hero: {
			badge: "FullStack Developer",
			description:
				"I build optimized, responsive, and well-structured web applications with a focus on clean code and a strong user experience.",
			projects: "See my work",
			contact: "Contact me",
			whatsappMessage:
				"Hello, how are you? I'm interested in working with you on a project. 🚀",
		},
		projects: {
			section: "Projects",
			title: "A selection of my recent and personal projects",
			description:
				"I have worked on projects ranging from mobile applications to enterprise websites.",
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
			support: "Development and Tools",
			supportDescription: "Development environment and version control",
			frontend: "Frontend and Frameworks",
			frontendDescription: "Technologies to build modern interfaces",
			testing: "Testing, APIs and Deployment",
			testingDescription: "Quality, integration and continuous deployment",
		},
		notFound: {
			title: "Sorry, the page you are looking for does not exist.",
			description: "The URL may be incorrect, or the page may have been moved.",
			cta: "Back to home",
		},
		errors: {
			forms: {
				emailInvalid: "Enter a valid email address",
				emailRequired: "Enter your email address",
				nameRequired: "Enter your name",
				messageRequired: "Enter a message",
			},
		},
	},
} as const satisfies Record<AppLocale, Record<string, unknown>>

export const fallbackLocale = DEFAULT_LOCALE
