import React from 'react';
import { Heading, Flex, Box, Container, Button, Spacer, IconButton } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';

const Body = () => {
	return (
		<Flex id='bodyContainer' w='100%' my='3' py='3' justify='center'>
			<Container bg='lightblue' maxW='xl' borderRadius='100' centerContent>
				<Flex justify='center' align='center' direction='column' textTransform='lowercase'>
					<Heading as='h3' size='lg' mt='5'>
						take hazel to the dog park
					</Heading>
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
					<Button as='btn' variant='solid' size='md' borderRadius='50' mt='5'>
						it's a date!
					</Button>
					<IconButton size='md' icon={<BsCalendarPlus />} variant='outline' borderRadius='50' my='3' />
					{/* <span>Add Date to Calendar</span> */}
				</Flex>
			</Container>
		</Flex>
	);
};

export default Body;
