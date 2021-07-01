import React from 'react';

const Button = React.forwardRef((props, ref) => {
	return (
		<a
			tabIndex='0'
			ref={ref}
			className='
					cursor-pointer
					bg-gradient-to-tr from-teal-400 to-blue-500
					text-white
					font-mono
					px-6 py-3
					rounded
					border-solid
					border-2
					border-transparent
					transition
					duration-150
					inline-block

					hover:from-transparent hover:to-transparent
					focus:from-transparent focus:to-transparent
					hover:text-lightBlue-600
					focus:text-lightBlue-600
					hover:border-lightBlue-600
					focus:border-lightBlue-600
					hover:shadow-lg
					focus:shadow-lg
					focus:outline-none
					 '
			{...props}
		>
			{props.children}
		</a>
	);
});

export default Button;
