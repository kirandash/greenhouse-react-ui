import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Avatar from '../Avatar'
import theme from '../themes/default'
const { avatar: avatarTheme } = theme

describe('Alert', () => {
	it('renders correctly', () => {
		render(<Avatar alt="Judith" src="https://i.pravatar.cc/300" />)
	})

	it('should contain the base class', () => {
		render(<Avatar alt="Judith" src="https://i.pravatar.cc/300" />)
		const avatar = screen.getAllByAltText('Judith')
		expect(avatar).toHaveClass(avatarTheme.base)
	})
	it('should render regular styles by default', () => {
		render(<Avatar alt="Judith" src="https://i.pravatar.cc/300" />)
		const avatar = screen.getAllByAltText('Judith')
		expect(avatar).toHaveClass(avatarTheme.size.regular)
	})
	it('should render large styles', () => {
		render(<Avatar alt="Judith" size="large" src="https://i.pravatar.cc/300" />)
		const avatar = screen.getAllByAltText('Judith')
		expect(avatar).toHaveClass(avatarTheme.size.large)
	})
	it('should render small styles', () => {
		render(<Avatar alt="Judith" size="small" src="https://i.pravatar.cc/300" />)
		const avatar = screen.getAllByAltText('Judith')
		expect(avatar).toHaveClass(avatarTheme.size.small)
	})
})
