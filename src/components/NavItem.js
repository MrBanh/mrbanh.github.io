import React from 'react';

const NavItem = React.forwardRef((props, ref) => {
	return (
		<li className='flex'>
			<a
				ref={ref}
				{...props}
				className='
					inline-block
					cursor-pointer
					ml-auto
					p-2.5
					rounded
					border-solid
					border-2
					border-transparent
					transition
					duration-150
					transform
					hover:-translate-x-4
					focus:-translate-x-4
					focus:outline-none
					lg:hover:-translate-x-0
					lg:focus:-translate-x-0
					lg:hover:-translate-y-1
					lg:focus:-translate-y-1
					lg:focus:border-lightBlue-600
					lg:hover:text-lightBlue-600
					lg:focus:text-lightBlue-600
					'
			>
				{props.children}
			</a>
		</li>
	);
});

export default NavItem;
