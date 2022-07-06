import React from 'react'
import NavLinkLocation from './NavLinkLocation'

// Links in the hamburger menu

export default function NavLinkHamburger({ linkData }) {
	return (
		<div className='nav__hamburger-menu'>
			<div className='nav__hamburger-menu__main'>
				<ul className='nav__hamburger-menu__menu'>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.home.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>{linkData.home.title}</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.work.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>{linkData.work.title}</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.culture.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.culture.title}
							</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.services.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.services.title}
							</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.partners.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.partners.title}
							</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.stories.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.stories.title}
							</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.careers.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.careers.title}
							</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.events.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.events.title}
							</span>
						</a>
					</li>
					<li className='nav__hamburger-menu__item'>
						<a href={linkData.contact.link} className='nav__hamburger-menu__link'>
							<span className='nav__hamburger-menu__text'>
								{linkData.contact.title}
							</span>
						</a>
					</li>
				</ul>
			</div>
			<div className='nav__location'>
				<NavLinkLocation />
			</div>
		</div>
	)
}
