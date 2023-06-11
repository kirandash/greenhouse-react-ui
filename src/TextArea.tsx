import clsx from 'clsx'
import {
	forwardRef,
	InputHTMLAttributes,
	useContext,
	useRef,
	useState,
} from 'react'
import { ThemeContext } from './context/ThemeContext'
import { mergeRefs } from './utils/warning'

type TextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
	invalid?: boolean
	className?: string
	disabled?: boolean
	children?: React.ReactNode
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(props, ref) => {
		const { className, invalid, disabled, children, ...other } = props
		const { textarea } = useContext(ThemeContext)
		const textareaRef = useRef<HTMLTextAreaElement>(null)
		const [value, setValue] = useState(props.value || '')

		const baseStyles = textarea.base
		const invalidStyles = textarea.invalid
		const disabledStyles = textarea.disabled

		const hasValidation = invalid !== undefined
		const validationStyle = hasValidation
			? invalid
				? invalidStyles
				: null
			: null

		const cls = clsx(
			baseStyles,
			// don't apply disabledStyle if has valid
			!hasValidation && disabled && disabledStyles,
			validationStyle,
			className,
		)

		return (
			<div className="relative">
				<textarea
					className={cls}
					ref={mergeRefs([ref, textareaRef])}
					value={value}
					disabled={disabled}
					onChange={e => setValue(e.target.value)}
					{...other}
				>
					{children}
				</textarea>
			</div>
		)
	},
)

export default TextArea
