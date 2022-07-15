import React from 'react';
import DateGenerator from './DateGenerator';
import DateCard from './DateCard';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react/cjs/react.production.min';

const Body = ({ lastClicked, isLoggedIn, setIsLoggedIn }) => {
	let display;

	if (!isLoggedIn) {
		display = <Login setIsLoggedIn={setIsLoggedIn} />;
	}

	if (isLoggedIn) {
		if (lastClicked === 'home') {
			display = <DateGenerator />;
		}

		if (lastClicked === 'login') {
			display = <Login setIsLoggedIn={setIsLoggedIn} />;
		}

		if (lastClicked === 'new-date') {
			display = <DateForm />;
		}

		if (lastClicked === 'date-library') {
			display = <DateLibrary />;
		}
	}

	//if not logged in, show user the login form as the home page

	return (
		<Flex id='bodyContainer' w='100%' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
