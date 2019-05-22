import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		form_user: 'username',
		form_email: 'A@b.com',
		form_age: 35,
		form_gender: 'F',
	  }
	}

	async handleSubmit(event) {
		event.preventDefault(event)
		console.log('helloHay')
		const user = document.getElementById('form_user').value
		const email = document.getElementById('form_email').value
		const age = document.getElementById('form_age').value
		const gender = document.getElementById('form_gender').value
		await this.setState({form_user: user})
		await this.setState({form_user: age})
		await this.setState({form_user: email})
		await this.setState({form_user: gender})
		const postBody = {
			"user": this.state.form_user,
			"age": this.state.form_age,
			"email": this.state.form_email,
			"gender": this.state.form_gender
		}
		console.log(postBody)
		fetch('/rest/storeUser', {
    	method: 'post',
   		body: JSON.stringify(postBody)
  })
	}

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
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
