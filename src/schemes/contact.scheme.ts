import type { TFunction } from "@/types/i18n.types"
import * as z from "zod/v4"

export const createContactSchema = (t: TFunction) =>
	z.object({
		name: z.string().min(1, t("errors.forms.nameRequired")),
		email: z
			.string()
			.min(1, t("errors.forms.emailRequired"))
			.pipe(z.email(t("errors.forms.emailInvalid"))),
		message: z.string().min(1, t("errors.forms.messageRequired")),
	})

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>
