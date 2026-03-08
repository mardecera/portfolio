import type { AppLocale } from "@/utils/locale.utils"
import { fallbackLocale, ui } from "./ui"

type Messages = (typeof ui)[typeof fallbackLocale]
type DotNestedKeys<T> = T extends object
	? {
			[K in keyof T & string]: T[K] extends object
				? `${K}.${DotNestedKeys<T[K]>}` | K
				: K
		}[keyof T & string]
	: never

const getNestedValue = (obj: Record<string, unknown>, key: string) => {
	return key.split(".").reduce<unknown>((acc, part) => {
		if (acc && typeof acc === "object" && part in acc) {
			return (acc as Record<string, unknown>)[part]
		}

		return undefined
	}, obj)
}

export const useTranslations = (locale: AppLocale) => {
	return (key: DotNestedKeys<Messages>) => {
		const value =
			getNestedValue(ui[locale], key) ??
			getNestedValue(ui[fallbackLocale], key) ??
			key

		return typeof value === "string" ? value : key
	}
}
