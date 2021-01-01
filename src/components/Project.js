import Icon from "@components/Icon";
import Github from "../../public/icons/github.svg";
import ExternalLink from "../../public/icons/ExternalLink.svg";

export const Project = (props) => {
	return (
		<div
			data-scroll
			className="
        mb-10
        shadow-xl
        rounded

        grid
        grid-cols-12
        grid-rows-6
        gap-2.5

        lg:shadow-none
        "
		>
			{/* Content */}
			<div className="
            p-10
            z-10
            rounded-xl
            text-white
            bg-gray-900

            col-span-full
            row-span-full

            flex
            flex-col
            justify-center

            shadow-2xl
            lg:row-span-full
            lg:col-start-1
            lg:col-end-7
            ">
				<p className="highlight">Featured Project</p>
				<div className="flex justify-between items-center mb-6 lg:flex-col lg:items-start">
					<h3 className="">{props.name}</h3>
					<span className="">{props.yearCreated}</span>
				</div>

				<p className="
                    py-5
                    p-6
                   bg-gray-800
                    rounded
                    lg:text-white
                    ">
					{props.description}
				</p>

				<ul className="flex flex-wrap font-mono my-2">
					{props.tech.map((data, idx) => {
						return (
							<span className="mr-4" key={idx}>
								{data}
							</span>
						);
					})}
				</ul>
				<div className="flex">
					{props.links.map((data, idx) => {
						return (
							<Icon
								href={data.url}
								key={idx}
								aria-label={`${props.name} project   ${data.type}`}
							>
								{data.type === "GitHub" ? (
									<Github className="overflow-visible" />
								) : (
									<ExternalLink />
								)}
							</Icon>
						);
					})}
				</div>
			</div>

			{/* Image */}
			<div className="
            hidden
            lg:col-start-6
            lg:col-end-13
            lg:row-span-full
            lg:hover:z-20
            lg:focus:z-20
            lg:flex
            lg:flex-col
            lg:justify-center
            lg:max-w-lg
            ">
				<div className="
                hidden

                lg:block
                lg:opacity-60
                lg:transition-opacity
                lg:duration-150
                lg:shadow-xl
                lg:rounded
                lg:overflow-hidden
                lg:hover:opacity-100
                lg:focus:opacity-100
                lg:max-w-md
                ">
					<img
						className="
                    object-contain
                    w-full
                    h-full
                    "
						src={props.img}
						alt={`image of ${props.name} project`}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};
