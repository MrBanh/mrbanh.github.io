export const Skill = ({ icon, name }) => (
	<li className="
		flex
		flex-col
		items-center
		text-center
	">
		<img className="h-12 w-12" src={icon} alt={`${name} icon`} />
		<p>{name}</p>
	</li>
);
