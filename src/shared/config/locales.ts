export const DEFAULT_LOCALE = "es"
export const SUPPORTED_LOCALES = ["es", "en"] as const

export type AppLocale = (typeof SUPPORTED_LOCALES)[number]
