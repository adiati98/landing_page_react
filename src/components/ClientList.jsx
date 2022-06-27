import React from 'react'
import Client from './Client'

// Container for client list

export default function ClientList({ clientsData }) {
	return (
		<div className='client-list__container'>
			<div className='client-list__text'>
				<p className='client-list__text__title'>Clients</p>
				<p className='client-list__text__description'>
					We value a great working relationship with our clients above all else. It’s
					why they often come to our parties. It’s also why we’re able to challenge
					and inspire them to reach for the stars.
				</p>
			</div>
			<Client clientsData={clientsData} />
		</div>
	)
}
