import React from 'react';
import { Flex, Spacer, Box, HStack, Heading } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box id='footerContainer' w='100%'>
			<HStack color='teal'>
				<Flex>
					<Heading as='h3' size='sm'>
						Footer Text
					</Heading>
				</Flex>
				<Spacer />
				<Flex>
					<Heading as='h3' size='sm' justifyContent=''>
						Footer Links
					</Heading>
				</Flex>
			</HStack>
		</Box>
	);
};

export default Footer;
