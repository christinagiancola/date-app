import React, { useState } from 'react';
import DateGenerator from './DateGenerator';
import DateCard from './DateCard';
import DateForm from './DateForm';
import LoginModal from './LoginModal';
import DateLibrary from './DateLibrary';
import { Flex } from '@chakra-ui/react';
import { sendUserToServer } from '../service/client_functions';

const Body = ({ lastClicked }) => {
	let display;

	// const userInfo = {
	// 	username: emailAddress,
	// 	password: password,
	// };

	// sendUserToServer(userInfo);

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

	// TODO: swap out repeated code for switch statement?
	if (lastClicked === 'home') {
		display = <DateGenerator />;
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
