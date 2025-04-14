import { useId, useRef, useState } from "react"

type Props = {
	label?: string
	name?: string
}

const Input = ({ label, name }: Props) => {
	const [value, setValue] = useState<string | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const id = useId()

	const handleChange = () => {
		if (inputRef.current) {
			setValue(inputRef.current.value)
		}
	}

	return (
		<div>
			{label && <label htmlFor={`${id}`}>{label}</label>}
			<input id={`${id}`} type="text" ref={inputRef} onChange={handleChange} />
		</div>
	)
}

export default Input
