import Icon from "@components/icon";

const Skill = ({ name }) => (
	<li className="
	flex
	items-center
	">
		<span
			className="h-full w-4 flex flex-col justify-center items-center"
			aria-hidden="true"
		>
			<Icon name={name} />
		</span>
		<span className="pl-2">{name}</span>
	</li>
);

export default Skill;
