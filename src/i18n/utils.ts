import type { DotNestedKeys, Messages } from "@/types/i18n.types"
import type { AppLocale } from "@/utils/locale.utils"
import { fallbackLocale, ui } from "./ui"

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
