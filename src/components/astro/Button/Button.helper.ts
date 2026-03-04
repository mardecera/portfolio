export const getAttributes = (href: string) => {
	return href.startsWith("http")
		? { target: "_blank", rel: "noopener noreferrer", href }
		: { href }
}
