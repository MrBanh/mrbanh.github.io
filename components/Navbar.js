import Link from "next/link";

export default function Navbar(){
	return (
		<nav class="md:ml-auto w-full md:w-6/12 flex flex-row flex-wrap items-center justify-evenly font-medium text-xl">
			<Link href="/About">
				<a class="">About</a>
			</Link>
			<Link href="/Projects">
				<a class="">Projects</a>
			</Link>
			<Link href="/Contacts">
				<a class="">Contacts</a>
			</Link>
		</nav>
	);
}
