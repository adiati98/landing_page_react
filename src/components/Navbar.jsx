import React from 'react'
import NavLink from './NavLink'
import NavHamburgerMenu from './NavHamburgerMenu'
import DEPTWhite from '../assets/svg/DEPT®LOGO2022White.svg'

// Container for the navbar

export default function Navbar({ linkData }) {
	return (
		<header>
			<nav>
				<div className='nav__main'>
					<a href={linkData.home.link} className='nav__main__home' aria-label='Home'>
						<img
							src={DEPTWhite}
							alt='White DEPT® logo'
							className='dept_logo nav__main__header__logo'
						/>
					</a>
					<NavLink linkData={linkData} />
					<NavHamburgerMenu linkData={linkData} />
				</div>
			</nav>
		</header>
	)
}
