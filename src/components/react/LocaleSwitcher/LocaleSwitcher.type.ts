import type { AppLocale } from "@/utils/locale.utils"

export type LocaleSwitcherProps = {
	currentLocale: AppLocale
	localeHrefs: Record<AppLocale, string>
	className?: string
}
