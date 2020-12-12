import Link from "next/link";

export default function Navbar(){
	return (
		<nav className="lg:ml-auto w-full lg:w-6/12 flex flex-row flex-wrap items-center justify-evenly font-medium md:text-xl font-custom2 text-gray-600">
			<Link href="/About">
				<a className="">About</a>
			</Link>
			<Link href="/Projects">
				<a className="">Projects</a>
			</Link>
			<Link href="/Contacts">
				<a className="">Contacts</a>
			</Link>
		</nav>
	);
}
