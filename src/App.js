import { Container, Stack, Spacer, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import theme from './theme';

const App = () => {
	const [lastClicked, setLastClicked] = useState('home');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const appName = 'date app';

	return (
		<Container maxW='100%'>
			<Stack h='calc(100vh)' w='100%' align='center'>
				<Header setLastClicked={setLastClicked} appName={appName} />
				<Spacer />
				<div>
					<Body lastClicked={lastClicked} appName={appName} />
				</div>
				<Spacer />
				<Footer appName={appName} />
			</Stack>
		</Container>
	);
};

export default App;
