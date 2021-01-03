import React from "react";
import Head from "next/head";

const CustomHead = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<meta
			name="description"
			content="Tony Banh is an aspiring software engineer based in the Bay Area."
		/>
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
);

export default CustomHead;
