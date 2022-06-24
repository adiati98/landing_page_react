import React from 'react'
import Navbar from './Navbar'
import DEPTWhite from '../assets/svg/DEPT®LOGO2022White.svg'

export default function Header() {
	return (
			<header>
				<img src={DEPTWhite} alt='White DEPT® logo' className='logo header__logo' />
				<Navbar />
			</header>
	)
}
