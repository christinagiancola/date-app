import React from 'react';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import { Flex, VStack, Text, Heading, Icon, Button } from '@chakra-ui/react';
import { BsCalendar2Event } from 'react-icons/bs';

const Body = ({ setLastClicked, lastClicked, isLoggedIn, setIsLoggedIn, appName, dates, setDates }) => {
	let display;

	const landingPage = (
		<VStack textTransform='lowercase'>
			<Icon as={BsCalendar2Event} w={10} h={10} />
			<Heading as='h3' size='md'>
				Ready for your next date?
			</Heading>
			<Text fontSize='lg'>{appName} lets you create, collect, and generate the idea for your next great date</Text>
			<Text fontSize='lg'>that way you can spend less time figuring out what to do,</Text>
			<Text fontSize='lg'>and more time actually doing it</Text>
			<Button textTransform='lowercase'>generate a date</Button>
		</VStack>
	);

	if (!isLoggedIn) {
		display = <Login setIsLoggedIn={setIsLoggedIn} setLastClicked={setLastClicked} />;
	}

	if (isLoggedIn) {
		if (lastClicked === 'home') {
			display = landingPage;
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
