import { skills } from "@config";

import Skill from "@components/Skill";

const Skills = () => (
	<div>
		<div>
			<p>A few technologies I'm familiar with:</p>
			<br />
			<div>
				<ul className="
			grid
			grid-flow-row
			grid-cols-2
			gap-4
			font-mono

			md:grid-cols-3
			">
					{skills.map((skill, i) => {
						return <Skill name={skill} key={i} />;
					})}
				</ul>
			</div>
		</div>
	</div>
);

export default Skills;
