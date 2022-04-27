import React from 'react';
import { HStack, Button, Show, Box } from '@chakra-ui/react';
import { BsListUl, BsPlusCircle } from 'react-icons/bs';

const Menu = () => {
	return (
		<HStack as='nav'>
			<Button textTransform='lowercase' size='md' borderRadius='50' leftIcon={<BsPlusCircle />}>
				<Show breakpoint='(min-width: 750px)'>
					<Box>New</Box>
				</Show>
			</Button>
			<Button textTransform='lowercase' size='md' borderRadius='50' leftIcon={<BsListUl />}>
				<Show breakpoint='(min-width: 750px)'>
					<Box>Edit</Box>
				</Show>
			</Button>
		</HStack>
	);
};

export default Menu;
