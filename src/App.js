import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
	return (
		<Container maxW='90%' centerContent>
			<Header />
			<Body />
			<Footer />
		</Container>
	);
};

export default App;
