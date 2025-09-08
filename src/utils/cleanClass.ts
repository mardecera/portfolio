/**
 * @description Filter out falsey values and join the remaining values with a space.
 * @param args - The arguments to be filtered and joined.
 * @returns The filtered and joined arguments.
 * @example
 * cleanClass("a", "b", "c", true, false, null, undefined)
 * // returns "a b c"
 */

export const cleanClass = (
	...args: (string | number | boolean | undefined | null)[]
) => {
	return args
		.filter(Boolean)
		.filter((arg) => arg !== true)
		.join(" ")
}
