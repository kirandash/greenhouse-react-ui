import { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { warn } from './utils/warning'

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
	const baseStyle =
		'inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none'
	const blockStyle = 'w-full'
	const sizeStyles = {
		large: 'px-7 py-3.5 rounded text-base',
		medium: 'px-6 py-3 rounded text-sm',
		small: 'px-3 py-1 rounded text-sm',
	}
	const layoutStyles = {
		primary: 'border border-green-500 bg-green-500 text-white',
		outline: 'border border-green-500 text-green-500',
	}
	const activeStyles = {
		primary:
			'active:bg-green-600 hover:bg-green-600 hover:border-green-600 focus:shadow-outline-green',
		outline:
			'active:bg-transparent hover:bg-green-100 hover:border-green-100 focus:border-green-100 active:text-green-500 focus:shadow-outline-green',
	}
	const disabledStyles = {
		primary: 'opacity-50 cursor-not-allowed',
		outline: 'opacity-50 cursor-not-allowed bg-gray-300',
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
