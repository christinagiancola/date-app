import React from 'react';
import { Container, Heading, Flex, Button, IconButton, Box } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';

const DateCard = () => {
	return (
		<Container maxW='lg' borderRadius='25' centerContent id='date-card'>
			<Flex justify='center' align='center' direction='column' textTransform='lowercase'>
				<Heading as='h3' size='lg' mt='5'>
					take hazel to the dog park
				</Heading>
				<Heading as='h4' size='sm' mt='5'>
					Details:
				</Heading>
				<p>pick up coffee and a pup cup on the way home</p>
				<Heading as='h4' size='sm' mt='5'>
					Location:
				</Heading>
				<p>Barker Field @ Byrd Park</p>
				<Heading as='h4' size='sm' mt='5'>
					Pet Friendly?
				</Heading>
				<p>Yes</p>
				<Heading as='h4' size='sm' mt='5'>
					Day(s) of the Week:
				</Heading>
				<p>
					<span>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</span>
				</p>
				<Heading as='h4' size='sm' mt='5'>
					Time(s) of the Day:
				</Heading>
				<p>
					<span>Morning, Afternoon, Evening, Overnight</span>
				</p>
				<Heading as='h4' size='sm' mt='5'>
					Repeating?
				</Heading>
				<p>Yes</p>
				<Box py='5'>
					<Button as='btn' variant='solid' size='md' borderRadius='50' mr='2'>
						it's a date!
					</Button>
					<IconButton size='md' icon={<BsCalendarPlus />} variant='solid' borderRadius='50' />
				</Box>
				{/* <span>Add Date to Calendar</span> */}
			</Flex>
		</Container>
	);
};

export default DateCard;
