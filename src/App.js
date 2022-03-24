import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';

const App = () => {
	return (
		<Container maxW='90%' centerContent>
			<Header />
		</Container>
	);
};

export default App;
