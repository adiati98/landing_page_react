import React from 'react'
import Instagram from '../assets/svg/instagram.svg'
import Facebook from '../assets/svg/facebook.svg'
import Twitter from '../assets/svg/twitter.svg'

// Link to social media in footer

export default function FooterLinkSocial() {
	return (
		<div className='footer__social'>
			<ul className='footer__social__menu'>
				<li className='footer__social__item'>
					<a href='#facebook' className='footer__social__link'>
						<img src={Facebook} alt='facebook' className='footer__social__icon' />
					</a>
				</li>
				<li className='footer__social__item'>
					<a href='#twitter' className='footer__social__link'>
						<img src={Twitter} alt='twitter' className='footer__social__icon' />
					</a>
				</li>
				<li className='footer__social__item'>
					<a href='#instagram' className='footer__social__link'>
						<img src={Instagram} alt='instagram' className='footer__social__icon' />
					</a>
				</li>
			</ul>
		</div>
	)
}
