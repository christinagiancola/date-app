import React, { useState, useEffect } from 'react';
import DateGenerator from './DateGenerator';
import DateCard from './DateCard';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import { Flex, Box, VStack, Text, Heading, Icon } from '@chakra-ui/react';
import { BsCalendar2Event } from 'react-icons/bs';


const Body = ({ lastClicked, isLoggedIn, setIsLoggedIn, appName }) => {
	let display;

	if (!isLoggedIn) {
		display = (
    <VStack textTransform='lowercase'>
      <Icon as={BsCalendar2Event} w={10} h={10}/>
      <Heading as='h3' size='md'>Ready for your next date?</Heading>
      <Text fontSize='lg'>{appName} lets you create, collect, and generate the idea for your next great date</Text>
      <Text fontSize='lg'>that way you can spend less time planning what to do,</Text>
      <Text fontSize='lg'>and more time actually doing it</Text>
    </VStack>
    );
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

	return (
		<Flex id='bodyContainer' w='100%' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
