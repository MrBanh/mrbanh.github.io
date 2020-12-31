import { useEffect, useState } from "react";
import Button from "./Button";

import { TRANSITION_ON_SCROLL as t } from "../utils/util";

const IntroSection = () => {
	const [ show, setShow ] = useState(false);

	useEffect(
		() => {
			const timeOut = setTimeout(() => {
				setShow(true);
			}, 100);
			return () => clearTimeout(timeOut);
		},
		[ show ]
	);

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
				<div
					className={`inline-block
					${t.getRequiredTransitionClasses()}
					${t.getHideShowClasses(show)}`}
				>
					<h1 className="leading-snug">Tony Banh</h1>
				</div>

				<div
					className={`
			text-4xl
			font-bold
			text-gray-400
			pb-4
			sm:text-5xl
			md:text-6xl
			lg:text-7xl
			xl:text-8xl
			delay-300
			${t.getRequiredTransitionClasses()}
			${t.getHideShowClasses(show)}
			`}
				>
					<p>I build websites and stuff.</p>
				</div>

				<div
					className={`font-mono
					delay-500
					${t.getRequiredTransitionClasses()}
					${t.getHideShowClasses(show)}`}
				>
					<p>// Software Engineer</p>
					<p>// Based in Bay Area</p>
				</div>
				<div
					className={`mt-12
				delay-700
				${t.getRequiredTransitionClasses()}
				${t.getHideShowClasses(show)}`}
				>
					<Button href="mailto:tonybanh@live.com" target="_blank">
						Contact Me
					</Button>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
