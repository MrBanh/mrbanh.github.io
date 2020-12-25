export const HamburgerMenuOpenIcon = (props) => (
	<div className="
				flex
				lg:hidden
			">
		<button
			type="button"
			className={`
					m-auto
					transform
					transition-color transition-transform duration-150 ease-linear
					text-lightBlue-600
					rounded
					hover:scale-110
					focus:scale-110
					focus:outline-none
					`}
			aria-label="toggle menu"
			onClick={() => props.setIsOpen(true)}
		>
			<svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
				<path
					fillRule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
			</svg>
		</button>
	</div>
);
