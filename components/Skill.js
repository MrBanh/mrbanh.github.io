export const Skill = ({ icon, name }) => (
	<li className="
	flex
	items-center
	">
		<img className="h-4" src={icon} alt={`${name} icon`} />
		<span className="pl-2">{name}</span>
	</li>
);
