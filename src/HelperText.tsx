import clsx from 'clsx'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { warn } from './utils/warning'

type HelperTextProps = {
	children: React.ReactNode
	valid?: boolean
	className?: string
}

const HelperText = ({ children, valid, className }: HelperTextProps) => {
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
	return <span className={cls}>{children}</span>
}

export default HelperText
