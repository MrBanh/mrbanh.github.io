import MenuOpen from "../../public/icons/MenuOpen.svg";

export const HamburgerMenuOpenIcon = (props) => (
	<div className="
				flex
				lg:hidden
			">
		<button
			type="button"
			className={`
					m-auto
					transform
					transition-color transition-transform duration-150
					text-lightBlue-600
					rounded
					hover:scale-110
					focus:scale-110
					focus:outline-none
					`}
			aria-label="toggle menu"
			onClick={() => props.setIsOpen(true)}
		>
			<MenuOpen className="w-12 h-12 fill-current" />
		</button>
	</div>
);
