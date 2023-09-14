import React from 'react';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import { Flex } from '@chakra-ui/react';
import DateGenerator from './DateGenerator';

const Body = ({ setLastClicked, lastClicked, isLoggedIn, setIsLoggedIn, appName, dates, setDates, getAllDates }) => {
	let display;

	if (!isLoggedIn) {
		display = <Login setIsLoggedIn={setIsLoggedIn} setLastClicked={setLastClicked} />;
	}

	if (isLoggedIn) {
		if (lastClicked === 'home') {
			display = <DateGenerator appName={appName} dates={dates} />;
		}

		if (lastClicked === 'login') {
			display = <Login setIsLoggedIn={setIsLoggedIn} />;
		}

		if (lastClicked === 'new-date') {
			display = <DateForm setLastClicked={setLastClicked} />;
		}

		if (lastClicked === 'date-library') {
			display = <DateLibrary dates={dates} setDates={setDates} getAllDates={getAllDates} />;
		}
	}

	return (
		<Flex id='bodyContainer' w='100%' minWidth='450px' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
