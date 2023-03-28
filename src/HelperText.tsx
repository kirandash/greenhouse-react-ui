import clsx from 'clsx'
import { HTMLAttributes, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { warn } from './utils/warning'

type HelperTextProps = HTMLAttributes<HTMLSpanElement> & {
	children: React.ReactNode
	valid?: boolean
	className?: string
	as?: 'ul'
}

const HelperText = ({
	children,
	valid,
	className,
	as,
	...other
}: HelperTextProps) => {
	warn(!children, 'Button', 'you must pass a children to Button')

	const { helperText } = useContext(ThemeContext)

	const baseStyle = helperText.base
	const validStyle = helperText.valid
	const invalidStyle = helperText.invalid

	const cls = clsx(
		baseStyle,
		valid === undefined ? null : valid ? validStyle : invalidStyle,
		className,
	)
	const AS = as || 'span'
	return (
		<AS className={cls} {...other}>
			{children}
		</AS>
	)
}

export default HelperText
