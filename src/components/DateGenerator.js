import React from 'react';
import { BsCalendar2Event } from 'react-icons/bs';
import { Box, Button, Heading, VStack, Icon, Text } from '@chakra-ui/react';

const DateGenerator = ({ appName }) => {
	let generateRandomDate = (e) => {
		e.preventDefault();
		console.log('Get a date from the date-a-base!');
	};

	return (
		<Box align='center'>
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
		</Box>
	);
};

export default DateGenerator;
