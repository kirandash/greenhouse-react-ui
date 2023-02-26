import { createContext } from 'react'
import defaultTheme from '../themes/default'

export const ThemeContext = createContext(defaultTheme)

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export type ThemeProviderProps = {
	children?: React.ReactNode
	value?: any
}

export type ThemeContext = {
	[key: string]: any
}
