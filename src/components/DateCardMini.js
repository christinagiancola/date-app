import React from 'react';
import { Flex, Spacer, Box, Heading, Text, CloseButton } from '@chakra-ui/react';
import { deleteDateCard } from '../service/client_functions';

const DateCardMini = ({ title, details, id, ...rest }) => {
	let handleClick = () => {
		// open confirmation modal
		// if confirmed
		deleteDateCard(id);
		//refresh page to show updated library
		// if not confirmed, close modal
	};

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
				<CloseButton ml={4} onClick={() => handleClick()} />
			</Box>
		</Flex>
	);
};

export default DateCardMini;
