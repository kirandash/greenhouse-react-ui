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
	// Styles
	const baseStyle = theme.button.base
	const blockStyle = theme.button.block
	const sizeStyles = {
		large: theme.button.size.large,
		medium: theme.button.size.medium,
		small: theme.button.size.small,
	}
	const layoutStyles = {
		primary: theme.button.layout.primary,
		outline: theme.button.layout.outline,
	}
	const activeStyles = {
		primary: theme.button.active.primary,
		outline: theme.button.active.outline,
	}
	const disabledStyles = {
		primary: theme.button.disabled.primary,
		outline: theme.button.disabled.outline,
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
