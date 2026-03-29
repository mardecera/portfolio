import { cva } from "class-variance-authority"

export const buttonStyles = cva(
	[
		"inline-flex items-center justify-center gap-2",
		"px-6 py-2.5 rounded-full min-h-11 w-fit",
		"font-medium transition cursor-pointer",
	].join(" "),
	{
		variants: {
			variant: {
				primary: "bg-primary-600 text-white hover:bg-primary-700",
				secondary:
					"bg-white/5 text-white outline-1 outline-white/20 hover:bg-white/20",
				outline: "outline-2 outline-gray-200 text-black hover:bg-gray-100",
			},
			size: {
				sm: "text-sm px-3 py-1.5",
				md: "text-[14px]",
				lg: "text-lg px-8 py-3",
			},
			disabled: {
				true: "opacity-30 cursor-not-allowed select-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
)
