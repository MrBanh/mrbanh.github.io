import { Background } from "./Background";
import { Skills } from "./Skills";

const AboutSection = () => {
	return (
		<section id="about" className="
		section-y
		section-x
		">
			<h2>About Me</h2>

			{/* About Content */}
			<div>
				<div>
					<Background />
					<Skills />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
