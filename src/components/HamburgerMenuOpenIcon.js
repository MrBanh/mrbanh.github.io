import MenuOpen from "../../public/icons/MenuOpen.svg";

export const HamburgerMenuOpenIcon = (props) => (
	<div className="
				flex
				lg:hidden
			">
		<button
			type="button"
			className={`
					text-lightBlue-600
					m-auto
					transition
					duration-150
					transform
					rounded
					border-solid
					border-2
					border-transparent
					focus:outline-none
					hover:border-lightBlue-600
					focus:border-lightBlue-600
					`}
			aria-label="open navigation menu"
			onClick={() => props.setIsOpen(true)}
		>
			<MenuOpen className="w-12 h-12 fill-current" />
		</button>
	</div>
);
