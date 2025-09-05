import type { COUNTRY_CODES } from "../../constants/countryCodes"

export const phoneNumberFormatter = (
	phoneNumber: string,
	countryCode: (typeof COUNTRY_CODES)[number],
) => {
	switch (countryCode) {
		case "51":
			return `+${countryCode} ${phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}`
		default:
			return phoneNumber
	}
}
