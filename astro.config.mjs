// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

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
})
