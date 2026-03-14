import type { AppLocale } from "@/utils/locale.utils"

export type Status = "idle" | "pending" | "success" | "error"

export type ContactFormProps = {
	locale?: AppLocale
}
