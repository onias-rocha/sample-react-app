import React, { useState } from 'react'

const Form = ({submit}) => {

	const [user, setUser] = useState({
		"id": 0,
		"name": "",
		"job": ""
	})

	const resetUser = () => {
		setUser({
			"id": 0,
			"name": "",
			"job": ""
		})
	}

	const handleChange = (e) => {
		const {name, value} = e.target;
		setUser((valorAntigo) => {
			return {
				...valorAntigo,
				[name]: value
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		submit(user);
		resetUser();
	}

	return (
		<>
			<form>
				<label for="fname">Name:</label>
				<input type="text" id="name" name="name" value={user.name} onChange={handleChange}/> <br></br>
				<label for="lname">Job:</label>
				<input type="text" id="job" name="job" value={user.job} onChange={handleChange}/> <br></br>
				<input type="submit" onClick={handleSubmit} value="Submit"/>
			</form> 
		</>
	)
}

export default Form