module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"like-button":
					"url('https://icooon-mono.com/i/icon_14002/icon_140020_256.png')",
			}),
		},
	},
	variants: {
		extend: {
		backgroundImage: ['responsive', 'hover', 'focus'],
		},
		plugins: [],
	}
}