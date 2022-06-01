import React from 'react';
import { Container, Heading, Flex, Button, ButtonGroup, IconButton, Box } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';

const DateCard = () => {
	const date = {
		id: 1,
		name: 'take hazel to the dog park',
		repeating: true,
		budgetInDollars: 0,
		timeOfDay: ['morning', 'afternoon'],
		dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		petFriendly: true,
	};

	return (
		<Container maxW='md' borderRadius='15' centerContent id='date-card'>
			<Flex justify='center' align='center' direction='column' textTransform='lowercase' className='text' my='3'>
				<Heading as='h3' size='lg' mt='5'>
					{date.name}
				</Heading>
				{date.dateDetails && (
					<div>
						<Heading as='h4' size='sm' mt='5'>
							Details:
						</Heading>
						<p className='centered'>{date.dateDetails}</p>
					</div>
				)}
				{date.location && (
					<div>
						<Heading as='h4' size='sm' mt='5'>
							Location:
						</Heading>
						<p className='centered'>{date.location}</p>
					</div>
				)}
				<Heading as='h4' size='sm' mt='5'>
					Pet Friendly?
				</Heading>
				{date.petFriendly ? <p className='centered'>Yes</p> : <p className='centered'>No</p>}
				<Heading as='h4' size='sm' mt='5'>
					Day(s) of the Week:
				</Heading>
				<p className='centered'>{date.dayOfWeek.join(', ')}</p>
				<Heading as='h4' size='sm' mt='5'>
					Time(s) of the Day:
				</Heading>
				<p className='centered'>
					<span>{date.timeOfDay.join(', ')}</span>
				</p>
				<Heading as='h4' size='sm' mt='5'>
					Repeating?
				</Heading>
				{date.repeating ? <p className='centered'>Yes</p> : <p className='centered'>No</p>}
				<ButtonGroup py='5' size='md' variant='outline'>
					<Button borderRadius='10' width='130px' className='button'>
						it's a date!
					</Button>
					<IconButton icon={<BsCalendarPlus />} borderRadius='10' width='45px' className='button' />
				</ButtonGroup>
			</Flex>
		</Container>
	);
};

export default DateCard;
