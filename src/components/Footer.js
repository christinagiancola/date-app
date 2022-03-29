import React from 'react';
import { Flex, Spacer, Box, HStack, Heading, Text, IconButton } from '@chakra-ui/react';
import { BsCalendarPlus, BsChat } from 'react-icons/bs';

const Footer = () => {
	return (
		<Box id='footerContainer' w='100%'>
			<HStack color='teal' h='45' px='2'>
				<Flex direction='column'>
					<Heading as='h3' size='sm'>
						Footer Text
					</Heading>
					<p fontSize='sm' color='subtle'>
						&copy; {new Date().getFullYear()}
					</p>
				</Flex>
				<Spacer />
				<Flex>
					<Box>
						<IconButton icon={<BsCalendarPlus />} />
						<IconButton icon={<BsChat />} />
						<a>Link &nbsp;</a>
						<a>Link &nbsp;</a>
					</Box>
				</Flex>
			</HStack>
		</Box>
	);
};

export default Footer;
