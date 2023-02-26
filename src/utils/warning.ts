export const warn = (assertion: boolean, scope: string, message: string) => {
	if (process.env.NODE_ENV !== 'production' && assertion) {
		console.warn(`[Greenhouse warn]: (${scope}): ${message}`)
	}
}
