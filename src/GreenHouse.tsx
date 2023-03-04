import React from 'react'
import { deepMerge } from './utils/deepMerge'
import defaultTheme from './themes/default'
import { ThemeContext } from './context/ThemeContext'

const GreenHouse = ({
	children,
	theme,
}: {
	children: React.ReactNode
	theme?: object
}) => {
	const mergedTheme = deepMerge(defaultTheme, theme)
	return (
		<ThemeContext.Provider value={mergedTheme}>
			{children}
		</ThemeContext.Provider>
	)
}

export default GreenHouse
