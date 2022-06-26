import React from 'react'

export default function Form(e) {
  return (
			<div className='form__container'>
				<p className='form__title'>QUESTION? WE ARE HERE TO HELP!</p>
				<form>
					<div className='form--top'>
						<div className='form__name'>
							<label htmlFor='name'>Name</label>
							<input type='text' id='name' />
						</div>
						<div className='form__email'>
							<label htmlFor='email'>
								Email
							</label>
							<input type='text' id='email' />
              <p className="form__input__warning">This field is required</p>
						</div>
					</div>
					<div className='form__message'>
						<label htmlFor='message'>Message</label>
						<textarea id='message' />
					</div>
					<button type='submit' className='form__btn'>
						SEND
					</button>
				</form>
			</div>
		)
}
