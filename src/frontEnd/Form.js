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
				<label>UserName:</label>
				<input id="form_user" type="text" required></input>
				<label>Email:</label>
				<input id="form_email" type="email" required></input>
				<label>Age:</label>
				<input id="form_age" type="number" min='0' max='100'>
				</input>
				<label>Gender:</label>
				<select id="form_gender" type="text" required>
					<option>M</option>
					<option>F</option>
					<option>Other</option>
				</select>
				<input type="submit">
				</input>
			</form>
		)
}
}
