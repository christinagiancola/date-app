import React from 'react';
import { HStack, Button, Box, Menu, MenuButton, MenuList, MenuItem, IconButton, Show, Hide } from '@chakra-ui/react';
import {
	BsPlusSquare,
	BsFillHouseFill,
	BsList,
	BsFillPencilFill,
	BsPersonPlusFill,
	BsPersonDashFill,
} from 'react-icons/bs';

const NavMenu = ({ setLastClicked, isLoggedIn }) => {
	return (
		<HStack as='nav' className='text'>
			<Menu>
				<MenuButton
					as={Button}
					aria-label='Navigation Menu'
					textTransform='lowercase'
					leftIcon={<BsList />}
					variant='outline'
					borderRadius='10'
					disabled={!isLoggedIn}
				>
					Menu
				</MenuButton>
				<MenuList>
					<MenuItem textTransform='lowercase' icon={<BsFillHouseFill />} onClick={() => setLastClicked('home')}>
						Pick a Date
					</MenuItem>
					<MenuItem
						icon={<BsPlusSquare />}
						textTransform='lowercase'
						onClick={() => {
							setLastClicked('new-date');
						}}
					>
						Add New Date
					</MenuItem>
					<MenuItem
						icon={<BsFillPencilFill />}
						textTransform='lowercase'
						onClick={() => {
							setLastClicked('date-library');
						}}
					>
						View Date Library
					</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
};

export default NavMenu;
