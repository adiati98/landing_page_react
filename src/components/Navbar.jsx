import React, { useState } from 'react'
import TripleDot from '../assets/svg/triple dot.svg'
import Close from '../assets/svg/Vector-1.svg'

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const handleToggle = () => {
		setMenuOpen((menuOpen) => !menuOpen)
	}

	return (
		<nav>
			<div className='nav__main'>
				<ul className='nav__main__menu'>
					<li className='nav__main__item nav__main__item--push'>
						<a href='#work' className='nav__main__link'>
							WORK
						</a>
					</li>
					<li className='nav__main__item'>
						<a href='#culture' className='nav__main__link'>
							CULTURE
						</a>
					</li>
					<li className='nav__main__item'>
						<a href='#services' className='nav__main__link'>
							SERVICES
						</a>
					</li>
					<li className='nav__main__item'>
						<a href='#insights' className='nav__main__link'>
							INSIGHTS
						</a>
					</li>
					<li className='nav__main__item'>
						<a href='#careers' className='nav__main__link'>
							CAREERS
						</a>
					</li>
					<li className='nav__main__item'>
						<a href='#contact' className='nav__main__link'>
							CONTACT
						</a>
					</li>
				</ul>
				<button className="menu-toggler" onClick={handleToggle}>
					{menuOpen ? (
						<img src={TripleDot} alt='' className='triple-dot' />
					) : (
						<img src={Close} alt='' className='close' />
					)}
				</button>
				{/* <div className={`nav__hamburger-menu ${menuOpen ? ' showMenu' : ''}`}>
					<div className='nav__hamburger-menu__main'>
						<ul className='nav__hamburger-menu__menu'>
							<li className='nav__hamburger-menu__item'>
								<a href='#home'>HOME</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#work'>WORK</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#culture'>CULTURE</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#services'>SERVICES</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#partners'>PARTNERS</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#stories'>STORIES</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#careers'>CAREERS</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#events'>EVENTS</a>
							</li>
							<li className='nav__hamburger-menu__item'>
								<a href='#contact'>CONTACT</a>
							</li>
						</ul>
					</div>
					<div className='nav__hamburger-menu__location'>
						<ul className='nav__hamburger-menu__location__menu'>
							<li className='gray nav__hamburger-menu--left__item'>Landen</li>
							<li className='hamburger-menu__location__item'>
								<a href='#global'>GLOBAL</a>
							</li>
							<li className='nav__hamburger-menu__location__item'>
								<a href='#nederland'>NEDERLAND</a>
							</li>
							<li className='nav__hamburger-menu__location__item'>
								<a href='#unitedstates'>UNITED STATES</a>
							</li>
							<li className='nav__hamburger-menu__location__item'>
								<a href='#ireland'>IRELAND</a>
							</li>
							<li className='nav__hamburger-menu__location__item'>
								<a href='#unitedkingdom'>UNITED KINGDOM</a>
							</li>
							<li className='nav__hamburger-menu__location__item'>
								<a href='#deutschland'>DEUTSCHLAND</a>
							</li>
							<li className='nav__hamburger-menu__location__item'>
								<a href='#schweiz'>SCHWEIZ</a>
							</li>
						</ul>
					</div>
				</div> */}
			</div>
		</nav>
	)
}
