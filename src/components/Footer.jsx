import React from 'react'
import FooterLink from './FooterLink'

export default function Footer({ linkData }) {
	return (
		<footer>
			<div className='footer__container'>
				<FooterLink linkData={linkData} />
				<div className='footer__info'>
					<ul className='footer__info__menu'>
						<li className='footer__info__item'>Chamber of Commerce: 63464101</li>
						<li className='footer__info__item'>VAT: NL 8552.47.502.B01</li>
						<li className='footer__info__item'>Terms and conditions</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
