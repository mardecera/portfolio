import type { AppLocale } from "@shared/lib/locale"

export type EmailPayload = {
	name: string
	email: string
	message: string
	locale?: AppLocale
}
