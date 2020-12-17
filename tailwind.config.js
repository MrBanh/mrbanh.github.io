const colors = require("tailwindcss/colors");

module.exports = {
	purge: [ "./pages/**/*.js", "./components/**/*.js" ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				lightBlue: colors.lightBlue
			},
			minHeight: {
				header: "80px"
			},
			margin: {
				section: "80px"
			},
			maxWidth: {
				"1/2": "50%"
			},
			height: {
				section: "calc(100vh - 80px)"
			}
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
