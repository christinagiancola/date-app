import React, { useState } from 'react';
import DateCard from './DateCard';
import DateForm from './DateForm';
import LoginModal from './LoginModal';
import DateLibrary from './DateLibrary';
import { Flex } from '@chakra-ui/react';

const Body = ({ showLogin }) => {
	const [lastClicked, setLastClicked] = useState('');
	let display = 'home';

	if (lastClicked === 'home') {
		display = <DateCard />;
	}

	if (lastClicked === 'login') {
		display = <LoginModal />;
	}

	if (lastClicked === 'new-date') {
		display = <DateForm />;
	}

	if (lastClicked === 'date-library') {
		display = <DateLibrary />;
	}

	return (
		<Flex id='bodyContainer' w='100%' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
