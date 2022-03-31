import React, { useState } from 'react';
import DateCard from './DateCard';
import LoginModal from './LoginModal';
import { Flex } from '@chakra-ui/react';

const Body = () => {
	const [showDateCard, setShowDateCard] = useState(false);
	const [showLogin, setShowLogin] = useState(true);
	let display;

	if (showDateCard) {
		display = <DateCard />;
	}

	if (showLogin) {
		display = <LoginModal />;
	}

	return (
		<Flex id='bodyContainer' w='100%' my='3' py='3' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
