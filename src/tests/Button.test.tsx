import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

// TODO: Add Separate type for Primary, Outline, Large and Small Buttons
describe('Button', () => {
	it('renders correctly', () => {
		render(<Button>Primary</Button>)
	})
	it('outline renders correctly', () => {
		render(<Button layout="outline">Primary</Button>)
	})
	it('large renders correctly', () => {
		render(<Button size="large">Primary</Button>)
	})
	it('small renders correctly', () => {
		render(<Button size="small">Primary</Button>)
	})
	it('renders children when passed in', () => {
		const { getByText } = render(<Button>Text as children</Button>)
		expect(getByText(/Text as children/)).toBeInTheDocument()
	})
	it('renders a block button when "block" prop is set', () => {
		render(<Button block>Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('w-full')
	})

	it('renders a button with custom size and layout', () => {
		render(
			<Button size="large" layout="outline">
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(
			'text-base',
			'px-7',
			'py-3.5',
			'border',
			'text-green-500',
		)
	})

	it('renders a disabled button when "disabled" prop is true', () => {
		render(<Button disabled>Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveAttribute('disabled')
		expect(button).toHaveClass('opacity-50', 'cursor-not-allowed')
	})

	it('calls a function when clicked', () => {
		const handleClick = jest.fn()
		// TODO: Check type error for Button
		render(<Button onClick={handleClick}>Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
