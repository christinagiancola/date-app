import React from 'react';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import { Flex, VStack, Text, Heading, Icon, Button } from '@chakra-ui/react';
import { BsCalendar2Event } from 'react-icons/bs';

const Body = ({ lastClicked, isLoggedIn, setIsLoggedIn, appName }) => {
	let display;

	// TODO: action button should take you to a "quiz" style component, lets you input filters
	// ? Set up button to generate a random date from the library first? Then implement a more complex filter system later?

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
		if (lastClicked === 'login') {
			display = <Login setIsLoggedIn={setIsLoggedIn} />;
		} else display = landingPage;
	}

	if (isLoggedIn) {
		if (lastClicked === 'home') {
			display = landingPage;
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

	return (
		<Flex id='bodyContainer' w='100%' minWidth='450px' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
