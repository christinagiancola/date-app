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

const NavMenu = () => {
	return (
		<HStack as='nav' className='text'>
			<Menu>
				<MenuButton as={Button} aria-label='Navigation Menu' leftIcon={<BsList />} variant='outline' borderRadius='10'>
					Menu
				</MenuButton>
				<MenuList>
					<MenuItem icon={<BsFillHouseFill />} onClick={() => setShowHome(true)}>
						Home
					</MenuItem>
					<MenuItem
						icon={<BsPlusSquare />}
						onClick={() => {
							setShowNewDateForm(true);
						}}
					>
						Add New Date
					</MenuItem>
					<MenuItem
						icon={<BsFillPencilFill />}
						onClick={() => {
							setShowDateLibrary(true);
						}}
					>
						Edit Dates
					</MenuItem>
					<MenuItem icon={<BsPersonDashFill />}>User Logout</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
};

export default NavMenu;
