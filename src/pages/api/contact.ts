export const prerender = false

import { RESEND_API_KEY } from "astro:env/server"
import type { APIRoute } from "astro"
import ContactEmailTemplate from "emails/Contact/Contact.email"
import ThanksEmailTemplate from "emails/Thanks/Thanks.email"
import { Resend } from "resend"

const resend = new Resend(RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json()
	const { name, email, message } = data

	try {
		await resend.emails.send({
			from: "Resend <mardecera.com@resend.dev>",
			to: "mardecera.personal@gmail.com",
			subject: "Alguien te ha contactado desde tu portfolio",
			react: ContactEmailTemplate({
				name,
				email,
				message,
			}),
		})

		await resend.emails.send({
			from: "Jonathan Cervantes <mardecera.com@resend.dev>",
			to: email,
			subject: "Gracias por contactarme",
			react: ThanksEmailTemplate({
				name,
			}),
		})
	} catch (error) {
		console.error("[Error enviando email]", error)

		return new Response(
			JSON.stringify({
				success: false,
				error: "email_send_failed",
				message: "No se pudo enviar el email. Intenta mas tarde.",
				detail: error instanceof Error ? error.message : String(error),
				data: { name, email, message },
				receivedAt: new Date().toISOString(),
			}),
			{
				status: 502,
				headers: { "content-type": "application/json; charset=utf-8" },
			},
		)
	}

	return new Response(
		JSON.stringify({
			success: true,
			message: "Email enviado correctamente.",
			data: { name, email, message },
			receivedAt: new Date().toISOString(),
		}),
		{
			status: 200,
			headers: { "content-type": "application/json; charset=utf-8" },
		},
	)
}
