import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Container id='footerContainer' w='100%'>
			<Flex direction='column' align='center' mb='10'>
				<Heading as='h3' size='sm' className='text' align='center' mb='3'>
					<div>date app</div>
				</Heading>
				<p fontSize='sm' color='subtle' className='text'>
					&copy; {new Date().getFullYear()} created by c.giancola and d.young
				</p>
			</Flex>
		</Container>
	);
};

export default Footer;
