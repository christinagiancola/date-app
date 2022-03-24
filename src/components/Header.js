import React from 'react';
import { HStack, VStack, Box, Heading, Button } from '@chakra-ui/react';

const Header = () => {
	return (
		<Box w='100%'>
			<HStack id='headerContainer' justify='space-between' mt='3'>
				<VStack align='flex-start' color='teal'>
					<Heading as='h1'>date app</Heading>
					<Heading as='h2' size='md'>
						less planning, more doing
					</Heading>
				</VStack>
				<Button variant='solid' colorScheme='teal'>
					Login
				</Button>
			</HStack>
		</Box>
	);
};

export default Header;
