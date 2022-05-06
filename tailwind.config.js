const colors = require('tailwindcss/colors')

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"like-button":
					"url('https://icooon-mono.com/i/icon_14002/icon_140020_256.png')",
			}),
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				stone: colors.stone,
				emerald: colors.emerald,
				indigo: colors.indigo,
				teal: colors.teal,
				yellow: colors.yellow,
				sky: colors.sky,
				cyan: colors.cyan,
				violet: colors.violet,
				blueGray: colors.blueGray,
				coolGray: colors.coolGray,
				warmGray: colors.warmGray,
				trueGray: colors.trueGray,
				rose: colors.rose,
				fuchsia: colors.fuchsia,
				amber:colors.amber,
				lime:colors.lime,
				orange:colors.orange,
			},
		},
	},
	variants: {
		extend: {
		backgroundImage: ['responsive', 'hover', 'focus'],
		},
		plugins: [],
	}
}