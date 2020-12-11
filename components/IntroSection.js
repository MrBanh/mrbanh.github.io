import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

const IntroSection = () => (
	<section className="h-belowNav flex flex-col-reverse md:flex-row justify-evenly md:justify-center items-center">
		<div className="h-full font-custom1 ">
			<h1 className="text-5xl md:text-8xl break-words font-semibold">
				Tony Banh
			</h1>
			<div className="font-normal text-gray-600 m-2">
				<h2 className="">Software Developer</h2>
				<p className="">Based in California</p>
			</div>
			<div className="
			font-custom2 
			text-base
			m-2
			flex flex-col md:flex-row items-start md:items-center
			">
				<Link href="/Contacts">
					<button
						className="
					bg-gradient-to-bl from-teal-400 to-blue-500
					hover:from-transparent hover:to-transparent
					 text-white hover:text-lightBlue-600
					 font-bold
					 uppercase
					 text-md
					 px-6 py-3
					 mb-2
					 rounded
					 hover:shadow-lg
					 focus:outline-black
					 border-solid
					 border-2
					 border-transparent
					 hover:border-lightBlue-600
					 transition-all duration-150 ease-linear
					 "
						type="button"
					>
						Contact Me
					</button>
				</Link>
				<Link href="/Projects">
					<a className="
					text-gray-600
					hover:underline
					focus:underline
					focus:outline-black
					m-0
					md:m-auto
					group
					">
						See my Projects
						<ArrowIcon />
					</a>
				</Link>
			</div>
		</div>
		<div>
			<img src="/intro_image.svg" alt="App development image" />
		</div>
	</section>
);

export default IntroSection;
