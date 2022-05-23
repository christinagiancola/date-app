import React from 'react';
import { Container, Box, Flex, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box id='footerContainer' w={{ base: '100%', md: '90%', lg: '80%', xl: '70%' }} bg='blue.100'>
			<Flex direction='column' align='center' my='5'>
				<Heading as='h3' size='sm' className='text' align='center' mb='3'>
					<p fontSize='sm' color='subtle' className='text'>
						date app &copy; {new Date().getFullYear()} created by c.giancola and d.young
					</p>
				</Heading>
			</Flex>
		</Box>
	);
};

export default Footer;
