import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Badge from '../Badge'
import theme from '../themes/default'

describe('Badge', () => {
	it('renders without crashing', () => {
		const { container } = render(<Badge>Test</Badge>)
		expect(container.firstChild).toBeInTheDocument()
	})

	it('renders children correctly', () => {
		render(<Badge>Test</Badge>)
		expect(screen.getByText('Test')).toBeInTheDocument()
	})

	it('applies the correct class for color', () => {
		const { container } = render(<Badge color="danger">Test</Badge>)
		expect(container.firstChild).toHaveClass(theme.badge.danger)
	})

	it('applies the correct class for neutral color when color prop is not provided', () => {
		const { container } = render(<Badge>Test</Badge>)
		expect(container.firstChild).toHaveClass(theme.badge.neutral)
	})

	it('applies custom classes when provided', () => {
		const { container } = render(<Badge className="custom-class">Test</Badge>)
		expect(container.firstChild).toHaveClass('custom-class')
	})

	it('forwards ref to the span element', () => {
		const ref = React.createRef<HTMLSpanElement>()
		render(<Badge ref={ref}>Test</Badge>)
		expect(ref.current).toBeInstanceOf(HTMLSpanElement)
	})
})
