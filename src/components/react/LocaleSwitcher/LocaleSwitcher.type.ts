import type { AppLocale } from "@/utils/locale.utils"

export type LocaleSwitcherProps = {
	currentLocale: AppLocale
	currentPath: string
	className?: string
}
