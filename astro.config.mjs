import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	experimental: {
		svg: true,
	},

	integrations: [react()],

	server: {
		host: true,
		port: 3000,
	},

	vite: {
		plugins: [tailwindcss()],
	},
})
