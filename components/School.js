export const School = ({ institution, degree, GPA }) => (
	<li>
		<div>
			<span className="text-lightBlue-600">{institution}</span>
			<span> | {degree}</span>
		</div>
		<p className="font-normal pl-2">&#8627; {GPA} GPA</p>
	</li>
);
