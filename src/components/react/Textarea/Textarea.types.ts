export type TextareaProps =
	React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
		label?: string
		error?: string
		textareaClassName?: string
		labelClassName?: string
	}
