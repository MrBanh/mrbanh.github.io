import Head from "next/head";

import Header from "../components/Header";
import { IntroSection } from "../components/IntroSection";

export default function Home(){
	return (
		<div className="h-screen container mx-auto px-8 font-yantra">
			<Head>
				<title>Tony Banh's Portfolio</title>
				<link
					rel="light-apple-touch-icon"
					sizes="180x180"
					href="/favicons/light-apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/light-favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/light-favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/light-site.webmanifest" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Header />
			<main>
				<IntroSection />
			</main>

			<footer />
		</div>
	);
}
