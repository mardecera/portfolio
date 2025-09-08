import type { ImageMetadata } from "astro"

export type ProjectType = {
	title: string
	description: string
	technologies: string[]
	codeUrl: string | null
	pageUrl: string | null
	image: ImageMetadata
}
