const colors = require("tailwindcss/colors");

module.exports = {
	purge: [ "./pages/**/*.js", "./src/components/**/*.js" ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				lightBlue: colors.lightBlue
			},
			height: {
				header: "100px"
			},
			maxWidth: {
				"1/2": "50%"
			},
			outline: {
				lightBlue: "2px solid #0284C7"
			},
			padding: {
				section: "100px"
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
