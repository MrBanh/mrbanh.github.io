module.exports = {
	email: "tonybanh@live.com",
	socialMedia: [
		{
			name: "GitHub",
			url: "https://github.com/MrBanh",
			icon: ""
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/tony-banh/",
			icon: ""
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
			id: "",
			internalLink: false
		}
	],
	skills: [
		{
			icon: "/icons/html.svg",
			name: "HTML"
		},
		{
			icon: "/icons/css.svg",
			name: "CSS"
		},
		{
			icon: "/icons/javascript.svg",
			name: "JavaScript"
		},
		{
			icon: "/icons/python.svg",
			name: "Python"
		},
		{
			icon: "/icons/react.svg",
			name: "React.js"
		},
		{
			icon: "/icons/nextjs.svg",
			name: "Next.js"
		},
		{
			icon: "/icons/mongodb.svg",
			name: "MongoDB"
		},
		{
			icon: "/icons/nodejs.svg",
			name: "Node.js"
		},
		{
			icon: "/icons/expressjs.svg",
			name: "Express.js"
		},
		{
			icon: "/icons/tailwindcss.svg",
			name: "Tailwind"
		},
		{
			icon: "/icons/sass.svg",
			name: "Sass"
		},
		{
			icon: "/icons/git.svg",
			name: "Git"
		}
	],
	projects: [
		{
			name: "Park n' Go",
			description:
				"A full-stack web app for automating parking, created in collaboration with a group of students. Users can view their parking reservations, make a reservation, and view the parking status in real time. Administrators can manage parking spots, see financial reports, and manage users.",
			tech: [
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
					type: "GitHub",
					url: "https://git.io/JT9x3"
				},
				{
					type: "GitHub",
					url: "https://git.io/JT9xc"
				}
			]
		},
		{
			name: "Portfolio",
			description:
				"A personal portfolio website built with Next.js (React) and Tailwind CSS.",
			tech: [ "Next.js", "React", "TailwindCSS" ],
			img: "images/portfolio.png",
			yearCreated: "2020",
			links: [
				{
					type: "GitHub",
					url: "https://github.com/MrBanh/mrbanh.github.io"
				},
				{
					type: "demo",
					url: "https://mrbanh.vercel.app/"
				}
			]
		},
		{
			name: "Weather Forecast",
			description:
				"A fully responsive and accessible web app that pulls a 5-day weather forecast for any location. Bundled with Parcel.js, deployed to Netlify.",
			tech: [ "Sass", "Parcel.js", "OpenWeatherMap API" ],
			img: "images/weatherforecast.png",
			yearCreated: "2020",
			links: [
				{
					type: "GitHub",
					url: "https://github.com/MrBanh/Weather-Forecast"
				},
				{
					type: "demo",
					url: "https://tony-banh-weather-forecast.netlify.app"
				}
			]
		}
	]
};
