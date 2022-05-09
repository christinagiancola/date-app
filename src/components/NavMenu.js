import React from 'react';
import { HStack, Button, Show, Box, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import {
	BsPlusSquare,
	BsFillHouseFill,
	BsList,
	BsFillPencilFill,
	BsPersonPlusFill,
	BsPersonDashFill,
} from 'react-icons/bs';

const NavMenu = ({ setShowLogin }) => {
	let showLogin = () => {
		setShowLogin(true);
	};

	return (
		<HStack as='nav' className='text'>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label='Navigation Menu'
					icon={<BsList />}
					variant='outline'
					borderRadius='10'
				/>
				<MenuList>
					<MenuItem icon={<BsFillHouseFill />}>Home</MenuItem>
					<MenuItem icon={<BsPlusSquare />}>Add New Date</MenuItem>
					<MenuItem icon={<BsFillPencilFill />}>Edit Dates</MenuItem>
					<MenuItem icon={<BsPersonPlusFill />} onClick={showLogin}>
						User Login
					</MenuItem>
					<MenuItem icon={<BsPersonDashFill />}>User Logout</MenuItem>
				</MenuList>
			</Menu>
			{/* <Button textTransform='lowercase' size='md' borderRadius='50' leftIcon={<BsPlusCircle />}>
				<Show breakpoint='(min-width: 750px)'>
					<Box>New</Box>
				</Show>
			</Button>
			<Button textTransform='lowercase' size='md' borderRadius='50' leftIcon={<BsListUl />}>
				<Show breakpoint='(min-width: 750px)'>
					<Box>Edit</Box>
				</Show>
			</Button> */}
		</HStack>
	);
};

export default NavMenu;
