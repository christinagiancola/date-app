import React, { useState, useEffect } from 'react';
import { Container, Heading, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';

const DateCard = ({ generateRandomDate }) => {
	let [date, setDate] = useState();

	useEffect(() => {
		let newDate = generateRandomDate();
		setDate(newDate);
	}, []);

	let handleClick = (e) => {
		//TODO add 'isLoading' attribute to new date btn when clicked
		e.preventDefault();
		let newDate = generateRandomDate();
		setDate(newDate);
	};

	if (date) {
		return (
			<Container maxW='md' borderRadius='15' centerContent id='date-card'>
				<Flex justify='center' align='center' direction='column' textTransform='lowercase' className='text' my='3'>
					<Heading as='h3' size='lg' mt='5'>
						{date.name}
					</Heading>
					<Heading as='h4' size='sm' mt='5'>
						Details:
					</Heading>
					{date.dateDetails ? date.dateDetails : 'no details'}
					<Heading as='h4' size='sm' mt='5'>
						Location:
					</Heading>
					{date.location ? date.location : 'no location'}
					<Heading as='h4' size='sm' mt='5'>
						Pet Friendly?
					</Heading>
					{date.petFriendly ? <p>Yes</p> : <p>No</p>}
					<Heading as='h4' size='sm' mt='5'>
						Day(s) of the Week:
					</Heading>
					{date.dayOfWeek ? date.dayOfWeek.join(', ') : 'any day'}
					<Heading as='h4' size='sm' mt='5'>
						Time(s) of the Day:
					</Heading>
					{date.timeOfDay ? date.timeOfDay.join(', ') : 'anytime'}
					<Heading as='h4' size='sm' mt='5'>
						Repeating?
					</Heading>
					{date.repeating ? 'yes' : 'no'}
					<ButtonGroup py='5' size='md' variant='outline'>
						<Button borderRadius='10' width='auto' className='button' leftIcon={BsCalendarPlus}>
							let's do it
						</Button>
						<Button id='new-date-btn' borderRadius='10' width='auto' className='button' onClick={(e) => handleClick(e)}>
							pick another date
						</Button>
					</ButtonGroup>
				</Flex>
			</Container>
		);
	}

	if (!date) {
		return (
			<Container maxW='md' borderRadius='15' centerContent id='date-card'>
				<Heading as='h1' size='lg'>
					Oooops, looks like your library is empty!
				</Heading>
			</Container>
		);
	}
};

export default DateCard;
