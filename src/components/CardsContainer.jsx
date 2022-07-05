import React from 'react'
import circle from '../assets/svg/circle.svg'

export default function CardsContainer({ cardsData }) {
	return (
		<div className='cards__container'>
			<div className='card__container'>
				{cardsData.cardImages1.map((card) => (
					<div className='card__container__image' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__image__text__container'>
							<p className='card__image__text card__image__text__name'>
								{card.companyName}
							</p>
							<p className='card__image__text card__image__text__title'>
								{card.title}
							</p>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='card__container__break card__container__break--reverse'>
				<div className='card__container__text__break'>
					{cardsData.cardText.map((card) => (
						<div className='card__text__flex' key={card.id}>
							<p className='card__text__flex__name'>{card.companyName}</p>
							<p className='card__text__flex__description'>{card.text}</p>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					))}
				</div>
				<div
					className='card__container__image__break'
					key={cardsData.florensis[0].id}
				>
					<img
						className='card__image__flex'
						src={cardsData.florensis[0].image}
						alt={cardsData.florensis[0].altText}
					/>
					<div className='image__text__flex'>
						<p className='image__text__flex__name'>
							{cardsData.florensis[0].companyName}
						</p>
						<p className='image__text__flex__title'>{cardsData.florensis[0].title}</p>
						<a href='#blog' className='show-link'>
							<img src={circle} alt='' className='circle' />
							<span className='read-more'>Read more</span>
						</a>
					</div>
				</div>
			</div>
			<div className='card__container'>
				{cardsData.cardImages2.map((card) => (
					<div className='card__container__image' key={card.id}>
						<img className='card__image__flex' src={card.image} alt={card.altText} />
						<div className='card__image__text__container'>
							<p className='card__image__text card__image__text__name'>
								{card.companyName}
							</p>
							<p className='card__image__text card__image__text__title'>
								{card.title}
							</p>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='card__container__break'>
				<div className='card__container__text__break'>
					{cardsData.cardText.map((card) => (
						<div className='card__text__flex' key={card.id}>
							<p className='card__text__flex__name'>{card.companyName}</p>
							<p className='card__text__flex__description'>{card.text}</p>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					))}
				</div>
				<div
					className='card__container__image__break'
					key={cardsData.florensis[1].id}
				>
					<img
						className='card__image__flex'
						src={cardsData.florensis[1].image}
						alt={cardsData.florensis[1].altText}
					/>
					<div className='image__text__flex'>
						<p className='image__text__flex__name'>
							{cardsData.florensis[1].companyName}
						</p>
						<p className='image__text__flex__title'>{cardsData.florensis[0].title}</p>
						<a href='#blog' className='show-link'>
							<img src={circle} alt='' className='circle' />
							<span className='read-more'>Read more</span>
						</a>
					</div>
				</div>
			</div>
			<div className='card__container'>
				{cardsData.cardImages3.map((card) => (
					<div className='card__container__image' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__image__text__container'>
							<p className='card__image__text card__image__text__name'>
								{card.companyName}
							</p>
							<p className='card__image__text card__image__text__title'>
								{card.title}
							</p>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='card__container__quote'>
				<p className='card__container__quote__description'>
					“Dept helped us tell our story through a bold new identity and a robust
					online experience. To the tone of 60% growth in online bookings in just one
					month”
				</p>
				<p className='card__container__quote__name'>
					MATTIJS TEN DRINK - CEO, TRANSAVIA
				</p>
			</div>
			<div className='card__container'>
				{cardsData.cardImages4.map((card) => (
					<div className='card__container__image' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__image__text__container'>
							<p className='card__image__text card__image__text__name'>
								{card.companyName}
							</p>
							<p className='card__image__text card__image__text__title'>
								{card.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
