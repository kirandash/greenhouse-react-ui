import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Alert from '../Alert'
import theme from '../themes/default'
const { alert: alertTheme } = theme

describe('Alert', () => {
	it('renders correctly', () => {
		render(<Alert type="success">Primary</Alert>)
	})
	it('renders children when passed in', () => {
		const { getByText } = render(<Alert type="success">Text as children</Alert>)
		expect(getByText(/Text as children/)).toBeInTheDocument()
	})
	it('should contain the base class', () => {
		render(<Alert type="success">Click me</Alert>)
		const alert = screen.getByRole('alert')
		expect(alert).toHaveClass(alertTheme.base)
	})
	it('should render success styles', () => {
		render(<Alert type="success">Click me</Alert>)
		const alert = screen.getByRole('alert')
		expect(alert).toHaveClass(alertTheme.success)
	})
	it('should render error styles', () => {
		render(<Alert type="error">Click me</Alert>)
		const alert = screen.getByRole('alert')
		expect(alert).toHaveClass(alertTheme.error)
	})
	it('should extend class', () => {
		render(
			<Alert type="error" className="test">
				Click me
			</Alert>,
		)
		const alert = screen.getByRole('alert')
		expect(alert).toHaveClass('test')
	})
	it('should render close button when onClose is passed', async () => {
		const onClose = jest.fn()
		render(
			<Alert type="error" onClose={() => onClose}>
				Click me
			</Alert>,
		)
		expect(await screen.findByRole('button')).toBeInTheDocument()
	})
	it('should call onClose when close button is clicked', async () => {
		const onClose = jest.fn()
		render(
			<Alert type="error" onClose={onClose}>
				Click me
			</Alert>,
		)
		const closeButton = await screen.findByRole('button')
		closeButton.click()
		expect(onClose).toHaveBeenCalledTimes(1)
	})
	it('should not render close button when onClose is not passed', () => {
		render(<Alert type="error">Click me</Alert>)
		expect(screen.queryByRole('button')).not.toBeInTheDocument()
	})
	it('should render a icon', () => {
		render(<Alert type="error">Click me</Alert>)
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
})
