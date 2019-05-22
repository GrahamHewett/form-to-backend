import React, { Component } from 'react';

export default class App extends Component {

	handleSubmit(event) {
		event.preventDefault(event)
		const user = document.getElementById('form_user').value
		const email = document.getElementById('form_email').value
		const age = document.getElementById('form_age').value
		const gender = document.getElementById('form_gender').value
		const postBody = { user, age, email, gender}
		console.log(postBody)
		fetch('/rest/storeUser', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		  },
   		body: JSON.stringify(postBody)
  })
	}

	render() {
		return (
			<form className='form' onSubmit={(e) => this.handleSubmit(e)}>
				<span>UserName:</span>
				<input id="form_user" type="text" required></input>
				<span>Email:</span>
				<input id="form_email" type="email" required></input>
				<span>Age:</span>
				<input id="form_age" type="number" min='0' max='100'>
				</input>
				<span>Gender:</span>
				<input id="form_gender" type="text" required></input>
				<input type="submit">
				</input>
			</form>
		)
}
}
