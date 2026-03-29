import { CONSTANTS } from "@/constants/constants"
import type { TFunction } from "@/types/i18n.types"

const { WHATSAPP } = CONSTANTS
const { BASE_URL, PHONE_NUMBER } = WHATSAPP

export const getLinkToWhatsapp = (message: string) => {
	const encodedMessage = encodeURIComponent(message)

	return `${BASE_URL}${PHONE_NUMBER}?text=${encodedMessage}`
}
