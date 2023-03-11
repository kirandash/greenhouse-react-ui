import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
	it('should not contain close icon by default', () => {
		render(<Input />)
		const closeIcon = screen.queryByAltText('close')
		expect(closeIcon).not.toBeInTheDocument()
	})
	it('should contain close icon after typing', async () => {
		const user = userEvent.setup()
		render(<Input />)
		const input = screen.getByRole('textbox')
		await act(async () => {
			await user.type(input, 'kiran')
		})
		await waitFor(() => {
			const closeIcon = screen.getByAltText('close')
			expect(closeIcon).toBeInTheDocument()
		})
	})
	it('should clear the value when close icon is clicked', async () => {
		const user = userEvent.setup()
		render(<Input />)
		const input = screen.getByRole('textbox')
		await act(async () => {
			await user.type(input, 'kiran')
		})
		const closeButton = screen.getByRole('button')
		expect(closeButton).toBeInTheDocument()
		await act(async () => {
			await user.click(closeButton)
		})
		expect(input).toHaveValue('')
	})
	it('should not contain show icon by default when type is password', () => {
		render(<Input type="password" />)
		const showIcon = screen.queryByAltText('show')
		expect(showIcon).not.toBeInTheDocument()
	})
	it('should contain show icon after typing when type is password', async () => {
		const user = userEvent.setup()
		render(<Input type="password" data-testid="password-input" />)
		const input = screen.getByTestId('password-input')
		await act(async () => {
			await user.type(input, 'kiran')
		})
		await waitFor(() => {
			const showIcon = screen.getByAltText('show')
			expect(showIcon).toBeInTheDocument()
		})
	})
	it('should contain hide icon after clicking show icon when type is password', async () => {
		const user = userEvent.setup()
		render(<Input type="password" data-testid="password-input" />)
		const input = screen.getByTestId('password-input')
		await act(async () => {
			await user.type(input, 'kiran')
		})
		const showButton = screen.getByRole('button')
		await act(async () => {
			await user.click(showButton)
		})
		await waitFor(() => {
			const hideIcon = screen.getByAltText('hide')
			expect(hideIcon).toBeInTheDocument()
			expect(input).toHaveAttribute('type', 'text')
		})
	})
	it('should contain show icon after clicking hide icon when type is password', async () => {
		const user = userEvent.setup()
		render(<Input type="password" data-testid="password-input" />)
		const input = screen.getByTestId('password-input')
		await act(async () => {
			await user.type(input, 'kiran')
		})
		const showButton = screen.getByRole('button')
		await act(async () => {
			await user.click(showButton)
		})
		const hideButton = screen.getByRole('button')
		await act(async () => {
			await user.click(hideButton)
		})
		await waitFor(() => {
			const showIcon = screen.getByAltText('show')
			expect(showIcon).toBeInTheDocument()
			expect(input).toHaveAttribute('type', 'password')
		})
	})
})
