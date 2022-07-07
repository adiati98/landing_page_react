import React, { useState } from 'react'

export default function Form(e) {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(values)
	}

	return (
		<div className='form__container'>
			<p className='form__title'>QUESTION? WE ARE HERE TO HELP!</p>
			<form onSubmit={handleSubmit}>
				<div className='form--top'>
					<div className='form__name'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={values.name}
							onChange={handleChange}
						/>
					</div>
					<div className='form__email'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							aria-describedby='form__input__warning'
							value={values.email}
							onChange={handleChange}
							required
						/>
						{!values.email && <p className='warning'>This field is required</p>}
					</div>
				</div>
				<div className='form__message'>
					<label
						htmlFor='message'
						name='message'
						value={values.message}
						onChange={handleChange}
					>
						Message
					</label>
					<textarea id='message' />
				</div>
				<button type='submit' className='form__btn'>
					SEND
				</button>
			</form>
		</div>
	)
}
