import React from 'react';
import { Heading, Flex, Box, Container, Button, Spacer } from '@chakra-ui/react';

const Body = () => {
	return (
		<Flex id='bodyContainer' w='100%' my='3' py='3' justify='center'>
			<Container bg='lightblue' maxW='xl' borderRadius='100' centerContent>
				<Flex justify='center' align='center' direction='column'>
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
					<Button as='btn' my='5'>
						it's a date!
					</Button>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Body;
