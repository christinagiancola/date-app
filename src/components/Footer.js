import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Container id='footerContainer' w='100%'>
			<Flex direction='column' align='center' my='4'>
				<Heading as='h3' size='sm'>
					Footer Text
				</Heading>
				<p fontSize='sm' color='subtle'>
					&copy; {new Date().getFullYear()}
				</p>
			</Flex>
		</Container>
	);
};

export default Footer;
