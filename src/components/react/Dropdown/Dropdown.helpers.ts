const DROPDOWN_GAP = 8
const VIEWPORT_PADDING = 12

type GetDropdownPositionParams = {
	triggerRect: DOMRect
	contentRect: DOMRect
}

export type DropdownPosition = {
	top: number
	left: number
	width: number
	placement: "top" | "bottom"
}

export const getDropdownPosition = (
	params: GetDropdownPositionParams,
): DropdownPosition => {
	const { triggerRect, contentRect } = params
	const viewportWidth = window.innerWidth
	const viewportHeight = window.innerHeight
	const spaceBelow = viewportHeight - triggerRect.bottom - VIEWPORT_PADDING
	const spaceAbove = triggerRect.top - VIEWPORT_PADDING
	const shouldOpenAbove =
		spaceBelow < contentRect.height && spaceAbove > spaceBelow

	const unclampedTop = shouldOpenAbove
		? triggerRect.top - contentRect.height - DROPDOWN_GAP
		: triggerRect.bottom + DROPDOWN_GAP
	const maxTop = Math.max(
		VIEWPORT_PADDING,
		viewportHeight - contentRect.height - VIEWPORT_PADDING,
	)
	const top = Math.min(Math.max(unclampedTop, VIEWPORT_PADDING), maxTop)
	const maxLeft = Math.max(
		VIEWPORT_PADDING,
		viewportWidth - triggerRect.width - VIEWPORT_PADDING,
	)
	const left = Math.min(Math.max(triggerRect.left, VIEWPORT_PADDING), maxLeft)

	return {
		top,
		left,
		width: triggerRect.width,
		placement: shouldOpenAbove ? "top" : "bottom",
	}
}
