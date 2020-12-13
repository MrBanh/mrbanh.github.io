import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

const IntroSection = () => (
	<section className="h-section flex flex-col lg:flex-row justify-evenly lg:justify-center items-center">
		<div className="">
			<h1 className="text-4xl lg:text-5xl break-words text-center font-semibold">
				Tony Banh
			</h1>
			<div className="font-normal text-center my-4">
				<h2 className="">Software Developer</h2>
				<p className="">Based in California</p>
			</div>
			<div className="
			text-base
			my-4
			flex flex-col lg:flex-row items-start lg:items-center
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
					 mx-auto
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
					hover:underline
					focus:underline
					focus:outline-black
					mx-auto
					text-center
					lg:m-auto
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
