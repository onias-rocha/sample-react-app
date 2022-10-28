import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {

	const [users, setUsers] = useState([
		{
			"id": 1,
			"name": "Diego",
			"job": "Software Engineer"
		},
		{
			"id": 2,
			"name": "Onias",
			"job": "Software Developer"
		}
	])

	const handleSubmit = (user) => {
		console.log(`parabens, seu user ${user.name} chegou em App.js`)
		setUsers(oldVal => [
			...oldVal,
			user
		])
	}

	const handleDeleteUser = (id) => {
		console.log(`chegou encima com o id ${id}`)
		const usersAtualizados = users.filter(user => user.id !== id);
		setUsers(usersAtualizados)
	}

  return (
   <>
		<Form submit={handleSubmit}/>
		<List users={users} deleteUser={handleDeleteUser}/>
	 </>
  );
}

export default App;
