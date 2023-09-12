import React from 'react';
import { Flex, Spacer, Box, Heading, Text, CloseButton } from '@chakra-ui/react';
import { deleteDateCard, truncateString } from '../service/client_functions';

const DateCardMini = ({ setDeletedDate, title, details, id, ...rest }) => {
	let handleClosingClick = () => {
		// TODO open confirmation modal
		// TODO if confirmed
		deleteDateCard(id);
		setDeletedDate(`${id}`);
		// TODO refresh page to show updated library
		// TODO if not confirmed, close modal
	};

	return (
		<Flex minWidth='max-content' align='center' justify='center'>
			<Spacer />
			<Box>
				<Heading as='h3' size='md'>
					{title.toLowerCase()}
				</Heading>
				{details ? <Text>{truncateString(details, 50).toLowerCase()}</Text> : null}
			</Box>
			<Spacer />
			<Box>
				<CloseButton ml={4} onClick={() => handleClosingClick()} />
			</Box>
		</Flex>
	);
};

export default DateCardMini;
