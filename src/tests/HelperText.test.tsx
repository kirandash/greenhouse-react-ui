import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HelperText from '../HelperText'
import defaultTheme from '../themes/default'

describe('HelperText', () => {
	it('renders', () => {
		render(<HelperText>HelperText</HelperText>)
		expect(screen.getByText(/HelperText/)).toBeInTheDocument()
	})

	it('should render with base styles', () => {
		render(<HelperText>HelperText</HelperText>)
		expect(screen.getByText(/HelperText/)).toHaveClass(
			defaultTheme.helperText.base,
		)
		expect(screen.getByText(/HelperText/)).not.toHaveClass(
			defaultTheme.helperText.valid,
			defaultTheme.helperText.invalid,
		)
	})

	it('should render with valid styles', () => {
		render(<HelperText valid>HelperText</HelperText>)
		expect(screen.getByText(/HelperText/)).toHaveClass(
			defaultTheme.helperText.valid,
		)
		expect(screen.getByText(/HelperText/)).not.toHaveClass(
			defaultTheme.helperText.invalid,
		)
	})

	it('should render with invalid styles', () => {
		render(<HelperText valid={false}>HelperText</HelperText>)
		expect(screen.getByText(/HelperText/)).toHaveClass(
			defaultTheme.helperText.invalid,
		)
		expect(screen.getByText(/HelperText/)).not.toHaveClass(
			defaultTheme.helperText.valid,
		)
	})

	it('should extend className', () => {
		render(<HelperText className="test">HelperText</HelperText>)
		expect(screen.getByText(/HelperText/)).toHaveClass('test')
	})

	it('should pass other props', () => {
		render(<HelperText id="test">HelperText</HelperText>)
		expect(screen.getByText(/HelperText/)).toHaveAttribute('id', 'test')
	})

	it('should render as ul', () => {
		render(
			<HelperText as="ul">
				<li>HelperText</li>
				<li>HelperText</li>
				<li>HelperText</li>
			</HelperText>,
		)
		expect(screen.getByRole('list')).toHaveClass(defaultTheme.helperText.base)
		expect(screen.getAllByRole('listitem')).toHaveLength(3)
	})
})
