export const prerender = false

import { RESEND_API_KEY } from "astro:env/server"
import type { APIRoute } from "astro"
import { Resend } from "resend"

import { contactSchema } from "@/schemes/api/contact.scheme"
import ContactEmailTemplate from "emails/Contact/Contact.email"
import ThanksEmailTemplate from "emails/Thanks/Thanks.email"
import { renderToStaticMarkup } from "react-dom/server"

const resend = new Resend(RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json()

	// This is a preview of the email template rendering.
	// const html = renderToStaticMarkup(ThanksEmailTemplate({
	// 	name,
	// 	locale
	// }))

	const body = contactSchema.parse(data)
	const { name, email, message, locale } = body

	const subjectUserText = {
		es: "Información recibida",
		en: "Information received",
	}[locale]

	const errorMessage = {
		es: "No se pudo enviar el email. Intenta más tarde.",
		en: "Failed to send email. Please try again later.",
	}[locale]

	const successMessage = {
		es: "Email enviado correctamente.",
		en: "Email sent successfully.",
	}[locale]

	try {
		await resend.emails.send({
			from: "Resend <mardecera.com@resend.dev>",
			to: "mardecera.personal@gmail.com",
			subject: "Contactado desde tu portfolio",
			react: ContactEmailTemplate({
				name,
				email,
				message,
			}),
		})

		await resend.emails.send({
			from: "Jonathan Cervantes <mardecera.com@resend.dev>",
			to: email,
			subject: subjectUserText,
			react: ThanksEmailTemplate({
				name,
				locale,
			}),
		})
	} catch (error) {
		console.error("[Error enviando email]", error)

		return new Response(
			JSON.stringify({
				success: false,
				error: "email_send_failed",
				message: errorMessage,
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
			message: successMessage,
			data: { name, email, message },
			receivedAt: new Date().toISOString(),
		}),
		{
			status: 200,
			headers: { "content-type": "application/json; charset=utf-8" },
		},
	)
}
