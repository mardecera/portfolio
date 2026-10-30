import { whatsappContact } from "./whatsapp"

/**
 * Arma el enlace de WhatsApp con el mensaje ya escrito.
 *
 * @param message - Texto que se envía al abrir el chat.
 */
export const buildWhatsappLink = (message: string) => {
	const encodedMessage = encodeURIComponent(message)

	return `${whatsappContact.baseUrl}${whatsappContact.phoneNumber}?text=${encodedMessage}`
}
