import { type TailwindConfig, pixelBasedPreset } from "@react-email/components"

/** Colores alineados con `src/styles/theme.css` (@theme). Solo para templates React Email. */
export const emailTailwindConfig = {
	presets: [pixelBasedPreset],
	theme: {
		extend: {
			colors: {
				black: "#080808",
				primary: {
					50: "#e9ebff",
					100: "#d6daff",
					200: "#b6b9ff",
					300: "#8a8bff",
					400: "#6b5cff",
					500: "#5a37ff",
					600: "#5315ff",
					700: "#4c0bf7",
					800: "#3d0dc6",
					900: "#34149b",
					950: "#080316",
				},
				success: {
					50: "#f0fdf0",
					100: "#ddfbde",
					200: "#bcf6bf",
					300: "#88ed90",
					400: "#4ddb58",
					500: "#28d336",
					600: "#18a124",
					700: "#177e20",
					800: "#17641e",
					900: "#15521c",
					950: "#062d0b",
				},
				shark: {
					50: "#f5f6fa",
					100: "#ebedf3",
					200: "#d2d7e5",
					300: "#aab4cf",
					400: "#7c8db4",
					500: "#5b6e9c",
					600: "#475682",
					700: "#3b4769",
					800: "#333d59",
					900: "#2e354c",
				},
				email: {
					header: "#1d1d21",
					surface: "#f8f9ff",
				},
			},
		},
	},
} satisfies TailwindConfig
