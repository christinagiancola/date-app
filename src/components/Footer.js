import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

// TODO: add footer content, social media links, blurb, link to github/linkedin, logo, etc.

const Footer = ({ appName }) => {
	let currentYear = new Date().getFullYear();
	return (
		<Box id='footerContainer' w={{ base: '100%', md: '90%', lg: '80%', xl: '70%' }}>
			<Flex direction='column' align='center' my='5'>
				<Heading as='h3' size='sm' className='text' align='center'>
					<p fontSize='sm' color='subtle' className='text'>
						{appName} &copy; {currentYear}
					</p>
				</Heading>
			</Flex>
		</Box>
	);
};

export default Footer;
