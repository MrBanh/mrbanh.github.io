export default function Icon(props){
	return (
		<a {...props}>
			<div className="
                fill-current
                transform
                transition-color transition-transform duration-150
                hover:scale-110
                focus:scale-110
                hover:text-lightBlue-600
                focus:text-lightBlue-600
                focus:select-none
                focus:outline-none
            ">
				{props.children}
			</div>
		</a>
	);
}
