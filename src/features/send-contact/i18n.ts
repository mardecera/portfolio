export const contactMessages = {
	es: {
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
		errors: {
			forms: {
				emailInvalid: "Enter a valid email address",
				emailRequired: "Enter your email address",
				nameRequired: "Enter your name",
				messageRequired: "Enter a message",
			},
		},
	},
} as const
