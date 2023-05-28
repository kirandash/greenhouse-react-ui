import React, { ImgHTMLAttributes, forwardRef, useContext } from 'react'
import clsx from 'clsx'
import { warn } from './utils/warning'
import { ThemeContext } from './context/ThemeContext'

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
	size?: 'large' | 'regular' | 'small'
	src: string
	alt: string
	className?: string
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
	const theme = useContext(ThemeContext)
	const { avatar: avatarTheme } = theme
	// Styles
	const baseStyle = avatarTheme.base
	const sizeStyles = {
		large: avatarTheme.size.large,
		regular: avatarTheme.size.regular,
		small: avatarTheme.size.small,
	}

	const { size = 'regular', src, alt, className, ...other } = props

	warn(!src, 'Avatar', 'you must pass a src to Avatar')
	warn(!alt, 'Avatar', 'you must pass an alt to Avatar')

	const cls = clsx(baseStyle, sizeStyles[size], className)

	return <img ref={ref} className={cls} src={src} alt={alt} {...other} />
})

export default Avatar
