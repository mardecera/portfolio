import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @description Merge class names with Tailwind CSS classes.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 * @example
 * -> cn("bg-red-500", "text-white", "p-4")
 * -> "bg-red-500 text-white p-4"
 */
export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs))
}
