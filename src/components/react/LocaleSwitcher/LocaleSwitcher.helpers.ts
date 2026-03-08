import { getRelativeLocaleUrl } from "astro:i18n"

import type { AppLocale } from "@/utils/locale.utils"

export const getLocale = (
	relativePath: string,
	search: string,
	hash: string,
) => {
	return (locale: AppLocale) => {
		const localeUrl = relativePath
			? getRelativeLocaleUrl(locale, relativePath)
			: getRelativeLocaleUrl(locale)

		return `${localeUrl}${search}`
	}
}
