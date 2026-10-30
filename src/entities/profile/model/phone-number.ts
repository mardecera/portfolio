import type { COUNTRY_CODES } from "./country-codes"

/**
 * Formatea un teléfono con su código de país.
 *
 * @param phoneNumber - Número local, sin código de país.
 * @param countryCode - Código de país admitido. Hoy, `51`.
 */
export const formatPhoneNumber = (
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
