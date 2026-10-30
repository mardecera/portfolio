import type { TFunction } from "@shared/i18n/types"

/**
 * Devuelve los enlaces de navegación de las secciones.
 *
 * @param t - Función de traducción del idioma activo.
 */
export const getSectionLinks = (t: TFunction) => {
	return [
		{
			label: t("header.about"),
			href: "#aboutme",
		},
		{
			label: t("header.skills"),
			href: "#skills",
		},
		{
			label: t("header.projects"),
			href: "#projects",
		},
		{
			label: t("header.contact"),
			href: "#contact",
		},
	]
}
