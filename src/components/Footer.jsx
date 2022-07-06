import React from 'react'
import FooterLink from './FooterLink'
import FooterLinkSocial from './FooterLinkSocial'

// Footer container

export default function Footer({ linkData }) {
	return (
		<footer>
			<div className='footer__container p-2'>
				<div className='footer__container--top'>
					<div className='footer__container__links'>
						<FooterLink linkData={linkData} />
					</div>
					<div className='footer__container__social'>
						<FooterLinkSocial />
					</div>
				</div>
				<div className='footer__container--bottom'>
					<div className='footer__info'>
						<ul className='footer__info__menu'>
							<li className='footer__info__item'>Chamber of Commerce: 63464101</li>
							<li className='footer__info__item'>VAT: NL 8552.47.502.B01</li>
							<li className='footer__info__item'>Terms and conditions</li>
							<li className='footer__info__item'>© 2022 Dept Agency</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
