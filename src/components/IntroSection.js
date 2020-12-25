import Button from "./Button";

const IntroSection = () => (
	<section className="
	flex
	flex-col
	justify-center
	items-start
	h-screen
	select-none
	section-y
	section-x
	">
		{/* Intro text / icons */}

		<div className="
			text-6xl
			font-bold
			bg-clip-text
			bg-gradient-to-r from-teal-400 to-blue-500
			text-transparent
			sm:text-7xl
			md:text-8xl
			lg:text-9xl
			">
			<h1 className="
			leading-snug
			">Tony Banh</h1>
		</div>

		<div className="
		text-5xl
		font-bold
		text-gray-400
		pb-4
		sm:text-6xl
		md:text-7xl
		lg:text-8xl
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
