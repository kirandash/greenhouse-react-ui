import clsx from 'clsx'
import { ThemeContext } from './context/ThemeContext'
import { forwardRef, LabelHTMLAttributes, useContext } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
	children: React.ReactNode
	disabled?: boolean
	className?: string
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
	const { children, disabled, className, ...other } = props
	const { label } = useContext(ThemeContext)
	const baseStyle = label.base
	const disabledStyle = label.disabled

	const cls = clsx(baseStyle, disabled && disabledStyle, className)
	return (
		<label className={cls} ref={ref} {...other}>
			{children}
		</label>
	)
})

export default Label
