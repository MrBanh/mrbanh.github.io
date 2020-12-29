import Button from "./Button";

const IntroSection = () => (
	<section className="
	flex
	flex-col
	justify-center
	items-start
	min-h-screen
	select-none
	section-y
	section-x
	">
		{/* Intro text / icons */}

		<div>
			<h1 className="leading-snug">Tony Banh</h1>
		</div>

		<div className="
		text-4xl
		font-bold
		text-gray-400
		pb-4
		sm:text-5xl
		md:text-6xl
		lg:text-7xl
		xl:text-8xl
		">
			<p>I build websites and stuff.</p>
		</div>

		<div className="
		font-mono
		">
			<p>// Software Engineer</p>
			<p>// Based in Bay Area</p>
		</div>
		<div className="mt-12">
			<Button href="mailto:tonybanh@live.com" target="_blank">
				Contact Me
			</Button>
		</div>
	</section>
);

export default IntroSection;
