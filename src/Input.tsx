import clsx from 'clsx'
import {
	forwardRef,
	InputHTMLAttributes,
	useContext,
	useRef,
	useState,
} from 'react'
import { ThemeContext } from './context/ThemeContext'
import closeIcon from './assets/icons/10x10/close.svg'
import showIcon from './assets/icons/10x10/show.svg'
import hideIcon from './assets/icons/10x10/hide.svg'
import { mergeRefs } from './utils/warning'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
	invalid?: boolean
	className?: string
	disabled?: boolean
}

// TODO: Add Clear Button and Password Toggle
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, invalid, type = 'text', disabled, ...other } = props
	const { input } = useContext(ThemeContext)
	const [value, setValue] = useState(props.value || '')
	const [pwdIcon, setPwdIcon] = useState('show')
	const inputRef = useRef<HTMLInputElement>(null)

	const baseStyle = input.base
	const invalidStyle = input.invalid
	const disabledStyle = input.disabled

	const hasValidation = invalid !== undefined
	const validationStyle = hasValidation ? (invalid ? invalidStyle : null) : null

	const cls = clsx(
		baseStyle,
		// don't apply disabledStyle if has valid
		!hasValidation && disabled && disabledStyle,
		validationStyle,
		className,
	)

	const clearInput = () => {
		setValue('')
		inputRef?.current?.focus()
	}

	const togglePassword = () => {
		if (inputRef?.current?.type === 'password') {
			inputRef.current.type = 'text'
			setPwdIcon('hide')
		} else if (inputRef?.current?.type === 'text') {
			inputRef.current.type = 'password'
			setPwdIcon('show')
		}
	}

	return (
		<div className="relative">
			<input
				className={cls}
				type={type}
				{...other}
				ref={mergeRefs([ref, inputRef])}
				value={value}
				disabled={disabled}
				onChange={e => setValue(e.target.value)}
			/>
			{type !== 'password' && !!value && (
				<button
					type="button"
					onClick={clearInput}
					className="absolute top-[18px] right-4"
				>
					<img src={closeIcon} alt="close" />
				</button>
			)}
			{type === 'password' && !!value && (
				<button
					type="button"
					onClick={togglePassword}
					className="absolute top-[18px] right-4"
				>
					<img src={pwdIcon === 'hide' ? hideIcon : showIcon} alt={pwdIcon} />
				</button>
			)}
		</div>
	)
})

export default Input
