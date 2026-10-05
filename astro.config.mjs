import react from "@astrojs/react"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
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
		clientPrerender: true,
	},
	env: {
		schema: {
			RESEND_API_KEY: envField.string({
				context: "server",
				access: "secret",
			}),
			CONTACT_FROM: envField.string({
				context: "server",
				access: "secret",
			}),
			CONTACT_REPLY_TO: envField.string({
				context: "server",
				access: "secret",
			}),
		},
	},
	integrations: [react()],
	server: {
		host: true,
		port: 3000,
	},
	vite: {
		optimizeDeps: {
			include: ["react-dom/client", "react-dom"],
		},
		plugins: [tailwindcss(), svgr()],
	},
	adapter: vercel(),
	output: "static",
})
