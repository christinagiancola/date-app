import React from 'react';
import { Flex, Spacer, Box, HStack, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box id='footerContainer' w='100%'>
			<HStack color='teal' h='45' px='2'>
				<Flex>
					<Heading as='h3' size='sm'>
						Footer Text
					</Heading>
				</Flex>
				<Spacer />
				<Flex>
					<Box>
						<a>Link &nbsp;</a>
						<a>Link &nbsp;</a>
						<a>Link &nbsp;</a>
						<a>Link &nbsp;</a>
					</Box>
				</Flex>
			</HStack>
		</Box>
	);
};

export default Footer;
