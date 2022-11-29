import { Container, Stack, Spacer, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { healthCheck } from './service/client_functions';

const App = () => {
	const [lastClicked, setLastClicked] = useState('home');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [dates, setDates] = useState([]);
	const appName = 'date app';

	// TODO: DISABLE MENU BTN IF !LOGGEDIN
	// TODO: MAKE LANDING PAGE A SEPARATE COMPONENT
	// TODO: EXPAND SIGN UP ISINVALID() -- EMAIL AND PASSWORD VALID, PASSWORD AND CONFIRM PASSWORD MATCH

	useEffect(() => {
		healthCheck();
	}, []);

	return (
		<Container maxW='100%'>
			<Stack h='calc(100vh)' w='100%' align='center'>
				<Header
					setLastClicked={setLastClicked}
					appName={appName}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
				<Spacer />
				<Box>
					<Body
						setLastClicked={setLastClicked}
						lastClicked={lastClicked}
						appName={appName}
						isLoggedIn={isLoggedIn}
						setIsLoggedIn={setIsLoggedIn}
						dates={dates}
						setDates={setDates}
					/>
				</Box>
				<Spacer />
				<Footer appName={appName} />
			</Stack>
		</Container>
	);
};

export default App;
