import { useEffect, useRef } from "react";
import Button from "./Button";

import { TRANSITION_PROPS } from "../utils/util";

const IntroSection = () => {
	// Reference html elements
	const titleRef = useRef();
	const subTitleRef = useRef();
	const descRef = useRef();
	const buttonRef = useRef();
	const elements = [ titleRef, subTitleRef, descRef, buttonRef ];

	// Tailwind transitions for DOM elements
	const {
		startTransY,
		startOpacity,
		endTransY,
		endOpacity
	} = TRANSITION_PROPS;
	const startClass = TRANSITION_PROPS.startClass();

	useEffect(() => {
		// On mount, remove starting transition properties and add new tailwind transition properties
		elements.forEach((el, i) => {
			setTimeout(() => {
				el.current.classList.remove(startOpacity);
				el.current.classList.remove(startTransY);
				el.current.classList.add(endOpacity);
				el.current.classList.add(endTransY);
			}, i * 100 + 150);
		});
	}, []);

	return (
		<section className="
		min-h-screen
		select-none
		flex
		section-y
		section-x
		">
			<div data-scroll className="
			m-auto
			w-full
			h-full
			">
				<div ref={titleRef} className={`inline-block ${startClass}`}>
					<h1 className="leading-snug">Tony Banh</h1>
				</div>

				<div
					ref={subTitleRef}
					className={`
			text-4xl
			font-bold
			text-gray-400
			pb-4
			sm:text-5xl
			md:text-6xl
			lg:text-7xl
			xl:text-8xl
			${startClass}
			`}
				>
					<p>I build websites and stuff.</p>
				</div>

				<div ref={descRef} className={`font-mono ${startClass}`}>
					<p>// Software Engineer</p>
					<p>// Based in Bay Area</p>
				</div>
				<div ref={buttonRef} className={`mt-12 ${startClass}`}>
					<Button href="mailto:tonybanh@live.com" target="_blank">
						Contact Me
					</Button>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
