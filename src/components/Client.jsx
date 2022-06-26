import React from 'react'

export default function Client({ clientsData }) {
	return (
		<div className='client__container'>
			{clientsData.map((client, index) => (
				<img
					className='client__logo__svg'
					src={client.logo}
					alt={client.altText}
					key={client.id}
				/>
			))}
		</div>
	)
}
