import React, { useState } from 'react'
import NavLink from './NavLink'
import NavLinkHamburger from './NavLinkHamburger'
import NavHamburgerMenu from './NavHamburgerMenu'
import DEPTWhite from '../assets/svg/DEPT®LOGO2022White.svg'

// Container for the navbar

export default function Navbar({ linkData }) {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleToggle = () => {
		setMenuOpen((menuOpen) => !menuOpen)
	}

	return (
		<header>
			<nav>
				<div className={`p-2 ${menuOpen ? 'mobile__navbar' : 'navbar'}`}>
					<div className={`${menuOpen ? 'mobile__home' : 'navbar__main__home'}`}>
						<a
							href={linkData.home.link}
							className='navbar__main__home__link'
							aria-label='Home'
						>
							<img
								src={DEPTWhite}
								alt='White DEPT® logo'
								className='dept_logo navbar__main__header__logo'
							/>
						</a>
					</div>
					<ul className='navbar__main navbar__main__menu'>
						<li className='navbar__main__item navbar__main__item__menu'>
							{menuOpen ? (
								<NavLinkHamburger linkData={linkData} />
							) : (
								<NavLink linkData={linkData} menuOpen={menuOpen} />
							)}
						</li>
						<li>
							<NavHamburgerMenu
								handleToggle={handleToggle}
								menuOpen={menuOpen}
								setMenuOpen={setMenuOpen}
								className='navbar__main__item navbar__main__item__btn'
							/>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}
