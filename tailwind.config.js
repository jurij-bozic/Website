module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	// purge: ["./src/**/*.html", "./src/**/*.{js, jsx, ts, tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#8b8b8b99',
					secondary: '#707070',
					accent: '#0074d9',
					accentDark: '#001F3F',
				},
			},
			fontFamily: {
				sans: ['var(--font-roboto)'],
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '1rem',
					lg: '2rem',
					xl: '4rem',
					'2xl': '2rem',
				},
				center: true,
			},
		},
	},
	plugins: [],
};
