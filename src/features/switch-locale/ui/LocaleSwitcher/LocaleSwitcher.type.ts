import type { AppLocale } from "@shared/lib/locale"

export type LocaleSwitcherProps = {
	currentLocale: AppLocale
	localeHrefs: Record<AppLocale, string>
	className?: string
}
