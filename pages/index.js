import Head from "next/head";
import Header from "../src/components/Header";
import IntroSection from "../src/components/IntroSection";
import AboutSection from "../src/components/AboutSection";
import ProjectsSection from "../src/components/ProjectsSection";
import ContactSection from "../src/components/ContactSection";

export default function Home(){
	return (
		<div className="font-sans text-gray-600 font-medium">
			<Head>
				<title>Tony Banh's Portfolio</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</Head>

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

			<footer />
		</div>
	);
}
