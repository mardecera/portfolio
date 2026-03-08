export const DEFAULT_LOCALE = "es"
export const SUPPORTED_LOCALES = ["es", "en"] as const

export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

export const getLocaleFromPath = (path: string): AppLocale => {
	const segments = path.split("/").filter(Boolean)
	const locale = segments[0]

	if (SUPPORTED_LOCALES.includes(locale as AppLocale)) {
		return locale as AppLocale
	}

	return DEFAULT_LOCALE
}

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
