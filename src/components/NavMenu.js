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
					<MenuItem icon={<BsPersonDashFill />}>User Logout</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
};

export default NavMenu;
