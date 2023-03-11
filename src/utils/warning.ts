import { LegacyRef, MutableRefObject, RefCallback } from 'react'

export const warn = (assertion: boolean, scope: string, message: string) => {
	if (process.env.NODE_ENV !== 'production' && assertion) {
		console.warn(`[Greenhouse warn]: (${scope}): ${message}`)
	}
}

export function mergeRefs<T = any>(
	refs: Array<MutableRefObject<T> | LegacyRef<T>>,
): RefCallback<T> {
	return value => {
		refs.forEach(ref => {
			if (typeof ref === 'function') {
				ref(value)
			} else if (ref != null) {
				;(ref as MutableRefObject<T | null>).current = value
			}
		})
	}
}
