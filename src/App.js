import { Container, Stack, Spacer, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import theme from './theme';

const App = () => {
	const [lastClicked, setLastClicked] = useState('home');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Container maxW='90%'>
			<Stack h='calc(100vh)' w='100%' align='center'>
				<Header setLastClicked={setLastClicked} />
				<Spacer />
				<div>
					<Body lastClicked={lastClicked} />
				</div>
				<Spacer />
				<Footer />
			</Stack>
		</Container>
	);
};

export default App;
