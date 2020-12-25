import { useState, useEffect } from "react";
import { HamburgerMenuOpenIcon } from "./HamburgerMenuOpenIcon";
import { NavbarList } from "./NavbarList";

export default function Navbar({ scroll }){
	const [ isOpen, setIsOpen ] = useState(false);
	const [ renderMenu, setRenderMenu ] = useState(true);

	useEffect(
		() => {
			function handleResize(){
				setIsOpen(false);

				setRenderMenu(false);
				setTimeout(() => {
					setRenderMenu(true);
				}, 100);
			}

			function handleScroll(){
				if (scroll) {
					setIsOpen(false);
				}
			}

			handleScroll();

			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		},
		[ isOpen, renderMenu, scroll ]
	);

	return (
		// Navbar
		<nav className="
		flex
		font-mono
		text-lg

		lg:max-w-1/2
		lg:w-full
		">
			<HamburgerMenuOpenIcon setIsOpen={setIsOpen} />
			{renderMenu ? (
				<NavbarList isOpen={isOpen} setIsOpen={setIsOpen} />
			) : (
				""
			)}
		</nav>
	);
}
