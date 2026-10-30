import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @description Une las clases de Tailwind CSS.
 * @param inputs - Las clases a unir.
 * @returns Las clases unidas.
 */
export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs))
}
