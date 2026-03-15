import { useEffect, useState } from "react"

import { DEFAULT_LOCALE } from "@/utils/locale.utils"
import Dropdown from "../Dropdown/Dropdown"
import type { LocaleSwitcherProps } from "./LocaleSwitcher.type"

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
	const { currentLocale, localeHrefs, className } = props
	const [search, setSearch] = useState("")
	const [hash, setHash] = useState("")

	useEffect(() => {
		setSearch(window.location.search)
		setHash(window.location.hash)
	}, [])

	const withLocation = (href: string) => `${href}${search}${hash}`

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
					href: withLocation(localeHrefs.es),
				},
				{
					label: "English",
					value: "en",
					href: withLocation(localeHrefs.en),
				},
			]}
			className={className}
		/>
	)
}

export default LocaleSwitcher
