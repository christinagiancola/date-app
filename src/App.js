import { Container, Stack, Spacer, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import theme from './theme';

const App = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Container maxW='90%'>
			<Stack h='calc(100vh)' w='100%' align='center'>
				<Header setShowLogin={setShowLogin} />
				<Spacer />
				<div>
					<Body showLogin={showLogin} />
				</div>
				<Spacer />
				<Footer />
			</Stack>
		</Container>
	);
};

export default App;
