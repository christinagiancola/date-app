import React from 'react';
import { Box, Badge, Heading } from '@chakra-ui/react';

const DateLibrary = () => {
	let dates = require('../../dateCards.json');

	let dateLibrary = dates.map((date, i) => {
		return (
			<Box maxW='sm' borderWidth='1px' borderRadius='15px' p='6' align='center'>
				<Heading as='h5' size='md' key={i}>
					{date.name}
				</Heading>
			</Box>
		);
	});

	return <div>{dateLibrary}</div>;
};

export default DateLibrary;
