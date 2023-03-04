const deepMerge = require('deepmerge')

const colors = {
	primary: {
		DEFAULT: '#6EA83D',
		shade70: '#D6E7B0',
		shade60: '#C5DD8E',
		shade50: '#B4D36D',
		shade40: '#A9CD57',
		shade35: '#9CC451',
		shade30: '#93BE4C',
		shade25: '#8BB949',
		shade20: '#82B344',
		shade10: '#79AD40',
		tint10: '#67A137',
		tint20: '#5F9C34',
		tint30: '#55952F',
		tint40: '#498D29',
	},
	red: '#D53232',
	black: {
		10: '#E7E7E7',
		20: '#CFCFCF',
		30: '#B7B7B7',
		40: '#9E9E9E',
		50: '#858585',
		60: '#6E6E6E',
		70: '#565656',
		80: '#3D3D3D',
		90: '#252525',
		100: '#0D0D0D',
	},
}

const greenHouseConfig = {
	content: [
		'node_modules/greenhouse-react-ui/dist/defaultTheme.js',
		'node_modules/greenhouse-react-ui/dist/index.js',
	],
	theme: {
		colors,
	},
}

function arrayMergeFn(destinationArray, sourceArray) {
	return destinationArray.concat(sourceArray).reduce((acc, cur) => {
		if (acc.includes(cur)) return acc
		return [...acc, cur]
	}, [])
}

function wrapper(tailwindConfig) {
	return deepMerge(tailwindConfig, greenHouseConfig, {
		arrayMerge: arrayMergeFn,
	})
}

module.exports = wrapper
