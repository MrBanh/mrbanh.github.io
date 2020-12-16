import { SocialMediaIcons } from "./SocialMediaIcons";

const IntroSection = () => (
	<section className="
	flex
	flex-col
	justify-around
	items-center
	h-section
	select-none

	lg:flex-row
	">
		{/* Intro text / icons */}
		<div className="">
			<h1 className="
			text-6xl
			pb-4
			bg-clip-text
			bg-gradient-to-r from-teal-400 to-blue-600
			text-transparent
			">
				Tony Banh
			</h1>
			<div className="mb-4">
				<h2 className="">// Software Developer</h2>
				<p className="">// Based in California</p>
			</div>

			<SocialMediaIcons />
		</div>

		{/* Intro image */}
		<div className="
		w-4/5
		lg:w-2/5
		">
			<img
				className="
			m-auto
			lg:ml-auto
			lg:mr-0
			"
				src="/intro_image.svg"
				alt="App development image"
			/>
		</div>
	</section>
);

export default IntroSection;
