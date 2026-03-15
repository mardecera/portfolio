import type { TFunction } from "@/types/i18n.types"
import type { Status } from "./ContactForm.types"

export const getStatus = (status: Status, t: TFunction) => {
	return {
		idle: t("contact.status.idle"),
		pending: t("contact.status.pending"),
		success: t("contact.status.success"),
		error: t("contact.status.error"),
	}[status]
}
