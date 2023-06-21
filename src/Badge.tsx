import React, { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { warn } from './utils/warning'
import { ThemeContext } from './context/ThemeContext'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & { 
    children: React.ReactNode,
    className?: string
    color?: 'neutral' | 'success' | 'danger' | 'warning'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
    const theme = React.useContext(ThemeContext)
    const { badge: badgeTheme } = theme

    const baseStyle = badgeTheme.base
    const layoutStyles = {
		neutral: badgeTheme.neutral,
		success: badgeTheme.success,
        danger: badgeTheme.danger,
        warning: badgeTheme.warning
	}

    const {
        children,
        className,
        color = 'neutral',
        ...other
    } = props

    warn(!children, 'Badge', 'you must pass a children to the Badge component')
    
    const cls = clsx(
		baseStyle,
        layoutStyles[color]
	)
    
    return (
        <span ref={ref} className={cls} {...other}>
            {children}
        </span>
    )
})

export default Badge
