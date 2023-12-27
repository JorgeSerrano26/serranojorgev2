/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			letterSpacing: {
				1: "-0.10em",
			},
			textColor: {
				pinky: "#D4ADFC",
			},
		},
		fontFamily: {
			mono: ['"JetBrains Mono"', "monospace"],
		},
	},
	plugins: [],
};
