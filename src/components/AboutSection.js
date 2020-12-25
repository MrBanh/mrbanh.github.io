import { Background } from "./Background";
import { Skills } from "./Skills";

const AboutSection = () => {
	return (
		<section id="about" className="
		section-y
		section-x
		">
			<h2 className="mb-8">About Me</h2>

			{/* About Content */}
			<div className="
			md:grid
			md:grid-cols-5
			md:gap-x-12
			">
				<div className="
				md:col-span-3
				">
					<Background />
					<Skills />
				</div>

				<div className="
				flex
				mt-12
				mx-auto
				justify-center
				items-center
				max-w-xs
				md:mt-0
				md:col-span-2
				">
					<img src="/avatar.svg" alt="avatar" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
