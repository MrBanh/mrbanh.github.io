import Link from "next/link";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Button from "../src/components/Button";

export default function FourOhFour(){
	return (
		<div>
			<Header />
			<main className="h-screen flex justify-center items-center">
				<section className="section-y section-x flex flex-col justify-center items-center">
					<div className="text-center">
						<p className="
                        error-title
                        ">
							404
						</p>
						<p className="error-desc">Page Not Found</p>
					</div>
					<div className="mt-12">
						<Link href="/">
							<Button>Go Back</Button>
						</Link>
					</div>
				</section>
			</main>
			<footer className="fixed left-0 bottom-0 right-0">
				<Footer />
			</footer>
		</div>
	);
}
