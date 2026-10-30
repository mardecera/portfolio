import { layoutMessages } from "@app/layouts/i18n"
import { projectMessages } from "@entities/project/i18n"
import { skillMessages } from "@entities/skill/i18n"
import { contactMessages } from "@features/send-contact/i18n"
import { DEFAULT_LOCALE } from "@shared/config/locales"
import { notFoundMessages } from "@views/not-found/i18n"
import { aboutMeMessages } from "@widgets/about-me/i18n"
import { bannerMessages } from "@widgets/banner/i18n"
import { footerMessages } from "@widgets/footer/i18n"
import { headerMessages } from "@widgets/header/i18n"
import { heroMessages } from "@widgets/hero/i18n"

// Único módulo de shared que importa capas superiores: solo objetos de mensajes.
export const ui = {
	es: {
		...layoutMessages.es,
		...aboutMeMessages.es,
		...bannerMessages.es,
		...headerMessages.es,
		...footerMessages.es,
		...heroMessages.es,
		...projectMessages.es,
		...skillMessages.es,
		...contactMessages.es,
		...notFoundMessages.es,
	},
	en: {
		...layoutMessages.en,
		...aboutMeMessages.en,
		...bannerMessages.en,
		...headerMessages.en,
		...footerMessages.en,
		...heroMessages.en,
		...projectMessages.en,
		...skillMessages.en,
		...contactMessages.en,
		...notFoundMessages.en,
	},
} as const

export const fallbackLocale = DEFAULT_LOCALE
