import type { fallbackLocale, ui } from "@/i18n/ui"

export type Messages = (typeof ui)[typeof fallbackLocale]
export type DotNestedKeys<T> = T extends object
	? {
			[K in keyof T & string]: T[K] extends object
				? `${K}.${DotNestedKeys<T[K]>}` | K
				: K
		}[keyof T & string]
	: never

export type TFunction = (key: DotNestedKeys<Messages>) => string
