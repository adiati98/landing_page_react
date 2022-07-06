import React from 'react'

// Links of locations in the hamburger menu

export default function NavLinkLocation() {
	return (
		<div className='nav__hamburger-menu__location'>
			<ul className='nav__hamburger-menu__location__menu'>
				<li className='nav__hamburger-menu__item--left'>Landen</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#global' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>GLOBAL</span>
					</a>
				</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#nederland' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>NEDERLAND</span>
					</a>
				</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#unitedstates' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>UNITED STATES</span>
					</a>
				</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#ireland' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>IRELAND</span>
					</a>
				</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#unitedkingdom' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>
							UNITED KINGDOM
						</span>
					</a>
				</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#deutschland' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>DEUTSCHLAND</span>
					</a>
				</li>
				<li className='nav__hamburger-menu__location__item'>
					<a href='#schweiz' className='nav__hamburger-menu__location__link'>
						<span className='nav__hamburger-menu__location__text'>SCHWEIZ</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
