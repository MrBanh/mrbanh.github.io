import Head from "next/head";

import Header from "../components/Header";
import IntroSection from "../components/IntroSection";

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
			<main className="container mx-auto px-8">
				<IntroSection />
			</main>

			<footer />
		</div>
	);
}
