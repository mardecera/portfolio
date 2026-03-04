import { CONSTANTS } from "@/constants/constants"

const { WHATSAPP_BASE_LINK, WHATSAPP_PHONE_NUMBER } = CONSTANTS
const { WHATSAPP_MESSAGE } = CONSTANTS

export const getLinkToWhatsapp = () => {
	const message = encodeURIComponent(WHATSAPP_MESSAGE)
	return `${WHATSAPP_BASE_LINK}${WHATSAPP_PHONE_NUMBER}?text=${message}`
}
