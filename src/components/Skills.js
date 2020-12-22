import { Skill } from "./Skill";
import skills from "../assets/skills";

export const Skills = () => (
	<div>
		<h3>Skills</h3>
		<ul className="
		grid
		grid-flow-row
		grid-cols-3
		gap-4
		">
			{skills.map((data, idx) => {
				return <Skill {...data} key={idx} />;
			})}
		</ul>
	</div>
);
