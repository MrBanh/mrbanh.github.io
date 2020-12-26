import { useState, useEffect } from "react";
import { HamburgerMenuOpenIcon } from "./HamburgerMenuOpenIcon";
import { NavbarList } from "./NavbarList";

export default function Navbar(){
	const [ isOpen, setIsOpen ] = useState(false);

	useEffect(
		() => {
			function handleResize(){
				setIsOpen(false);
			}

			function handleScroll(){
				if (isOpen) {
					setIsOpen(false);
				}
			}

			window.addEventListener("resize", handleResize);
			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("resize", handleResize);
				window.removeEventListener("scroll", handleScroll);
			};
		},
		[ isOpen ]
	);

	return (
		<nav className="
		flex
		font-mono
		text-lg

		lg:max-w-1/2
		lg:w-full
		">
			<HamburgerMenuOpenIcon setIsOpen={setIsOpen} />
			<NavbarList isOpen={isOpen} setIsOpen={setIsOpen} />
		</nav>
	);
}
