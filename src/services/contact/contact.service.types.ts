import type { AppLocale } from "@/utils/locale.utils"

export type EmailPayload = {
	name: string
	email: string
	message: string
	locale?: AppLocale
}
