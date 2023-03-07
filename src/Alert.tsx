import clsx from 'clsx'
import { forwardRef, HTMLAttributes, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import circledcheck from './assets/icons/circled-check.svg'
import circledinfo from './assets/icons/circled-info.svg'
import closewhite from './assets/icons/close-white.svg'

type AlertProps = HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode
	type: 'success' | 'error'
	onClose?: () => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
	const { alert } = useContext(ThemeContext)
	const { className, children, type = 'success', onClose, ...other } = props
	const baseStyle = alert.base
	const typeStyles = alert[type]

	const cls = clsx(baseStyle, typeStyles, className)
	const icon = type === 'success' ? circledcheck : circledinfo
	return (
		<div role="alert" ref={ref} className={cls} {...other}>
			<img src={icon} alt="icon" />
			<span>{children}</span>
			{onClose && (
				<button onClick={onClose} className="ml-auto">
					<img src={closewhite} alt="Close" />
				</button>
			)}
		</div>
	)
})

export default Alert
