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
		<Icon href="https://github.com/MrBanh" aria-label="GitHub">
			<Github className="overflow-visible" />
		</Icon>

		<Icon
			href="https://www.linkedin.com/in/tony-banh/"
			aria-label="LinkedIn"
		>
			<LinkedIn className="overflow-visible" />
		</Icon>
	</div>
);
