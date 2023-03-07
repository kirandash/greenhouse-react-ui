/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const greenhouse = require('../config')

module.exports = greenhouse({
	content: ['./src/**/*.{ts,tsx,jsx,js}'],
	theme: {
		extend: {},
	},
	plugins: [],
})
