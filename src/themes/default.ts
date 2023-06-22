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
			primary: 'border border-primary-tint50 bg-primary-tint50 text-white',
			outline: 'border border-primary text-primary',
			link: 'underline text-primary !px-0 !py-0',
		},
		active: {
			primary:
				'active:bg-primary-tint50 focus-visible:ring focus-visible:ring-primary-shade70/70',
			outline:
				'active:bg-transparent active:text-primary focus-visible:ring focus-visible:ring-primary-shade70/30',
			link: 'active:bg-transparent active:text-primary focus-visible:ring focus-visible:ring-primary-shade70/70',
		},
		disabled: {
			primary: '!bg-black-20 !border-black-20 cursor-not-allowed',
			outline: '!border-black-20 !text-black-20 cursor-not-allowed',
			link: 'cursor-not-allowed !text-black-20',
		},
	},
	helperText: {
		base: 'text-xs tracking-wide font-normal block',
		valid: 'hidden',
		invalid: 'text-red',
	},
	input: {
		base: 'block w-full text-xs px-3 py-3.5 focus:outline-none rounded border border-black-20 text-black-80 font-semibold tracking-wide placeholder:text-black-70 placeholder:font-normal',
		disabled: 'cursor-not-allowed opacity-50 bg-black-10',
		invalid: 'border-red',
	},
	label: {
		base: 'block text-xs font-medium tracking-wide text-black-80',
		disabled: 'cursor-not-allowed opacity-50',
	},
	alert: {
		base: 'p-[18px] pl-5 text-white text-sm rounded-lg leading-5 max-w-[343px] flex gap-2.5',
		success: 'bg-primary-tint40',
		error: 'bg-red',
	},
	textarea: {
		base: 'block w-full text-xs px-3 py-3.5 focus:outline-none rounded border border-black-20 text-black-80 font-semibold tracking-wide placeholder:text-black-70 placeholder:font-normal',
		disabled: 'cursor-not-allowed opacity-50 bg-black-10',
		invalid: 'border-red',
	},
	avatar: {
		base: 'rounded-full',
		size: {
			large: 'w-10 h-10',
			regular: 'w-8 h-8',
			small: 'w-6 h-6',
		},
	},
	badge: {
		base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
		neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
		success:
			'text-primary-tint40 bg-primary-shade60 dark:bg-primary-tint40 dark:text-primary-shade60',
		danger: 'text-red-200 bg-red dark:text-red dark:bg-red-700',
		warning: 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600',
	},
}
