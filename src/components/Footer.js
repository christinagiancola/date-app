import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Container id='footerContainer' w='100%'>
			<Flex direction='column' align='center' mb='5'>
				<Heading as='h3' size='sm' className='text'>
					Footer Text
				</Heading>
				<p fontSize='sm' color='subtle' className='text'>
					&copy; {new Date().getFullYear()}
				</p>
			</Flex>
		</Container>
	);
};

export default Footer;
