import React from 'react';
import { Flex, Spacer, HStack, VStack, Box, Heading, Button, Link, LinkBox } from '@chakra-ui/react';

const Header = () => {
	return (
		<Box w='100%'>
			<HStack id='headerContainer' justify='space-between' mt='5'>
				<VStack align='flex-start' color='teal' px='2'>
					<Heading as='h1'>date app</Heading>
					<Heading as='h2' size='md'>
						<span class='line'>
							<p>less planning,&nbsp;</p>
						</span>
						<span class='line'>
							<p>more doing</p>
						</span>
					</Heading>
				</VStack>
				<Spacer />
				<Box as='nav'>
					<Link pr='2'>Link</Link>
					<Link pr='2'>Link</Link>
				</Box>
				<Button as='btn' variant='solid' colorScheme='teal'>
					Login
				</Button>
			</HStack>
		</Box>
	);
};

export default Header;
