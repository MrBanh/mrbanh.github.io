import { useEffect, useRef } from "react";
import { scroller } from "react-scroll";

import { HamburgerMenuCloseIcon } from "./HamburgerMenuCloseIcon";
import NavItem from "./NavItem";
import { navLinks } from "@config";

export const NavbarList = (props) => {
	const closeIconRef = useRef();
	const navItemsRef = useRef([]);

	useEffect(
		() => {
			// Set the reference array to = # of nav links
			navItemsRef.current = navItemsRef.current.slice(0, navLinks.length);

			/**
			 * Sets the aria-hidden attribute of the element
			 * @param {HTMLElement} el
			 * @param {string} bool
			 */
			function setAriaHidden(el, bool = "false"){
				el.setAttribute("aria-hidden", bool);
			}

			/**
			 * Sets the tabindex attribute of the element
			 * @param {HTMLElement} el
			 * @param {number} val - either -1 or 0
			 */
			function setTabIndex(el, val = -1){
				el.setAttribute("tabindex", val);
			}

			/**
			 * @returns {boolean}
			 */
			function isHiddenFromSR(){
				return window.innerWidth < 1024 && !props.isOpen;
			}

			/**
			 * Handles the aria-hidden attributes for each el referenced
			 */
			function hideOrShowFromSR(){
				const ariaHiddenVal = isHiddenFromSR() ? "true" : "false";
				const tabIndexVal = isHiddenFromSR() ? -1 : 0;

				setAriaHidden(closeIconRef.current, ariaHiddenVal);
				setTabIndex(closeIconRef.current, tabIndexVal);

				navItemsRef.current.forEach((navItemRef) => {
					setAriaHidden(navItemRef, ariaHiddenVal);
					setTabIndex(navItemRef, tabIndexVal);
				});
			}

			function handleResize(){
				hideOrShowFromSR();
			}

			window.addEventListener("resize", handleResize);

			hideOrShowFromSR();

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		},
		[ props.isOpen ]
	);
	return (
		<div
			className={`
				text-white
				bg-lightBlue-600
				px-6
				pb-6
				absolute
				left-0
				top-0
				right-0

				w-full
				transform
				transition-transform
				duration-150
				${props.isOpen ? "translate-y-0" : "-translate-y-full"}

				lg:text-current
				lg:bg-transparent
				lg:px-0
				lg:pb-0
				lg:static
				lg:translate-y-0
		`}
		>
			<HamburgerMenuCloseIcon
				ref={closeIconRef}
				setIsOpen={props.setIsOpen}
			/>
			<ul
				className={`
				flex
				flex-col
				text-2xl

				lg:flex-row
				lg:text-base
				lg:items-center
				lg:w-full
				lg:h-full
				lg:justify-between
				lg:text-right
				`}
			>
				{navLinks.map((nav, i) => {
					return nav.internalLink ? (
						<NavItem
							ref={(el) => (navItemsRef.current[i] = el)}
							href={nav.url}
							onClick={() => {
								props.setIsOpen(false);
								scroller.scrollTo(nav.id, {
									duration: 250,
									smooth: true
								});
							}}
							key={nav.id}
						>
							{nav.name}
						</NavItem>
					) : (
						<NavItem
							target="_blank"
							ref={(el) => (navItemsRef.current[i] = el)}
							href={nav.url}
							onClick={() => props.setIsOpen(false)}
							key={nav.id}
						>
							{nav.name}
						</NavItem>
					);
				})}
			</ul>
		</div>
	);
};
