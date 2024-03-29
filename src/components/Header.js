import React from 'react';
import NavMenu from './NavMenu';
import { handleLogout } from '../service/client_functions';
import { Spacer, HStack, VStack, Box, Heading, Button, Show, Hide, IconButton, Link } from '@chakra-ui/react';
import { BsPersonCircle } from 'react-icons/bs';

const Header = ({ setLastClicked, appName, isLoggedIn, setIsLoggedIn }) => {
	return (
		<Box w={{ base: '100%', md: '90%', lg: '80%', xl: '70%' }} p='35'>
			<HStack id='headerContainer' justify='space-between' textTransform='lowercase' className='text'>
				<VStack align='flex-start' px='2'>
					<Heading as='h1' lineHeight='60%'>
						<Link style={{ textDecoration: 'none' }} onClick={() => setLastClicked('home')}>
							{appName}
						</Link>
					</Heading>
					<Heading as='h2' size='md'>
						<span className='line'>
							<Heading as='h3' size='md'>
								less planning,&nbsp;
							</Heading>
						</span>
						<span className='line'>
							<Heading as='h3' size='md'>
								more doing
							</Heading>
						</span>
					</Heading>
				</VStack>
				<Spacer />
				<NavMenu setLastClicked={setLastClicked} isLoggedIn={isLoggedIn} />
				<Hide below='md'>
					{isLoggedIn ? (
						<Button
							textTransform='lowercase'
							leftIcon={<BsPersonCircle />}
							onClick={() => {
								setIsLoggedIn(false);
								handleLogout();
							}}
						>
							Log Out
						</Button>
					) : (
						<Button textTransform='lowercase' leftIcon={<BsPersonCircle />} onClick={() => setLastClicked('login')}>
							Log In
						</Button>
					)}
				</Hide>
				<Show below='md'>
					<IconButton
						variant='outline'
						aria-label='User Login and Logout'
						icon={<BsPersonCircle />}
						borderRadius='10'
						onClick={() => setLastClicked('login')}
					/>
				</Show>
			</HStack>
		</Box>
	);
};

export default Header;
