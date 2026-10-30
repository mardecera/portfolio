import {
	type AppLocale,
	DEFAULT_LOCALE,
	SUPPORTED_LOCALES,
} from "@shared/config/locales"

export { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale }

/**
 * Obtiene el idioma a partir de la ruta.
 *
 * @param path - Ruta de la página, con o sin prefijo de idioma.
 */
export const getLocaleFromPath = (path: string): AppLocale => {
	const segments = path.split("/").filter(Boolean)
	const locale = segments[0]

	if (SUPPORTED_LOCALES.includes(locale as AppLocale)) {
		return locale as AppLocale
	}

	return DEFAULT_LOCALE
}

/**
 * Quita el prefijo de idioma y deja la ruta interna.
 *
 * @param path - Ruta completa, incluida la query o el hash si existen.
 */
export const stripLocaleFromPath = (path: string): string | undefined => {
	const normalizedPath = path.split("?")[0]?.split("#")[0] ?? path
	const segments = normalizedPath.split("/").filter(Boolean)

	if (segments.length === 0) {
		return undefined
	}

	if (SUPPORTED_LOCALES.includes(segments[0] as AppLocale)) {
		const localizedSegments = segments.slice(1)
		return localizedSegments.length > 0
			? localizedSegments.join("/")
			: undefined
	}

	return segments.join("/")
}
