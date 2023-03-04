// TODO: Add type for theme
export default {
	button: {
		base: 'inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none',
		block: 'w-full',
		size: {
			large: 'px-7 py-3.5 rounded text-base',
			medium: 'px-6 py-3 rounded text-sm',
			small: 'px-3 py-1 rounded text-sm',
		},
		layout: {
			primary: 'border border-primary bg-primary text-white',
			outline: 'border border-primary text-primary',
		},
		active: {
			primary:
				'active:bg-primary-shade25 hover:bg-primary-shade25 hover:border-primary-shade25 focus:shadow-outline-green',
			outline:
				'active:bg-transparent hover:bg-primary-shade70 hover:border-primary-shade70 focus:border-primary-shade70 active:text-primary focus:shadow-outline-green',
		},
		disabled: {
			primary: 'opacity-50 cursor-not-allowed',
			outline: 'opacity-50 cursor-not-allowed bg-gray-300',
		},
	},
	helperText: {
		base: 'text-xs tracking-wide font-normal',
		valid: 'hidden',
		invalid: 'text-red',
	},
	input: {
		base: 'block w-full text-xs px-3 py-4 focus:outline-none rounded border border-black-20 text-black-80 font-semibold tracking-wide',
		disabled: 'cursor-not-allowed opacity-50 bg-black-10',
		invalid: 'border-red',
	},
}
