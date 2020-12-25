import workExperience from "../assets/workExperience";
import { Position } from "./Position";

export const Experience = () => (
	<div>
		<h3>Experience</h3>
		<ul>
			{workExperience.map((data, idx) => {
				return <Position {...data} key={idx} />;
			})}
		</ul>
	</div>
);
