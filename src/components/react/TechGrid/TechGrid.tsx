import { arrayWithKeyGenerator } from "@/utils/common.utils"

export function TechGrid() {
	const verticalLines = arrayWithKeyGenerator(30)
	const horizontalLines = arrayWithKeyGenerator(20)
	const particles = arrayWithKeyGenerator(15)

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
			{/* Flat grid container */}
			<div className="absolute inset-0">
				{/* Vertical lines */}
				{verticalLines.map(({ value, key }) => (
					<div
						key={`v-${key}`}
						className="absolute h-full w-px"
						style={{
							left: `${(value / verticalLines.length) * 100}%`,
							background:
								value % 5 === 0
									? "linear-gradient(to bottom, transparent, rgba(107,63,255,0.4) 20%, rgba(107,63,255,0.4) 80%, transparent)"
									: "linear-gradient(to bottom, transparent, rgba(107,63,255,0.15) 20%, rgba(107,63,255,0.15) 80%, transparent)",
						}}
					/>
				))}

				{/* Horizontal lines */}
				{horizontalLines.map(({ value, key }) => (
					<div
						key={`h-${key}`}
						className="absolute w-full h-px"
						style={{
							top: `${(value / horizontalLines.length) * 100}%`,
							background:
								value % 5 === 0
									? "linear-gradient(to right, transparent, rgba(107,63,255,0.4) 20%, rgba(107,63,255,0.4) 80%, transparent)"
									: "linear-gradient(to right, transparent, rgba(107,63,255,0.15) 20%, rgba(107,63,255,0.15) 80%, transparent)",
						}}
					/>
				))}

				{/* Intersection dots on main grid lines */}
				{verticalLines
					.filter((_, i) => i % 5 === 0)
					.map((vi) =>
						horizontalLines
							.filter((_, i) => i % 5 === 0)
							.map((hi) => (
								<div
									key={`dot-${vi}-${hi}`}
									className="absolute w-1 h-1 rounded-full bg-[#6b3fff] shadow-[0_0_8px_rgba(107,63,255,0.6)]"
									style={{
										left: `${(vi.value / verticalLines.length) * 100}%`,
										top: `${(hi.value / horizontalLines.length) * 100}%`,
										transform: "translate(-50%, -50%)",
									}}
								/>
							)),
					)}

				{/* Animated glow lines */}
				<div
					className="absolute w-full h-px animate-scan-vertical opacity-25"
					style={{
						background:
							"linear-gradient(to right, transparent, rgba(107,63,255,0.8), transparent)",
						boxShadow: "0 0 1px rgba(107,63,255,0.6)",
						top: "30%",
					}}
				/>
				<div
					className="absolute h-full w-px animate-scan-horizontal opacity-25"
					style={{
						background:
							"linear-gradient(to bottom, transparent, rgba(167,139,250,0.8), transparent)",
						boxShadow: "0 0 1px rgba(167,139,250,0.6)",
						left: "60%",
					}}
				/>
			</div>

			{/* Corner accents */}
			<div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#6b3fff] opacity-40" />
			<div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#6b3fff] opacity-40" />
			<div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#6b3fff] opacity-40" />
			<div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#6b3fff] opacity-40" />

			{/* Subtle particles */}
			<div className="absolute inset-0">
				{particles.map(({ value, key }) => (
					<div
						key={`particle-${key}`}
						className="absolute w-1 h-1 rounded-full bg-[#a78bfa] animate-pulse-particle"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 2}s`,
							opacity: 0.2 + Math.random() * 0.3,
						}}
					/>
				))}
			</div>

			{/* Vignette overlay */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(circle at 50% 50%, transparent 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.8) 100%)",
				}}
			/>
		</div>
	)
}
