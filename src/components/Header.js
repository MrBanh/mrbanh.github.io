import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";

export default function Header(){
	const [ renderHeader, setRenderHeader ] = useState(true);
	const prevPageYOffset = useRef(0);

	useEffect(
		() => {
			function handleScroll(){
				if (window.pageYOffset > 100) {
					if (
						window.pageYOffset > prevPageYOffset.current &&
						renderHeader
					) {
						setRenderHeader(false);
					} else if (
						window.pageYOffset < prevPageYOffset.current &&
						!renderHeader
					) {
						setRenderHeader(true);
					}
				} else {
					if (!renderHeader) {
						setRenderHeader(true);
					}
				}
				prevPageYOffset.current = window.pageYOffset;
			}

			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		},
		[ renderHeader ]
	);

	return (
		<header
			className={`
			${renderHeader ? "translate-y-0 bg-white" : "-translate-y-28 bg-transparent"}
			transition
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
				<Navbar />
			</div>
		</header>
	);
}
