import React from 'react'

export default function Category() {

  return (
			<div className='category__container'>
				<p className='category__container__text'>
					Show me{' '}
					<a href='#work' className='category__container__link'>
						<span className='category__container__link__text'>all work</span>
					</a>
				</p>
				<p className='category__container__text'>
					in{' '}
					<a href='#industries' className='category__container__link'>
						<span className='category__container__link__text'>all industry</span>
					</a>
				</p>
			</div>
		)
}
