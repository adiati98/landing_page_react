import React from 'react'
// import NavLinkLocation from './NavLinkLocation'

export default function NavLinkHamburger({ linkData }) {
	return (
		<div className='nav__hamburger-menu'>
			<div className='nav__hamburger-menu__main'>
				<ul className='nav__hamburger-menu__menu'>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.home.link} className='nav__hamburger-menu__link'>
							{linkData.home.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.work.link} className='nav__hamburger-menu__link'>
							{linkData.work.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.culture.link} className='nav__hamburger-menu__link'>
							{linkData.culture.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.services.link} className='nav__hamburger-menu__link'>
							{linkData.services.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.partners.link} className='nav__hamburger-menu__link'>
							{linkData.partners.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.stories.link} className='nav__hamburger-menu__link'>
							{linkData.stories.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.careers.link} className='nav__hamburger-menu__link'>
							{linkData.careers.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.events.link} className='nav__hamburger-menu__link'>
							{linkData.events.title}
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.contact.link} className='nav__hamburger-menu__link'>
							{linkData.contact.title}
						</a>
					</li>
				</ul>
			</div>
			{/* <NavLinkLocation /> */}
		</div>
	)
}
