import { HamburgerMenuCloseIcon } from "./HamburgerMenuCloseIcon";
import NavItem from "./NavItem";

export const NavbarList = (props) => (
	<div
		className={`
				flex
				text-white
				bg-lightBlue-600
				absolute
				flex-col
				p-6
				left-0
				top-0
				right-0
				text-2xl
				transform
				transition-transform
				duration-150
				ease-linear
				${props.isOpen ? "translate-y-0" : "-translate-y-full"}

				lg:flex
				lg:static
				lg:flex-row
				lg:text-base
				lg:items-center
				lg:w-full
				lg:p-0
				lg:m-0
				lg:justify-between
				lg:text-current
				lg:bg-transparent
				lg:h-full
				lg:text-right
				lg:translate-y-0
				`}
	>
		{/* X icon */}
		<HamburgerMenuCloseIcon setIsOpen={props.setIsOpen} />

		{/* Menu list */}
		<NavItem href="#about" onClick={() => props.setIsOpen(false)}>
			About
		</NavItem>
		<NavItem href="#projects" onClick={() => props.setIsOpen(false)}>
			Projects
		</NavItem>
		<NavItem href="#contact" onClick={() => props.setIsOpen(false)}>
			Contact
		</NavItem>
		<NavItem
			target="_blank"
			href="https://drive.google.com/file/d/1V_4DicXo8RTdx9cHRFxAaOA37Jl0piSt/view?usp=sharing"
			onClick={() => props.setIsOpen(false)}
		>
			Resume
		</NavItem>
	</div>
);
