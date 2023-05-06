import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TextArea from '../TextArea'
import theme from '../themes/default'
const { textarea: textareaTheme } = theme

describe('TextArea', () => {
	it('should contain base classes', () => {
		render(<TextArea />)
		const textarea = screen.getByRole('textbox')
		expect(textarea).toHaveClass(textareaTheme.base)
	})
	it('should contain invalid classes', () => {
		render(<TextArea invalid />)
		const textarea = screen.getByRole('textbox')
		expect(textarea).toHaveClass(textareaTheme.invalid)
	})
	it('should contain disabled classes', () => {
		render(<TextArea disabled />)
		const textarea = screen.getByRole('textbox')
		expect(textarea).toHaveClass(textareaTheme.disabled)
	})
	it('should not contain disabled class when valid', () => {
		render(<TextArea />)
		const textarea = screen.getByRole('textbox')
		expect(textarea).not.toHaveClass(textareaTheme.disabled)
	})
})
