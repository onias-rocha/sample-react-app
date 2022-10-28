import React from 'react'

const List = ({users, deleteUser}) => {

	return (
		<>
			<ul>
				{users.map((user, index) => (
				<li key={index}>{user.name} | {user.job} | 
				<button onClick={() => deleteUser(user.id)}>X</button>
				</li>	
				))}
			</ul>
		</>
	)
}

export default List