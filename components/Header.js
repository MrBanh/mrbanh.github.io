import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Header(){
	const [ scroll, setScroll ] = useState(false);

	useEffect(
		() => {
			function handleScroll(){
				if (window.pageYOffset > 0) {
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
			${scroll ? "bg-white shadow" : "bg-transparent shadow-none"}
			transition
			duration-150
			ease-linear

			z-50
			min-h-header
			flex
			fixed
			top-0
			left-0
			right-0
		`}
		>
			<div className="container px-8 m-auto flex flex-row items-stretch w-full justify-between">
				<Link href="/">
					<a className="
					flex
					items-center
					hover:text-lightBlue-600
					transform hover:-translate-y-1
					transition-all duration-100 ease-linear
					">
						<img
							src="/logo.svg"
							alt="Logo icon"
							className="h-12 w-12 mr-3"
						/>
						<span className="text-lg">Tony Banh</span>
					</a>
				</Link>
				<Navbar />
			</div>
		</header>
	);
}
