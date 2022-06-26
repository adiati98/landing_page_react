import React from 'react'
import DEPTWhite from '../assets/svg/DEPT®LOGO2022White.svg'
import NavLink from './NavLink'
import NavHamburgerMenu from './NavHamburgerMenu'
// import navData from '../data/navData'

export default function Navbar({ linkData }) {
	return (
		<header>
			<nav>
				<div className='nav__main'>
					<a href='/home'>
						<img
							src={DEPTWhite}
							alt='White DEPT® logo'
							className='logo header__logo'
						/>
					</a>
					<div className='nav__main__link'>
						<NavLink linkData={linkData} />
					</div>
					<div className='nav__main__hamburger'>
						<NavHamburgerMenu linkData={linkData} />
					</div>
				</div>
			</nav>
		</header>
	)
}
