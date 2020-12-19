import { School } from "./School";
import education from "../src/assets/education";

export const Education = () => (
	<div>
		<h3>Education</h3>
		<ul>
			{education.map((data, idx) => {
				return <School {...data} key={idx} />;
			})}
		</ul>
	</div>
);
