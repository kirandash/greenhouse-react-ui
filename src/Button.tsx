import { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { warn } from './utils/warning'
import theme from './themes/default'

// TODO: Tag validation - button, anchor
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	tag?: 'button'
	size?: 'small' | 'medium' | 'large'
	layout?: 'primary' | 'outline'
	disabled?: boolean
	block?: boolean
	children: React.ReactNode
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { button: buttonTheme } = theme
	// Styles
	const baseStyle = buttonTheme.base
	const blockStyle = buttonTheme.block
	const sizeStyles = {
		large: buttonTheme.size.large,
		medium: buttonTheme.size.medium,
		small: buttonTheme.size.small,
	}
	const layoutStyles = {
		primary: buttonTheme.layout.primary,
		outline: buttonTheme.layout.outline,
	}
	const activeStyles = {
		primary: buttonTheme.active.primary,
		outline: buttonTheme.active.outline,
	}
	const disabledStyles = {
		primary: buttonTheme.disabled.primary,
		outline: buttonTheme.disabled.outline,
	}

	const {
		tag = 'button',
		size = 'medium',
		layout = 'primary',
		disabled = false,
		block = false,
		children,
		className,
		...other
	} = props

	warn(!children, 'Button', 'you must pass a children to Button')

	const Component = tag
	const cls = clsx(
		baseStyle,
		sizeStyles[size],
		layoutStyles[layout],
		block ? blockStyle : null,
		disabled ? disabledStyles[layout] : activeStyles[layout],
		className,
	)

	return (
		<Component ref={ref} className={cls} disabled={disabled} {...other}>
			{' '}
			{children}
		</Component>
	)
})

export default Button
