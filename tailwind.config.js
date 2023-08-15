/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
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
