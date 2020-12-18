import { useState, useEffect } from "react";
import NavItem from "./NavItem";

export default function Navbar(){
	const [ isOpen, setIsOpen ] = useState(false);

	useEffect(() => {
		function handleResize(){
			setIsOpen(false);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		// Navbar
		<nav className="
			flex
			lg:max-w-1/2
			lg:w-full
		">
			{/* Hamburger menu icon */}
			<div className="
				flex
				lg:hidden
			">
				<button
					type="button"
					className={`
					m-auto
					transform
					transition-color transition-transform duration-150 ease-linear
					hover:scale-110
					focus:scale-110
					hover:text-lightBlue-600
					focus:text-lightBlue-600
					focus:outline-none

					`}
					aria-label="toggle menu"
					onClick={() => setIsOpen(true)}
				>
					<svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
						<path
							fillRule="evenodd"
							d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
						/>
					</svg>
				</button>
			</div>

			{/* Hamburger menu */}
			<div
				className={`
                	flex
					text-white
					bg-blue-600
					rounded
					absolute
					flex-col
					pl-8
					pb-8
					pt-2
					pr-4
					m-4
					left-0
					top-0
					right-0
					text-2xl
					transform
					${isOpen ? "transition-opacity duration-150 ease-linear" : ""}
					${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}

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
					lg:opacity-100
					lg:visible
					`}
			>
				{/* X icon */}
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
						onClick={() => setIsOpen(false)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							className="h-12 w-12 fill-current"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>

				{/* Menu list */}
				<NavItem href="#about">About</NavItem>
				<NavItem href="#projects">Projects</NavItem>
				<NavItem
					target="_blank"
					href="https://drive.google.com/file/d/1V_4DicXo8RTdx9cHRFxAaOA37Jl0piSt/view?usp=sharing"
				>
					Resume
				</NavItem>
			</div>
		</nav>
	);
}
