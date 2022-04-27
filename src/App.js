import { Container, Stack, Spacer, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import theme from './theme';

const App = () => {
	const [showDateCard, setShowDateCard] = useState(true);
	const [showLogin, setShowLogin] = useState(false);
	return (
		<Container maxW='90%' centerContent>
			<Stack h='calc(100vh)'>
				<Box>
					<Header setShowLogin={setShowLogin} />
					<Body showDateCard={showDateCard} showLogin={showLogin} />
				</Box>
				<Spacer />
				<Footer />
			</Stack>
		</Container>
	);
};

export default App;
