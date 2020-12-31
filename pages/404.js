import { useEffect, useState } from "react";
import Link from "next/link";
import { CustomHead } from "../src/components/CustomHead";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Button from "../src/components/Button";
import { TRANSITION_ON_SCROLL as t } from "../src/utils/util";

export default function FourOhFour(){
	const [ show, setShow ] = useState(false);

	useEffect(
		() => {
			const timeOut = setTimeout(() => {
				setShow(true);
			}, 100);
			return () => clearTimeout(timeOut);
		},
		[ show ]
	);

	return (
		<div>
			<CustomHead />
			<Header />
			<main className="h-screen flex justify-center items-center">
				<section className="flex section-y section-x ">
					<div
						data-scroll
						className={`m-auto w-full h-full
					${t.getHideShowClasses(show)}
					${t.getRequiredTransitionClasses()}`}
					>
						<div className="flex flex-col justify-center items-center">
							<div className="text-center">
								<p className="error-title">404</p>
								<p className="error-desc">Page Not Found</p>
							</div>
							<div className="mt-12">
								<Link href="/">
									<Button>Go Back</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="fixed left-0 bottom-0 right-0">
				<Footer />
			</footer>
		</div>
	);
}
