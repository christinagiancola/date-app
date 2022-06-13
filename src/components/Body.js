import React, { useState } from 'react';
import DateGenerator from './DateGenerator';
import DateCard from './DateCard';
import DateForm from './DateForm';
import LoginModal from './LoginModal';
import DateLibrary from './DateLibrary';
import { Flex } from '@chakra-ui/react';

const Body = ({ lastClicked }) => {
	let display;

	// TODO: swap out repeated code for switch statement

	if (lastClicked === 'home') {
		// console.log(getHealthCheck());
		// display = <DateCard />;
		// display = <DateGenerator />;
		display = <DateLibrary />;
	}

	if (lastClicked === 'login') {
		display = <LoginModal />;
	}

	if (lastClicked === 'new-date') {
		display = <DateForm />;
	}

	if (lastClicked === 'date-library') {
		display = <DateLibrary />;
	}

	return (
		<Flex id='bodyContainer' w='100%' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
