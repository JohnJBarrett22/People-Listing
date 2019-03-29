import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function People() {
	const friends = [
		{ name: 'John', job: 'Developer', age: '23', compamny: 'Apple' },
		{ name: 'Bob', job: 'Designer', age: '22', company: 'Facebook' },
		{ name: 'Susy', job: 'Artist', age: '21', company: 'Twitter' }
	];
	return (
		<section>
			<Person person={friends[0]} />
			<Person person={friends[1]} />
			<Person person={friends[2]} />
		</section>
	);
}

const Person = (props) => {
	console.log(props);

	const { name, job, age, company } = props.person;

	return (
		<div>
			<h1>{name}</h1>
			<p>{job}</p>
			<p>{age}</p>
			<p>{company}</p>
			<hr />
		</div>
	);
};

ReactDOM.render(<People />, document.getElementById('root'));
