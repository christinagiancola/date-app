import React from 'react';
import { Container, Heading, Flex, Button, ButtonGroup, IconButton, Box } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';

const DateCard = () => {
	return (
		<Container maxW='md' borderRadius='15' centerContent id='date-card'>
			<Flex justify='center' align='center' direction='column' textTransform='lowercase' className='text' my='3'>
				<Heading as='h3' size='lg' mt='5'>
					take hazel to the dog park
				</Heading>
				<Heading as='h4' size='sm' mt='5'>
					Details:
				</Heading>
				<p className='centered'>
					pick up coffee and a pup cup on the way home, testing testing testing testing testing testing
				</p>
				<Heading as='h4' size='sm' mt='5'>
					Location:
				</Heading>
				<p className='centered'>Barker Field @ Byrd Park</p>
				<Heading as='h4' size='sm' mt='5'>
					Pet Friendly?
				</Heading>
				<p className='centered'>Yes</p>
				<Heading as='h4' size='sm' mt='5'>
					Day(s) of the Week:
				</Heading>
				<p className='centered'>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</p>
				<Heading as='h4' size='sm' mt='5'>
					Time(s) of the Day:
				</Heading>
				<p className='centered'>
					<span>Morning, Afternoon, Evening, Overnight</span>
				</p>
				<Heading as='h4' size='sm' mt='5'>
					Repeating?
				</Heading>
				<p className='centered'>Yes</p>
				<ButtonGroup py='5' size='md' variant='outline'>
					<Button borderRadius='10' width='130px' className='button'>
						it's a date!
					</Button>
					<IconButton icon={<BsCalendarPlus />} borderRadius='10' width='45px' className='button' />
				</ButtonGroup>
				{/* <span>Add Date to Calendar</span> */}
			</Flex>
		</Container>
	);
};

export default DateCard;
