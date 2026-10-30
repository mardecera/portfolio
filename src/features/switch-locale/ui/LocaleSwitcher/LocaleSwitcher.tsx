import { useEffect, useState } from "react"

import { DEFAULT_LOCALE } from "@shared/lib/locale"
import Dropdown from "@shared/ui/dropdown"
import type { LocaleSwitcherProps } from "./LocaleSwitcher.type"

/**
 * Selector de idioma que conserva la ruta, la búsqueda y el hash.
 *
 * @param props.currentLocale - Idioma de la página actual.
 * @param props.localeHrefs - Destino de cada idioma.
 * @param props.className - Clases del contenedor.
 */
const LocaleSwitcher = (props: LocaleSwitcherProps) => {
	const { currentLocale, localeHrefs, className } = props
	const [search, setSearch] = useState("")
	const [hash, setHash] = useState("")

	useEffect(() => {
		setSearch(window.location.search)
		setHash(window.location.hash)
	}, [])

	/**
	 * Conserva la búsqueda y el hash al cambiar de idioma.
	 *
	 * @param href - Ruta del idioma elegido.
	 */
	const keepSearchAndHash = (href: string) => `${href}${search}${hash}`

	return (
		<Dropdown
			value={currentLocale}
			onSelect={(option) => {
				if (option.value !== currentLocale) {
					window.location.assign(option.href)
				}
			}}
			options={[
				{
					label: "Español",
					value: DEFAULT_LOCALE,
					href: keepSearchAndHash(localeHrefs.es),
				},
				{
					label: "English",
					value: "en",
					href: keepSearchAndHash(localeHrefs.en),
				},
			]}
			className={className}
		/>
	)
}

export default LocaleSwitcher
