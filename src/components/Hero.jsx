import React from 'react'
import HeroImg from '../assets/images/image 2.png'

export default function Hero() {
	return (
		<main>
			<div className='hero__container'>
				<img src={HeroImg} alt='' className='hero' />
				<div className='hero__text'>
					<p className='hero__text--small'>WORK</p>
					<p className='hero__text--big'>
						A selection of projects that <span className='bold'>pioneer tech</span>{' '}
						and <span className='bold'>marketing</span> to help brands stay ahead.
					</p>
				</div>
			</div>
		</main>
	)
}
