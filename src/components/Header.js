import React from 'react';
import NavMenu from './NavMenu';
import { Spacer, HStack, VStack, Box, Heading, Button, Show, IconButton } from '@chakra-ui/react';
import { BsPersonCircle } from 'react-icons/bs';

const Header = ({ setShowLogin }) => {
	return (
		<Box w={{ base: '100%', md: '70%', lg: '60%', xl: '45%' }} mt='10' className='outline'>
			<HStack id='headerContainer' justify='space-between' textTransform='lowercase' className='text'>
				<VStack align='flex-start' px='2'>
					<Heading as='h1' lineHeight='60%'>
						date app
					</Heading>
					<Heading as='h2' size='md'>
						<span class='line'>
							<Heading as='h3' size='md'>
								less planning,&nbsp;
							</Heading>
						</span>
						<span class='line'>
							<Heading as='h3' size='md'>
								more doing
							</Heading>
						</span>
					</Heading>
				</VStack>
				<Spacer />
				<NavMenu setShowLogin={setShowLogin} />
				<IconButton
					variant='outline'
					aria-label='User Login and Logout'
					icon={<BsPersonCircle />}
					borderRadius='10'
					onClick={() => setShowLogin(true)}
				/>
			</HStack>
		</Box>
	);
};

export default Header;
