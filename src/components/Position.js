export const Position = ({ company, position, startDate, endDate }) => (
	<li className="
	mb-2
	">
		<div>
			<span className="text-lightBlue-600">{company}</span>
			<span> | {position}</span>
		</div>
		<p className="font-normal pl-2">
			&#8627; {startDate} - {endDate}
		</p>
	</li>
);
