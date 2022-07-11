import React, { useState, useEffect } from 'react';
import { Box, Badge, Heading, SimpleGrid } from '@chakra-ui/react';
import { axiosInstance } from '../service/client_functions';
import DateCardMini from './DateCardMini';

// TODO: add badge for dates that have expiration dates
// TODO: add buttons to edit or delete date card, delete button should show modal that confirms delete card choice
// TODO:

const DateLibrary = () => {
	const [dates, setDates] = useState([]);

	// ? Do we really want to get ALL dates or should we break things into groups/pages to avoid very large responses
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
		return (
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='20px'>
				{dates.map((date) => {
					return (
						<Box align='center' p={4} height='80px' borderWidth='1px' borderRadius='lg' noOfLines={1} overflow='hidden'>
							<DateCardMini title={date.name} key={date.id} details={date.details} />
						</Box>
					);
				})}
			</SimpleGrid>
		);
	}

	return <div>Oh no! Your library is empty. Add some date cards to get started!</div>;
};

export default DateLibrary;
