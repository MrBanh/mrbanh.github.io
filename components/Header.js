import Link from "next/link";
import Navbar from "./Navbar";

export default function Header(){
	return (
		<header className="min-h-header flex">
			<div className="container m-auto flex flex-wrap py-4 flex-col lg:flex-row items-center">
				<Link href="/">
					<a className="flex items-center">
						<span className="text-3xl font-semibold text-lightBlue-600">
							TB
						</span>
					</a>
				</Link>
				<Navbar />
			</div>
		</header>
	);
}
