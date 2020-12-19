import { Skill } from "./Skill";
import skills from "../src/assets/skills";

export const Skills = () => (
	<div>
		<h3>Skills</h3>
		<ul>
			{skills.map((data, idx) => {
				return <Skill {...data} key={idx} />;
			})}
		</ul>
	</div>
);
