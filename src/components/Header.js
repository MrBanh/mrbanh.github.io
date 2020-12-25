import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Header(){
	const [ scroll, setScroll ] = useState(false);

	useEffect(
		() => {
			function handleScroll(){
				if (window.pageYOffset > 100) {
					if (!scroll) {
						setScroll(true);
					}
				} else {
					if (scroll) {
						setScroll(false);
					}
				}
			}
			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		},
		[ scroll ]
	);

	return (
		<header
			className={`
			${scroll ? "-translate-y-28" : "translate-y-0"}
			transition-transform
			transform
			duration-150
			ease-linear

			z-50
			h-header
			flex
			fixed
			top-0
			left-0
			right-0
		`}
		>
			<div className="
			px-6
			m-auto
			flex
			flex-row
			items-stretch
			w-full
			justify-between
			lg:px-12
			">
				<Link href="/">
					<a className="
					flex
					items-center
					transform hover:-translate-y-1
					transition-all duration-150 ease-linear
					">
						<img
							src="/logo.svg"
							alt="Logo icon"
							className="h-12 w-12 mr-3"
						/>
					</a>
				</Link>
				<Navbar scroll={scroll}/>
			</div>
		</header>
	);
}
