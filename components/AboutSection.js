import { Background } from "./Background";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";

const AboutSection = () => {
	return (
		<section id="about" className="
		min-h-section
		pt-section
		">
			<h2>About Me</h2>

			{/* About Content */}
			<div>
				<div>
					<Background />
					<Experience />
					<Education />
					<Skills />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
