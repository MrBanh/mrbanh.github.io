module.exports = {
	email: "tonybanh@live.com",
	socialMedia: [
		{
			name: "GitHub",
			url: "https://github.com/MrBanh"
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/tony-banh/"
		}
	],
	navLinks: [
		{
			name: "About",
			url: "/#about",
			id: "about",
			internalLink: true
		},
		{
			name: "Projects",
			url: "/#projects",
			id: "projects",
			internalLink: true
		},
		{
			name: "Contact",
			url: "/#contact",
			id: "contact",
			internalLink: true
		},
		{
			name: "Resume",
			url:
				"https://drive.google.com/file/d/1V_4DicXo8RTdx9cHRFxAaOA37Jl0piSt/view?usp=sharing",
			id: "resume",
			internalLink: false
		}
	],
	skills: [
		"HTML",
		"CSS",
		"JavaScript",
		"Python",
		"React.js",
		"Next.js",
		"MongoDB",
		"Node.js",
		"Express.js",
		"Tailwind",
		"Sass",
		"Git"
	],
	projects: [
		{
			name: "Park n' Go",
			description:
				"A full-stack web app for automating parking, created in collaboration with a group of students. Users can view their parking reservations, make a reservation, and view the parking status in real time. Administrators can manage parking spots, see financial reports, and manage users.",
			builtWith: [
				"Express.js",
				"MongoDB",
				"Passport.js",
				"jQuery",
				"Bootstrap"
			],
			img: "images/parkngo.png",
			yearCreated: "2020",
			links: [
				{
					name: "GitHub",
					url: "https://git.io/JT9x3"
				},
				{
					name: "GitHub",
					url: "https://git.io/JT9xc"
				}
			]
		},
		{
			name: "Portfolio",
			description:
				"A personal portfolio website built with Next.js (React) and Tailwind CSS.",
			builtWith: [ "Next.js", "React", "TailwindCSS" ],
			img: "images/portfolio.png",
			yearCreated: "2020",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/MrBanh/mrbanh.github.io"
				},
				{
					name: "demo",
					url: "https://mrbanh.vercel.app/"
				}
			]
		},
		{
			name: "Weather Forecast",
			description:
				"A fully responsive and accessible web app that pulls a 5-day weather forecast for any location. Bundled with Parcel.js, deployed to Netlify.",
			builtWith: [ "Sass", "Parcel.js", "OpenWeatherMap API" ],
			img: "images/weatherforecast.png",
			yearCreated: "2020",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/MrBanh/Weather-Forecast"
				},
				{
					name: "demo",
					url: "https://tony-banh-weather-forecast.netlify.app"
				}
			]
		}
	]
};
