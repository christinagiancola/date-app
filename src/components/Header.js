import React from 'react';
import { Spacer, HStack, VStack, Box, Heading, Button, Link, IconButton } from '@chakra-ui/react';
import { BsListUl, BsPlusCircle } from 'react-icons/bs';

const Header = () => {
	return (
		<Box w='100%'>
			<HStack id='headerContainer' justify='space-between' mt='5'>
				<VStack align='flex-start' color='teal' px='2'>
					<Heading as='h1'>date app</Heading>
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
				<Box as='nav'>
					<Button leftIcon={<BsPlusCircle />}>New Date</Button>
					<IconButton
						size='lg'
						icon={<BsPlusCircle />}
						aria-label='Add a New Date to the Date Library'
						isRound='true'
					/>
					<IconButton
						size='lg'
						icon={<BsListUl />}
						aria-label='Go To Date Library to Edit or Delete Dates'
						isRound='true'
					/>
				</Box>
				<Button as='btn' variant='solid' colorScheme='teal' borderRadius='50'>
					Login
				</Button>
			</HStack>
		</Box>
	);
};

export default Header;
