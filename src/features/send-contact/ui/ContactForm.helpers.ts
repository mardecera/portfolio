import type { TFunction } from "@shared/i18n/types"
import type { Status } from "./ContactForm.types"

/**
 * Devuelve el texto del botón de envío según el estado.
 *
 * @param status - Estado del envío: idle, pending, success o error.
 * @param t - Función de traducción del idioma activo.
 */
export const getSubmitButtonLabel = (status: Status, t: TFunction) => {
	return {
		idle: t("contact.status.idle"),
		pending: t("contact.status.pending"),
		success: t("contact.status.success"),
		error: t("contact.status.error"),
	}[status]
}
