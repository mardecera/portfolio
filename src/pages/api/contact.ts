export const prerender = false

import {
	CONTACT_FROM,
	CONTACT_REPLY_TO,
	RESEND_API_KEY,
} from "astro:env/server"
import type { APIRoute } from "astro"
import { Resend } from "resend"

import ContactEmailTemplate from "@/emails/Contact/Contact.email"
import ThanksEmailTemplate from "@/emails/Thanks/Thanks.email"
import { contactSchema } from "@/schemes/api/contact.scheme"

const resend = new Resend(RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json()

	const body = contactSchema.parse(data)
	const { name, email, message, locale } = body

	const subjectOwnerText = {
		es: `Nuevo contacto: ${name}`,
		en: `New contact: ${name}`,
	}[locale]

	const subjectUserText = {
		es: `Recibí tu mensaje, ${name}`,
		en: `I got your message, ${name}`,
	}[locale]

	const errorMessage = {
		es: "No se pudo enviar el email. Intenta más tarde.",
		en: "Failed to send email. Please try again later.",
	}[locale]

	const successMessage = {
		es: "Email enviado correctamente.",
		en: "Email sent successfully.",
	}[locale]

	const contactProps = { name, email, message, locale }
	const thanksProps = { name, locale }

	try {
		await resend.emails.send({
			from: CONTACT_FROM,
			to: CONTACT_REPLY_TO,
			replyTo: email,
			subject: subjectOwnerText,
			react: ContactEmailTemplate(contactProps),
		})

		await resend.emails.send({
			from: CONTACT_FROM,
			to: email,
			replyTo: CONTACT_REPLY_TO,
			subject: subjectUserText,
			react: ThanksEmailTemplate(thanksProps),
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
