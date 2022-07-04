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

const NavMenu = ({ setLastClicked }) => {
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
				>
					Menu
				</MenuButton>
				<MenuList>
					<MenuItem textTransform='lowercase' icon={<BsFillHouseFill />} onClick={() => setLastClicked('home')}>
						Home
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
						Edit Dates
					</MenuItem>
					<MenuItem textTransform='lowercase' icon={<BsPersonDashFill />} onClick={() => setLastClicked('login')}>
						User Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
};

export default NavMenu;
