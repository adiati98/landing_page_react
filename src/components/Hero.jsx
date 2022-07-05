import React from 'react'
import HeroImg from '../assets/images/image 2.png'

export default function Hero() {
	return (
		<main className='hero__container'>
			<img
				src={HeroImg}
				alt='Some random activities in an office'
				className='hero'
			/>
			<div className='hero__text'>
				<h1>
					<span className='category small'>WORK</span>
					<span className='title hero__title'>
						A selection of projects that <span className='bold'>pioneer tech</span>{' '}
						and <span className='bold'>marketing</span> to help brands stay ahead.
					</span>
				</h1>
			</div>
		</main>
	)
}
