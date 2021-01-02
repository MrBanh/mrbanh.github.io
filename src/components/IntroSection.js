import { email } from "@config";

import Button from "@components/Button";

const IntroSection = () => {
	return (
		<section
			aria-label="Introduction"
			className="
		min-h-screen
		select-none
		flex
		section-y
		section-x
		"
		>
			<div className="
			m-auto
			w-full
			h-full
			">
				<div data-scroll className="inline-block delay-100">
					<h1 className="leading-snug">Tony Banh</h1>
				</div>

				<div
					data-scroll
					className="text-4xl font-bold text-gray-400 pb-4 delay-300
				sm:text-5xl
				md:text-6xl
				lg:text-7xl
				xl:text-8xl
				"
				>
					<p>I build websites and stuff.</p>
				</div>

				<div data-scroll className="font-mono delay-500">
					<p aria-label="I'm a software engineer">
						// Software Engineer
					</p>
					<p aria-label="Based in the Bay Area">
						// Based in the Bay Area
					</p>
				</div>
				<div data-scroll className="mt-12 delay-700">
					<Button href={`mailto:${email}`} target="_blank">
						Contact Me
					</Button>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
