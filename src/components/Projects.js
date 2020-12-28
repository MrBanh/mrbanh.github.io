import { Project } from './Project'
import projects from "../assets/projects";

export const Projects = () => (
	<div>
		{projects.map((data, idx) => {
			return <Project {...data} key={idx} />;
		})}
	</div>
);
