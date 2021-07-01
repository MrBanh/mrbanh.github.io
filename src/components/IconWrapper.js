const IconWrapper = (props) => {
	return (
		<a
			{...props}
			target='_blank'
			rel='noopener noreferrer'
			className='
                w-12
                h-12
                p-2.5
                mx-1.5
                fill-current
                transform
                transition
                duration-150
                rounded
                border-solid
                border-2
                border-transparent
                hover:scale-110
                focus:scale-110
                hover:text-lightBlue-600
                focus:text-lightBlue-600
                focus:border-lightBlue-600
                focus:outline-none
        '
		>
			<div>{props.children}</div>
		</a>
	);
};

export default IconWrapper;
