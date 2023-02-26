import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ThemeContext, ThemeProvider } from '../context/ThemeContext'

describe('ThemeProvider', () => {
	it('should access value from Provider', () => {
		render(
			<ThemeProvider value={{ button: { base: 'test-class' } }}>
				<ThemeContext.Consumer>
					{value => (
						<span data-testid="span" className={value.button.base}>
							test element
						</span>
					)}
				</ThemeContext.Consumer>
			</ThemeProvider>,
		)
		expect(screen.getByTestId('span')).toHaveClass('test-class')
	})
})
