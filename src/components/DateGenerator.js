import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

const DateGenerator = () => {
	let generateRandomDate = () => {
		console.log('Get a date from the date-a-base!');
	};

	return (
		<Box w='80%' p='5' align='center' textTransform='lowercase'>
			<Heading as='h3'>Getting started is easy</Heading>
			<Box mt='2'>
				<p>Click the button below to pull a randomized date from your date library.</p>
			</Box>
			<Button size='lg' mt='5' textTransform='lowercase' onClick={() => generateRandomDate()}>
				Generate a Random Date
			</Button>
		</Box>
	);
};

export default DateGenerator;
