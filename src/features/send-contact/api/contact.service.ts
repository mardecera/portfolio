import { apiClient } from "@shared/api/client"
import { buildHeaders } from "@shared/api/headers"
import type { EmailPayload } from "./contact.service.types"

/**
 * Envía el mensaje de contacto al endpoint del sitio.
 *
 * @param payload.name - Nombre de quien escribe.
 * @param payload.email - Correo de respuesta.
 * @param payload.message - Texto del mensaje.
 * @param payload.locale - Idioma del aviso de confirmación.
 */
export const sendEmail = async (payload: EmailPayload) => {
	const { data } = await apiClient.post("/api/contact", payload, {
		headers: buildHeaders(),
	})

	return data
}
