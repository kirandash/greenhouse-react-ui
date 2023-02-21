/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{tsx,jsx}'],
	theme: {
		colors: {
			green: {
				100: '#A9CD57',
				200: '#93BE4C',
				300: '#82B344',
				400: '#79AD40',
				500: '#6EA83D',
				600: '#67A137',
				700: '#5F9C34',
				800: '#55952F',
				900: '#498D29',
			},
			red: '#D53232',
			black: {
				100: '#E7E7E7',
				200: '#CFCFCF',
				300: '#9E9E9E',
				400: '#858585',
				500: '#6E6E6E',
				600: '#565656',
				700: '#3D3D3D',
				800: '#252525',
				900: '#0D0D0D',
			},
		},
		extend: {},
	},
	plugins: [],
}
