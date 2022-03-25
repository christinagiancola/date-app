import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	return (
		<Container maxW='90%' centerContent>
			<Header />
			<Footer />
		</Container>
	);
};

export default App;
