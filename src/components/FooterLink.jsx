import React from 'react'
import DEPTWhite from '../assets/svg/DEPT®LOGO2022White.svg'

// Footer links

export default function FooterLink({ linkData }) {
	return (
		<div className='footer__nav'>
			<a href={linkData.home.link} className='footer__nav__link' aria-label='Home'>
				<img
					src={DEPTWhite}
					alt='White DEPT® logo'
					className='dept_logo footer__nav__logo'
				/>
			</a>
			<ul className='footer__nav__menu'>
				<li className='footer__nav__item'>
					<a href={linkData.work.link} className='footer__nav__link'>
						<span className='footer__nav__link__text'>{linkData.work.title}</span>
					</a>
				</li>
				<li className='footer__nav__item'>
					<a href={linkData.services.link} className='footer__nav__link'>
						<span className='footer__nav__link__text'>{linkData.services.title}</span>
					</a>
				</li>
				<li className='footer__nav__item'>
					<a href={linkData.work.stories} className='footer__nav__link'>
						<span className='footer__nav__link__text'>{linkData.stories.title}</span>
					</a>
				</li>
				<li className='footer__nav__item'>
					<a href={linkData.about.link} className='footer__nav__link'>
						<span className='footer__nav__link__text'>{linkData.about.title}</span>
					</a>
				</li>
				<li className='footer__nav__item'>
					<a href={linkData.careers.link} className='footer__nav__link'>
						<span className='footer__nav__link__text'>{linkData.careers.title}</span>
					</a>
				</li>
				<li className='footer__nav__item'>
					<a href={linkData.contact.link} className='footer__nav__link'>
						<span className='footer__nav__link__text'>{linkData.contact.title}</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
