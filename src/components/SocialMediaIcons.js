import Icon from "./Icon";
import Github from "../../public/icons/github.svg";
import LinkedIn from "../../public/icons/linkedin.svg";

export const SocialMediaIcons = () => (
	<div className="
    flex
    flex-row
    justify-center
    items-center
    my-4
    ">
		<Icon
			target="_blank"
			href="https://github.com/MrBanh"
			className="p-2.5 h-12 w-12 mx-2"
		>
			<Github className="overflow-visible" />
		</Icon>

		<Icon
			target="_blank"
			href="https://www.linkedin.com/in/tony-banh/"
			className="h-12 w-12 p-2.5 mx-2"
		>
			<LinkedIn className="overflow-visible" />
		</Icon>
	</div>
);
