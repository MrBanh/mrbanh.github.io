export const HamburgerMenuCloseIcon = (props) => (
	<div className="
					w-full
					flex
					lg:hidden
					">
		<button
			type="button"
			className="
						text-white
						ml-auto
						transform
						transition-all duration-150 ease-linear
						hover:scale-75
						focus:scale-75
						hover:rotate-45
						focus:rotate-45
						focus:outline-none

						"
			aria-label="toggle menu"
			onClick={() => props.setIsOpen(false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				className="h-12 w-12 fill-current"
			>
				<path
					fillRule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</button>
	</div>
);
