import { Container, Stack, Spacer, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { healthCheck } from './service/client_functions';

// import theme from './theme';

const App = () => {
	const [lastClicked, setLastClicked] = useState('home');
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const appName = 'date app';

	useEffect(() => {
		healthCheck();
	}, []);

	return (
		<Container maxW='100%'>
			<Stack h='calc(100vh)' w='100%' align='center'>
				<Header setLastClicked={setLastClicked} appName={appName} isLoggedIn={isLoggedIn} />
				<Spacer />
				<div>
					<Body lastClicked={lastClicked} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				</div>
				<Spacer />
				<Footer appName={appName} />
			</Stack>
		</Container>
	);
};

export default App;
