import type { AppLocale } from "@shared/lib/locale"
import type { DotNestedKeys, Messages } from "./types"
import { fallbackLocale, ui } from "./ui"

/**
 * Lee un mensaje anidado usando una clave con puntos.
 *
 * @param obj - Diccionario de mensajes.
 * @param key - Ruta del mensaje, por ejemplo `hero.badge`.
 */
const getMessageAtPath = (obj: Record<string, unknown>, key: string) => {
	return key.split(".").reduce<unknown>((acc, part) => {
		if (acc && typeof acc === "object" && part in acc) {
			return (acc as Record<string, unknown>)[part]
		}

		return undefined
	}, obj)
}

/**
 * Devuelve la función que traduce claves del idioma activo.
 *
 * @param locale - Idioma de la página.
 */
export const useTranslations = (locale: AppLocale) => {
	/**
	 * Traduce una clave. Si falta, usa el idioma de respaldo o la propia clave.
	 *
	 * @param key - Ruta del mensaje, por ejemplo `hero.badge`.
	 */
	return (key: DotNestedKeys<Messages>) => {
		const value =
			getMessageAtPath(ui[locale], key) ??
			getMessageAtPath(ui[fallbackLocale], key) ??
			key

		return typeof value === "string" ? value : key
	}
}
