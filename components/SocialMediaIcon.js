export default function SocialMediaIcon({ children, target, href }){
	return (
		<a target={target || "_self"} href={href || "#"}>
			<div className="
                h-12
                w-12
                p-2

                lg:pl-0
                lg:pr-4

                fill-current
                transform
                transition-color transition-transform duration-150 ease-linear
                hover:scale-110
                focus:scale-110
                hover:text-lightBlue-600
                focus:text-lightBlue-600
                focus:select-none
                focus:outline-none
            ">
				{children}
			</div>
		</a>
	);
}
