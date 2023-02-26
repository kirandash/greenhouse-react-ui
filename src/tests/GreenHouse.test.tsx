// import jest-dom to be able to access jest-dom matchers ex: getByText
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '../Button'
import GreenHouse from '../GreenHouse'
import defaultTheme from '../themes/default'

const { button: buttonTheme } = defaultTheme

describe('GreenHouse context', () => {
	it('should use defaultTheme styles', () => {
		render(
			<GreenHouse theme={defaultTheme}>
				<Button>Primary</Button>
			</GreenHouse>,
		)
		expect(screen.getByText('Primary')).toHaveClass(buttonTheme.base)
	})

	it('should extend theme', () => {
		const expected = 'bg-slate-50'
		const theme = {
			button: {
				base: 'bg-slate-50',
			},
		}
		render(
			<GreenHouse theme={theme}>
				<Button>Primary</Button>
			</GreenHouse>,
		)
		expect(screen.getByText('Primary')).toHaveClass(expected)
		expect(screen.getByText('Primary')).not.toHaveClass(buttonTheme.base)
	})
})
