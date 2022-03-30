import React from 'react';
import { Spacer, HStack, VStack, Box, Heading, Button, Show } from '@chakra-ui/react';
import { BsListUl, BsPlusCircle } from 'react-icons/bs';

const Header = () => {
	return (
		<Box w='100%'>
			<HStack id='headerContainer' justify='space-between' mt='5' textTransform='lowercase'>
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
				<HStack as='nav'>
					<Button textTransform='lowercase' size='md' borderRadius='50' leftIcon={<BsPlusCircle />}>
						<Show breakpoint='(min-width: 750px)'>
							<Box>New Date</Box>
						</Show>
					</Button>
					<Button textTransform='lowercase' size='md' borderRadius='50' leftIcon={<BsListUl />}>
						<Show breakpoint='(min-width: 750px)'>
							<Box>Edit Library</Box>
						</Show>
					</Button>
				</HStack>
				<Button as='btn' variant='outline' size='md' colorScheme='gray' borderRadius='50'>
					Login
				</Button>
			</HStack>
		</Box>
	);
};

export default Header;
