import React, { useState } from 'react';
import DateGenerator from './DateGenerator';
import DateCard from './DateCard';
import DateForm from './DateForm';
import LoginModal from './LoginModal';
import DateLibrary from './DateLibrary';
import { Flex } from '@chakra-ui/react';
import { sendUserToServer } from '../service/client_functions';

const Body = ({ lastClicked, isLoggedIn, setIsLoggedIn }) => {
	let display;

	// TODO: switch statement?
	// switch (lastClicked) {
	// 	case 'login':
	//     display = <LoginModal />;
	// 		break;
	//   case 'new-date':
	//     display = <DateForm />;
	//   case 'date-library':
	//     display = <DateLibrary />;
	// 	default 'home':
	//     display = <DateGenerator />;
	// 		break;
	// }

	if (lastClicked === 'home') {
		display = <DateGenerator />;
	}
	if (lastClicked === 'login') {
		display = <LoginModal setIsLoggedIn={setIsLoggedIn} />;
	}
	if (lastClicked === 'new-date') {
		display = <DateForm />;
	}
	if (lastClicked === 'date-library') {
		display = <DateLibrary isLoggedIn={isLoggedIn} />;
	}

	return (
		<Flex id='bodyContainer' w='100%' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
