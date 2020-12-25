import { Skill } from "./Skill";
import skills from "../assets/skills";

export const Skills = () => (
	<div>
		<div>
			<p>A few technologies I'm familiar with:</p>
		</div>
		<br/>
		<div>
			<ul className="
			grid
			grid-flow-row
			grid-cols-2
			gap-4
			font-mono

			md:grid-cols-3
			">
				{skills.map((data, idx) => {
					return <Skill {...data} key={idx} />;
				})}
			</ul>
		</div>
	</div>
);
