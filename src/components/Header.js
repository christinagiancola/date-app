import React from 'react';
import NavMenu from './NavMenu';
import { Spacer, HStack, VStack, Box, Heading, Button, Show } from '@chakra-ui/react';
import { BsPersonCircle } from 'react-icons/bs';

const Header = ({ setShowLogin }) => {
	return (
		<Box w='100%' mt='5'>
			<HStack id='headerContainer' justify='space-between' mt='5%' textTransform='lowercase' className='text'>
				<VStack align='flex-start' px='2'>
					<Heading as='h1' lineHeight='60%'>
						date app
					</Heading>
					<Heading as='h2' size='md'>
						<span class='line'>
							<p>less planning,&nbsp;</p>
						</span>
						<span class='line'>
							<p>more doing</p>
						</span>
					</Heading>
				</VStack>
				<Spacer />
				<NavMenu setShowLogin={setShowLogin} />
				{/* <Button as='btn' variant='outline' size='md' colorScheme='gray' borderRadius='10' onClick={showLogin}>
					Login
				</Button> */}
			</HStack>
		</Box>
	);
};

export default Header;
