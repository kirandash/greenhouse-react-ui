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
			primary: 'border border-green-500 bg-green-500 text-white',
			outline: 'border border-green-500 text-green-500',
		},
		active: {
			primary:
				'active:bg-green-600 hover:bg-green-600 hover:border-green-600 focus:shadow-outline-green',
			outline:
				'active:bg-transparent hover:bg-green-100 hover:border-green-100 focus:border-green-100 active:text-green-500 focus:shadow-outline-green',
		},
		disabled: {
			primary: 'opacity-50 cursor-not-allowed',
			outline: 'opacity-50 cursor-not-allowed bg-gray-300',
		},
	},
}
