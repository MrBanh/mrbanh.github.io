import MenuClose from "../../public/icons/MenuClose.svg";

export const HamburgerMenuCloseIcon = (props) => (
	<div className="
					w-full
					flex
					lg:hidden
					">
		<button
			type="button"
			className="
						text-white
						ml-auto
						transform
						transition-all duration-150 ease-linear
						hover:scale-75
						focus:scale-75
						hover:rotate-45
						focus:rotate-45
						focus:outline-none
						"
			aria-label="toggle menu"
			onClick={() => props.setIsOpen(false)}
		>
			<MenuClose className="h-12 w-12 fill-current" />
		</button>
	</div>
);
