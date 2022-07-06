import React from 'react'
import TripleDot from '../assets/svg/triple dot.svg'
import Close from '../assets/svg/Vector-1.svg'

// Handle buttons for hamburger menu

export default function NavHamburgerBtn({
	handleToggle,
	menuOpen,
	setMenuOpen,
}) {
	return (
		<div className='nav__main__hamburger'>
			<div className='nav__hamburger-menu'>
				<button
				// conditional for absolute position
					className={`menu--toggler ${menuOpen ? 'menu__close' : 'menu__icon'}`}
					aria-label='Toggle menu'
					onClick={handleToggle}
				>
					{menuOpen ? (
						<img src={Close} alt='' className='close' />
					) : (
						<img src={TripleDot} alt='' className='triple-dot' />
					)}
				</button>
				<button
					className={`menu--toggler ${menuOpen ? 'menu__close' : 'menu__btn'}`}
					aria-label='Toggle menu'
					onClick={handleToggle}
				>
					{menuOpen ? (
						<img src={Close} alt='' className='close' />
					) : (
						<span className='menu__btn__text'>MENU</span>
					)}
				</button>
			</div>
		</div>
	)
}
