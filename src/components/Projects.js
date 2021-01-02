import { projects } from "@config";

import Project from "@components/Project";

const Projects = () => (
	<div>
		{projects.map((project, i) => {
			return <Project {...project} key={i} />;
		})}
	</div>
);

export default Projects;
