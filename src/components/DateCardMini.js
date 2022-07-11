import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const DateCardMini = ({ title, details, ...rest }) => {
	return (
		<Box>
			<Heading as='h3' size='md'>
				{title}
			</Heading>
			{details ? <Text>{details}</Text> : null}
		</Box>
	);
};

export default DateCardMini;
