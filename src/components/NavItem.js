const NavItem = (props) => {
	return (
		<a
			{...props}
			className="
					cursor-pointer
					lg:hover:text-lightBlue-600
					transition-all duration-150 ease-linear
					transform
					hover:scale-110
					origin-left
					ml-auto
					"
		>
			{props.children}
		</a>
	);
};

export default NavItem;
