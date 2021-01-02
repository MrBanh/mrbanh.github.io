import IconWrapper from "@components/IconWrapper";
import Icon from "@components/icon";

const Project = ({ name, description, builtWith, img, yearCreated, links }) => {
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
					<h3 className="">{name}</h3>
					<span className="">{yearCreated}</span>
				</div>

				<p className="
                    py-5
                    p-6
                   bg-gray-800
                    rounded
                    lg:text-white
                    ">
					{description}
				</p>

				<ul className="flex flex-wrap font-mono my-2">
					{builtWith.map((tech, i) => {
						return (
							<span className="mr-4" key={i}>
								{tech}
							</span>
						);
					})}
				</ul>
				<div className="flex">
					{links.map((link, i) => {
						return (
							<IconWrapper
								href={link.url}
								key={i}
								aria-label={`${name} project ${link.name}`}
							>
								<Icon name={link.name} />
							</IconWrapper>
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
						src={img}
						alt={`image of ${name} project`}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
