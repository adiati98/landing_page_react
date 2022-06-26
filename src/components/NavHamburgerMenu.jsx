import React, { useState } from 'react'
import NavLinkHamburger from './NavLinkHamburger'
import TripleDot from '../assets/svg/triple dot.svg'
import Close from '../assets/svg/Vector-1.svg'

// Handle buttons for hamburger menu

export default function NavHamburgerMenu({ linkData }) {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleToggle = () => {
		setMenuOpen((menuOpen) => !menuOpen)
	}

	return (
		<div className='nav__main__hamburger'>
			<div className='nav__hamburger-menu'>
				<button
					className='menu__icon menu--toggler'
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
					className='menu__btn menu--toggler'
					aria-label='Toggle menu'
					onClick={handleToggle}
				>
					{menuOpen ? (
						<img src={Close} alt='' className='close' />
					) : (
						<span>MENU</span>
					)}
				</button>
			</div>
			{menuOpen && <NavLinkHamburger linkData={linkData} />}
		</div>
	)
}
