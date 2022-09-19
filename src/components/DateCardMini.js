import React from 'react';
import { Flex, Spacer, Box, Heading, Text, CloseButton } from '@chakra-ui/react';

const DateCardMini = ({ title, details, ...rest }) => {
	return (
		<Flex minWidth='max-content' align='center' justify='center'>
			<Spacer />
			<Box>
				<Heading as='h3' size='md'>
					{title}
				</Heading>
				{details ? <Text>{details}</Text> : null}
			</Box>
			<Spacer />
			<Box>
				<CloseButton ml={4} />
			</Box>
		</Flex>
	);
};

export default DateCardMini;
