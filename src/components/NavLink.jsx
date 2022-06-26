import React from 'react'

// Links to other pages for desktop

export default function NavLink({ linkData }) {
	return (
		<div className='nav__main__links'>
			<ul className='nav__main__menu menu--show'>
				<li className='nav__main__item'>
					<a href={linkData.work.link} className='nav__main__link'>
						<span className='nav__main__link__text'>{linkData.work.title}</span>
					</a>
				</li>
				<li className='nav__main__item'>
					<a href={linkData.culture.link} className='nav__main__link'>
						<span className='nav__main__link__text'>{linkData.culture.title}</span>
					</a>
				</li>
				<li className='nav__main__item'>
					<a href={linkData.services.link} className='nav__main__link'>
						<span className='nav__main__link__text'>{linkData.services.title}</span>
					</a>
				</li>
				<li className='nav__main__item'>
					<a href={linkData.insights.link} className='nav__main__link'>
						<span className='nav__main__link__text'>{linkData.insights.title}</span>
					</a>
				</li>
				<li className='nav__main__item'>
					<a href={linkData.careers.link} className='nav__main__link'>
						<span className='nav__main__link__text'>{linkData.careers.title}</span>
					</a>
				</li>
				<li className='nav__main__item'>
					<a href={linkData.contact.link} className='nav__main__link'>
						<span className='nav__main__link__text'>{linkData.contact.title}</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
