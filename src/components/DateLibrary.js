import React from 'react';

const DateLibrary = () => {
	let dates = require('../../dateCards.json');
	let dateLibrary = dates.map((date, i) => <div key={i}>{date.name}</div>);

	return <div>{dateLibrary}</div>;
};

export default DateLibrary;
