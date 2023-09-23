import React from 'react';
import { HStack, Button, Box, Menu, MenuButton, MenuList, MenuItem, IconButton, Show, Hide } from '@chakra-ui/react';
import { BsPlusSquare, BsFillHouseFill, BsList, BsFillPencilFill, BsUiChecksGrid } from 'react-icons/bs';

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
						View All Dates
					</MenuItem>
					<MenuItem
						icon={<BsUiChecksGrid />}
						textTransform='lowercase'
						onClick={() => {
							setLastClicked('date-card');
						}}
					>
						Pick a Date
					</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
};

export default NavMenu;
