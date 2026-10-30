export const prerender = false

import type { APIRoute } from "astro"

import { handleContactRequest } from "@features/send-contact/api/send-email.server"

/**
 * Recibe el envío del formulario de contacto.
 *
 * @param request - Petición POST con el cuerpo del formulario.
 */
export const POST: APIRoute = async ({ request }) => {
	return handleContactRequest(request)
}
