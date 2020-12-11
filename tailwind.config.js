const colors = require("tailwindcss/colors");

module.exports = {
	purge: [ "./pages/**/*.js", "./components/**/*.js" ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			teal: colors.teal,
			lightBlue: colors.lightBlue,
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue,
			pink: colors.pink
		},
		extend: {},
		fontFamily: {
			custom1: [ "Sora", "sans-serif" ],
			custom2: [ "Barlow", "sans-serif" ]
		},
		height: {
			belowNav: "calc(100vh - 120px)"
		},
		maxWidth: {
			"1/2": "50%"
		},
		minHeight: {
			"75px": "75px"
		}
	},
	variants: {
		extend: {
			borderStyle: [ "hover", "focus" ],
			borderWidth: [ "hover", "focus" ],
			animation: [ "hover", "focus", "group-hover" ]
		}
	},
	plugins: []
};
