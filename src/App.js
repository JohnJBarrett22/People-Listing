import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {
	const people = [
		{
			img: 22,
			name: 'John',
			job: 'Developer'
		},
		{
			img: 34,
			name: 'Bob',
			job: 'Designer'
		},
		{
			img: 56,
			name: 'Peter',
			job: 'Artist'
		}
	];

	return (
		<section>
			<Person person={people[0]} />
			<Person person={people[1]} />
			<Person person={people[2]} />
		</section>
	);
};

const Person = () => {
	const url = 'https://randomuser.me/api/portraits/thumb/men/65.jpg';

	return (
		<div className="person">
			<img src={url} alt="" />
			<div>
				<h4>Name</h4>
				<h4>Job</h4>
			</div>
		</div>
	);
};

export default App;
