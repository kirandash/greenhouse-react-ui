import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'
import theme from '../themes/default'

const { button: buttonTheme } = theme

describe('Base Button', () => {
	it('renders correctly', () => {
		render(<Button>Primary</Button>)
	})
	it('renders children when passed in', () => {
		const { getByText } = render(<Button>Text as children</Button>)
		expect(getByText(/Text as children/)).toBeInTheDocument()
	})

	it('should contain the base class', () => {
		render(<Button>Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.base)
	})

	it('should render primary medium button by default', () => {
		render(<Button>Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(
			buttonTheme.layout.primary,
			buttonTheme.size.medium,
		)
	})

	it('renders a block button when "block" prop is set', () => {
		render(<Button block>Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.block)
	})

	it('calls a function when clicked', async () => {
		const user = userEvent.setup()
		const handleClick = jest.fn()
		// TODO: Check type error for Button
		render(<Button onClick={handleClick}>Click me</Button>)
		const button = screen.getByRole('button')
		await user.click(button)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('should contain appropriate type attribute', () => {
		render(<Button type="submit">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveAttribute('type', 'submit')
	})

	it('should extend class', () => {
		render(<Button className="test">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('test')
	})
})

describe('Sizes', () => {
	it('renders a large button', () => {
		render(<Button size="large">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.size.large)
	})
	it('renders a medium button', () => {
		render(<Button size="medium">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.size.medium)
	})
	it('renders a small button', () => {
		render(<Button size="small">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.size.small)
	})
})

describe('Primary', () => {
	it('should contain primary bases classes', () => {
		render(<Button layout="primary">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.layout.primary)
	})
	it('should contain primary focus classes', () => {
		render(<Button layout="primary">Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.tab()
		expect(button).toHaveClass(
			'focus-visible:ring focus-visible:ring-primary-shade70/70',
		)
	})
	it('should contain primary active classes', () => {
		render(<Button layout="primary">Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(button).toHaveClass('active:bg-primary-tint50')
	})
	it('should contain primary disabled classes', () => {
		render(
			<Button layout="primary" disabled>
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.disabled.primary)
	})
	it('should not contain primary active class when disabled', () => {
		render(
			<Button layout="primary" disabled>
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).not.toHaveClass(buttonTheme.active.primary)
	})
})

describe('Outline', () => {
	it('should contain outline bases classes', () => {
		render(<Button layout="outline">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.layout.outline)
	})
	it('should contain outline focus classes', () => {
		render(<Button layout="outline">Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.tab()
		expect(button).toHaveClass(
			'focus-visible:ring focus-visible:ring-primary-shade70/30',
		)
	})
	it('should contain outline active classes', () => {
		render(<Button layout="outline">Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(button).toHaveClass('active:bg-transparent  active:text-primary')
	})
	it('should contain outline disabled classes', () => {
		render(
			<Button layout="outline" disabled>
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.disabled.outline)
	})
	it('should not contain outline active class when disabled', () => {
		render(
			<Button layout="outline" disabled>
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).not.toHaveClass(buttonTheme.active.outline)
	})
})

describe('Link', () => {
	it('should contain link bases classes', () => {
		render(<Button layout="link">Click me</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.layout.link)
	})
	it('should contain link focus classes', () => {
		render(<Button layout="link">Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.tab()
		expect(button).toHaveClass(
			'focus-visible:ring focus-visible:ring-primary-shade70/70',
		)
	})
	it('should contain link active classes', () => {
		render(<Button layout="link">Click me</Button>)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(button).toHaveClass('active:bg-transparent  active:text-primary')
	})
	it('should contain link disabled classes', () => {
		render(
			<Button layout="link" disabled>
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).toHaveClass(buttonTheme.disabled.link)
	})
	it('should not contain link active class when disabled', () => {
		render(
			<Button layout="link" disabled>
				Click me
			</Button>,
		)
		const button = screen.getByRole('button')
		expect(button).not.toHaveClass(buttonTheme.active.link)
	})
})
