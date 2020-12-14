import Link from "next/link";
import Navbar from "./Navbar";

export default function Header(){
	return (
		<header className="min-h-header flex">
			<div className="my-auto flex flex-row items-stretch w-full justify-between">
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
						<span className="text-lg font-semibold">Tony Banh</span>
					</a>
				</Link>
				<Navbar />
			</div>
		</header>
	);
}
