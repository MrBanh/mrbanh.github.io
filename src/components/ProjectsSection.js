import { Projects } from "./Projects";

const ProjectsSection = () => {
	return (
		<section
			id="projects"
			aria-label="Projects"
			className="flex section-y section-x"
		>
			<div className="m-auto w-full h-full">
				<h2 data-scroll className="pb-8">
					Projects
				</h2>
				<Projects />
			</div>
		</section>
	);
};

export default ProjectsSection;
