import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
	invalid?: boolean
	className?: string
	disabled?: boolean
}

// TODO: Add Clear Button and Password Toggle
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, invalid, type = 'text', disabled, ...other } = props
	const { input } = useContext(ThemeContext)

	const baseStyle = input.base
	const invalidStyle = input.invalid
	const disabledStyle = input.disabled

	const hasValidation = invalid !== undefined
	const validationStyle = hasValidation ? (invalid ? invalidStyle : null) : null

	const cls = clsx(
		baseStyle,
		// don't apply disabledStyle if has valid
		!hasValidation && disabled && disabledStyle,
		validationStyle,
		className,
	)

	return (
		<input
			className={cls}
			type={type}
			{...other}
			ref={ref}
			disabled={disabled}
		/>
	)
})

export default Input
