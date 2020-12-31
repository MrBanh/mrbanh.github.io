import Link from "next/link";
import { useEffect, useRef } from "react";
import { CustomHead } from "../src/components/CustomHead";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Button from "../src/components/Button";

export default function FourOhFour(){
	const fourOhFourRef = useRef();

	useEffect(() => {
		fourOhFourRef.current.setAttribute("data-scroll", "in");

		return () => {
			fourOhFourRef.current.setAttribute("data-scroll", "true");
		};
	}, []);

	return (
		<div>
			<CustomHead />
			<Header />
			<main className="h-screen flex justify-center items-center">
				<section className="flex section-y section-x">
					<div
						ref={fourOhFourRef}
						data-scroll
						className="m-auto w-full h-full delay-100"
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
