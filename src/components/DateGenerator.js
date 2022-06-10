import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

const DateGenerator = () => {
	const generateRandomDate = () => {
		console.log('Get a date from the date-a-base!');
	};

	return (
		<Box w='70%' p='5' align='center' textTransform='lowercase'>
			<Heading as='h3'>Let's make this easy</Heading>
			<p>Click the button below to pull a randomized date from your date library.</p>
			<Button size='lg' mt='5' textTransform='lowercase' onClick={() => generateRandomDate()}>
				Generate a Random Date
			</Button>
		</Box>
	);
};

export default DateGenerator;
