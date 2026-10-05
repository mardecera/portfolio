import type { ReactNode } from "react"

export type EmailShellProps = {
	title: string
	preview?: string
	children: ReactNode
	footer?: ReactNode
}
