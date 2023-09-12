import React from 'react';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import { Flex, VStack, Text, Heading, Icon, Button } from '@chakra-ui/react';
import { BsCalendar2Event } from 'react-icons/bs';
import DateGenerator from './DateGenerator';

const Body = ({ setLastClicked, lastClicked, isLoggedIn, setIsLoggedIn, appName, dates, setDates }) => {
	let display;

	if (!isLoggedIn) {
		display = <Login setIsLoggedIn={setIsLoggedIn} setLastClicked={setLastClicked} />;
	}

	if (isLoggedIn) {
		if (lastClicked === 'home') {
			display = <DateGenerator appName={appName} />;
		}

		if (lastClicked === 'login') {
			display = <Login setIsLoggedIn={setIsLoggedIn} />;
		}

		if (lastClicked === 'new-date') {
			display = <DateForm setLastClicked={setLastClicked} />;
		}

		if (lastClicked === 'date-library') {
			display = <DateLibrary dates={dates} setDates={setDates} />;
		}
	}

	return (
		<Flex id='bodyContainer' w='100%' minWidth='450px' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
