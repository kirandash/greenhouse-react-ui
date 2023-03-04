import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Input from '../Input'
import theme from '../themes/default'
const { input: inputTheme } = theme

describe('Input', () => {
	it('should contain base classes', () => {
		render(<Input />)
		const input = screen.getByRole('textbox')
		expect(input).toHaveClass(inputTheme.base)
	})
	it('should contain invalid classes', () => {
		render(<Input invalid />)
		const input = screen.getByRole('textbox')
		expect(input).toHaveClass(inputTheme.invalid)
	})
	it('should contain disabled classes', () => {
		render(<Input disabled />)
		const input = screen.getByRole('textbox')
		expect(input).toHaveClass(inputTheme.disabled)
	})
	it('should not contain disabled class when valid', () => {
		render(<Input />)
		const input = screen.getByRole('textbox')
		expect(input).not.toHaveClass(inputTheme.disabled)
	})
})
