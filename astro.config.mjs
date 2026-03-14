import netlify from "@astrojs/netlify"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import svgr from "vite-plugin-svgr"

// https://astro.build/config
export default defineConfig({
	site: "https://mardecera.com",
	i18n: {
		locales: ["en", "es"],
		defaultLocale: "es",

		routing: {
			prefixDefaultLocale: false,
		},
	},
	experimental: {
		svg: true,
		session: true,
	},
	integrations: [react()],
	server: {
		host: true,
		port: 3000,
	},
	vite: {
		plugins: [tailwindcss(), svgr()],
	},
	adapter: netlify(),
	output: "server",
})
