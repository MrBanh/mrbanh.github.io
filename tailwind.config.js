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
			blue: colors.blue
		},
		extend: {},
		height: {
			section: "calc(100vh - 100px)"
		},
		maxWidth: {
			"1/2": "50%"
		},
		maxHeight: {
			section: "calc(100vh - 100px)"
		},
		minHeight: {
			header: "100px"
		}
	},
	variants: {
		extend: {
			borderStyle: [ "hover", "focus" ],
			borderWidth: [ "hover", "focus" ],
			animation: [ "hover", "focus", "group-hover" ],
			fontSize: [ "hover", "focus" ]
		}
	},
	plugins: []
};
