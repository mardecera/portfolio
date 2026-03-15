import { z } from "zod"

export const contactSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email(),
	message: z.string().min(10).max(500),
	locale: z.enum(["es", "en"]),
})

export type ContactPayload = z.infer<typeof contactSchema>
