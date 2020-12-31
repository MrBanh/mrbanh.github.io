import React, { useEffect } from "react";
import ScrollOut from "scroll-out";

import { CustomHead } from "../src/components/CustomHead";
import Header from "../src/components/Header";
import IntroSection from "../src/components/IntroSection";
import AboutSection from "../src/components/AboutSection";
import ProjectsSection from "../src/components/ProjectsSection";
import ContactSection from "../src/components/ContactSection";
import Footer from "../src/components/Footer";

export default function Home(){
	useEffect(() => {
		// scroll-out
		const so = ScrollOut({
			once: true,
			threshold: 0.25
		});

		// Handling page refresh
		window.addEventListener("beforeunload", () => {
			const hash = window.location.hash;
			if (!hash) {
				// Scroll to top of index page on reload with '/'
				window.scrollTo(0, 0);
			} else {
				// If hash in param on page reload, scroll to specified section
				const el = document.getElementById(hash.slice(1));
				if (el) {
					el.scrollIntoView();
				}
			}
		});

		return () => {
			so.teardown();
		};
	}, []);

	return (
		<div className="font-sans text-gray-600 font-medium">
			<CustomHead />
			<Header />
			<main className="
			container
			flex
			flex-col
			items-center
			mx-auto

			px-6
			sm:px-12
			md:px-20
			lg:px-28
			xl:px-36
			">
				<IntroSection />
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}
