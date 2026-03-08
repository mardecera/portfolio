import { useEffect, useState } from "react"

import { DEFAULT_LOCALE, stripLocaleFromPath } from "@/utils/locale.utils"
import Dropdown from "../Dropdown/Dropdown"
import { getLocale } from "./LocaleSwitcher.helpers"
import type { LocaleSwitcherProps } from "./LocaleSwitcher.type"

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
	const { currentLocale, currentPath, className } = props
	const [search, setSearch] = useState("")
	const [hash, setHash] = useState("")

	useEffect(() => {
		setSearch(window.location.search)
		setHash(window.location.hash)
	}, [])

	const relativePath = stripLocaleFromPath(currentPath)
	const getLocaleHref = getLocale(relativePath || "", search, hash)

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
					href: getLocaleHref("es"),
				},
				{
					label: "English",
					value: "en",
					href: getLocaleHref("en"),
				},
			]}
			className={className}
		/>
	)
}

export default LocaleSwitcher
