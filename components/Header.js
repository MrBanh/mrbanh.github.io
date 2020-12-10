import Link from "next/link";
import Navbar from "./Navbar";

export default function Header(){
	return (
		<header className="">
			<div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
				<Link href="/">
					<a class="flex font-bold items-center mb-4 md:mb-0">
						<span className="text-3xl">TB</span>
					</a>
				</Link>
				<Navbar />
			</div>
		</header>
	);
}
