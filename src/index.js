import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function People() {
	return (
		<section>
			<Person name="John" job="Developer" />
		</section>
	);
}

const Person = (props) => {
	console.log(props);

	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.developer}</p>
			<hr />
		</div>
	);
};

ReactDOM.render(<People />, document.getElementById('root'));
