import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Label from '../Label'
import theme from '../themes/default'
const { label: labelTheme } = theme

describe('Label', () => {
	it('should render', () => {
		render(<Label>Label</Label>)
		expect(screen.getByText('Label')).toBeInTheDocument()
	})
	it('should render with base styles', () => {
		render(<Label>Label</Label>)
		expect(screen.getByText('Label')).toHaveClass(labelTheme.base)
	})
	it('should render with disabled styles', () => {
		render(<Label disabled>Label</Label>)
		expect(screen.getByText('Label')).toHaveClass(labelTheme.disabled)
	})
	it('should render with className', () => {
		render(<Label className="test">Label</Label>)
		expect(screen.getByText('Label')).toHaveClass('test')
	})
})
