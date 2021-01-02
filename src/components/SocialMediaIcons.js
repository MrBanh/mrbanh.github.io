import { socialMedia } from "@config";

import IconWrapper from "@components/IconWrapper";
import Icon from "@components/icon";

const SocialMediaIcons = () => {
	return (
		<div className="
    flex
    flex-row
    justify-center
    items-center
    my-4
    ">
			{socialMedia.map((social, i) => {
				return (
					<IconWrapper
						href={social.url}
						aria-label={social.name}
						key={i}
					>
						<Icon name={social.name} />
					</IconWrapper>
				);
			})}
		</div>
	);
};

export default SocialMediaIcons;
