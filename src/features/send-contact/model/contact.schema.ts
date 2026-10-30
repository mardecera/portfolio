import type { TFunction } from "@shared/i18n/types"
import { z } from "zod"

/**
 * Crea el esquema de validación del formulario de contacto.
 *
 * @param t - Función de traducción de los mensajes de error.
 */
export const createContactFormSchema = (t: TFunction) =>
	z.object({
		name: z.string().min(1, t("errors.forms.nameRequired")),
		email: z
			.string()
			.min(1, t("errors.forms.emailRequired"))
			.email(t("errors.forms.emailInvalid")),
		message: z.string().min(1, t("errors.forms.messageRequired")),
	})

export type ContactFormData = z.infer<
	ReturnType<typeof createContactFormSchema>
>
