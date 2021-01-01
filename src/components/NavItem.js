const NavItem = (props) => {
	return (
		<li className="flex">
			<a
				{...props}
				className="
					inline-block
					cursor-pointer
					ml-auto
					p-2.5
					outline-none
					rounded
					border-solid
					border-2
					border-transparent
					transition
					duration-150
					transform
					hover:-translate-x-4
					focus:-translate-x-4
					lg:hover:-translate-x-0
					lg:focus:-translate-x-0
					lg:hover:-translate-y-1
					lg:focus:-translate-y-1
					lg:focus:border-lightBlue-600
					lg:hover:text-lightBlue-600
					lg:focus:text-lightBlue-600
					"
			>
				{props.children}
			</a>
		</li>
	);
};

export default NavItem;
