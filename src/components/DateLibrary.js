import React, { useState, useEffect } from 'react';
import { Box, Badge, Heading } from '@chakra-ui/react';
import { axiosInstance } from '../service/client_functions';

const DateLibrary = () => {
	const [dates, setDates] = useState([]);

	let getDateCards = () => {
		axiosInstance
			.get(`/dates`)
			.then(function (res) {
				const apiResponse = res.data;
				const dateArray = apiResponse.data;
				return setDates(dateArray);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		getDateCards();
	}, []);

	if (dates.length > 0) {
		console.log('dates', dates);
		return (
			<div>
				{dates.map((date) => {
					return <Heading key={date.id}>{date.name}</Heading>;
				})}
			</div>
		);
	}

	return <div>The Date Library is Empty</div>;
};

export default DateLibrary;
