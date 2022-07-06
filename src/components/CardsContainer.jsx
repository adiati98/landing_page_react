import React from 'react'
import circle from '../assets/svg/circle.svg'

export default function CardsContainer({ cardsData }) {
	return (
		<section className='cards__container'>
			<div className='card__grid'>
				{cardsData.cardImages1.map((card) => (
					<article className='card__article' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__text__container'>
							<h1>
								<span className='small card__text__name'>{card.companyName}</span>
								<span className='card__text__title'>{card.title}</span>
							</h1>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</article>
				))}
			</div>
			{/* flex card */}
			<div className='card__flex--reverse'>
				<section className='card__flex__list p-2'>
					{cardsData.cardText.map((card) => (
						<article className='card__flex__article' key={card.id}>
							<h1>
								<span className='card__flex__name'>{card.companyName}</span>
								<span className='card__flex__title'>{card.text}</span>
							</h1>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</article>
					))}
				</section>
				<article
					className='card__article card__flex__article'
					key={cardsData.florensis[0].id}
				>
					<img
						className='card__image card__flex__image'
						src={cardsData.florensis[0].image}
						alt={cardsData.florensis[0].altText}
					/>
					<div className='card__text__container card__flex__text__container'>
						<h1>
							<span className='small card__text__name'>
								{cardsData.florensis[0].companyName}
							</span>
							<span className='card__text__title'>
								{cardsData.florensis[0].title}
							</span>
						</h1>
						<a href='#blog' className='show-link'>
							<img src={circle} alt='' className='circle' />
							<span className='read-more'>Read more</span>
						</a>
					</div>
				</article>
			</div>
			<div className='card__grid'>
				{cardsData.cardImages2.map((card) => (
					<article className='card__article' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__text__container'>
							<h1>
								<span className='small card__text__name'>{card.companyName}</span>
								<span className='card__text__title'>{card.title}</span>
							</h1>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</article>
				))}
			</div>
			{/* flex card */}
			<div className='card__flex reverse'>
				<section className='card__flex__list p-2'>
					{cardsData.cardText.map((card) => (
						<article className='card__flex__article' key={card.id}>
							<h1>
								<span className='card__flex__name'>{card.companyName}</span>
								<span className='card__flex__title'>{card.text}</span>
							</h1>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</article>
					))}
				</section>
				<article
					className='card__article card__flex__article'
					key={cardsData.florensis[1].id}
				>
					<img
						className='card__image card__flex__image'
						src={cardsData.florensis[1].image}
						alt={cardsData.florensis[1].altText}
					/>
					<div className='card__text__container card__flex__text__container'>
						<h1>
							<span className='small card__text__name'>
								{cardsData.florensis[1].companyName}
							</span>
							<span className='card__text__title'>
								{cardsData.florensis[1].title}
							</span>
						</h1>
						<a href='#blog' className='show-link'>
							<img src={circle} alt='' className='circle' />
							<span className='read-more'>Read more</span>
						</a>
					</div>
				</article>
			</div>
			<div className='card__grid'>
				{cardsData.cardImages3.map((card) => (
					<article className='card__article' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__text__container'>
							<h1>
								<span className='small card__text__name'>{card.companyName}</span>
								<span className='card__text__title'>{card.title}</span>
							</h1>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</article>
				))}
			</div>
			<div className='quote p-2'>
				<blockquote>
					<span className='quote__description'>
						“Dept helped us tell our story through a bold new identity and a robust
						online experience. To the tone of 60% growth in online bookings in just
						one month”
					</span>
					<span className='quote__name'>MATTIJS TEN DRINK - CEO, TRANSAVIA</span>
				</blockquote>
			</div>
			<div className='card__grid'>
				{cardsData.cardImages4.map((card) => (
					<article className='card__article' key={card.id}>
						<img className='card__image' src={card.image} alt={card.altText} />
						<div className='card__text__container'>
							<h1>
								<span className='small card__text__name'>{card.companyName}</span>
								<span className='card__text__title'>{card.title}</span>
							</h1>
							<a href='#blog' className='show-link'>
								<img src={circle} alt='' className='circle' />
								<span className='read-more'>Read more</span>
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
