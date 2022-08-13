import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { axiosInstance } from '../service/client_functions';
import DateCardMini from './DateCardMini';

// TODO: make <DateCardMini> clickable (or edit button? on hover?)-- when clicked hide other cards and show full <DateCard>
// TODO: add delete button to <DateCardMini> (on hover?) -- open up a modal to confirm delete, if confirmed remove from database
// TODO: add filter options to show different dates depending on various details (color code? badges?)
// TODO: add badge for dates that have expiration dates

const DateLibrary = () => {
	const [dates, setDates] = useState([]);

	// ? Do we really want to get ALL dates or should we break things into groups/pages to avoid very large responses
	let getDateCards = () => {
		axiosInstance
			.get(`/dates`)
			.then(function (res) {
				const apiResponse = res.data;
				return setDates(apiResponse);
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
