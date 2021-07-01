import Icon from '@components/icon';

const HamburgerMenuOpenIcon = (props) => (
	<div className='
				flex
				lg:hidden
			'>
		<button
			type='button'
			className={`
					text-lightBlue-600
					m-auto
					transition
					duration-150
					transform
					rounded
					border-solid
					border-2
					border-transparent
					focus:outline-none
					hover:border-lightBlue-600
					focus:border-lightBlue-600
					`}
			aria-label='open navigation menu'
			onClick={() => props.setIsOpen(true)}
		>
			<div className='w-12 h-12 fill-current'>
				<Icon name='menuOpen' />
			</div>
		</button>
	</div>
);

export default HamburgerMenuOpenIcon;
