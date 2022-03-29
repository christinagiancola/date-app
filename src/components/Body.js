import React from 'react';
import { Heading, Flex, Box, Container, Button, Spacer } from '@chakra-ui/react';

const Body = () => {
	return (
		<Flex id='bodyContainer' w='100%' my='3' py='3' justify='center'>
			<Container bg='lightblue' maxW='xl' h='500' borderRadius='md' centerContent>
				<Flex justify='center' direction='column'>
					<Heading as='h3' size='lg' mt='10'>
						take hazel to the dog park
					</Heading>
					<hr></hr>
					<Heading as='h4' size='sm' mt='5'>
						Location:
					</Heading>
					<Heading as='h4' size='sm' mt='5'>
						Pet Friendly?
					</Heading>
					<Heading as='h4' size='sm' mt='5'>
						Day(s) of the Week:
					</Heading>
					<Heading as='h4' size='sm' mt='5'>
						Time(s) of the Day:
					</Heading>
					<Heading as='h4' size='sm' mt='5' mb='10'>
						Repeating?
					</Heading>
					<Button as='btn'>it's a date!</Button>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Body;
