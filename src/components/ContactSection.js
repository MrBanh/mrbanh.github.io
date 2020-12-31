import Button from "./Button";
import { SocialMediaIcons } from "./SocialMediaIcons";

const ContactSection = () => {
	return (
		<section data-scroll id="contact" className="flex section-y section-x">
			<div className="m-auto w-full h-full">
				<div className="
				text-center
				flex
				flex-col
				m-auto
				justify-center
				items-center
				max-w-xl
				">
					<h2>Want to Talk?</h2>
					<br />
					<p>
						I'm currently looking for opportunities to transition
						into software engineering and development. Please feel
						free to reach out if I fit as a candidate. If you just
						want to say hi or ask a question, my inbox is also open.
					</p>

					<div className="my-12">
						<Button href="mailto:tonybanh@live.com" target="_blank">
							Let's Talk!
							{"\u{1F44B}"}
						</Button>
					</div>

					<div>
						<h3>Other ways to contact me:</h3>
						<SocialMediaIcons />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
