import React from 'react';
import DateForm from './DateForm';
import Login from './Login';
import DateLibrary from './DateLibrary';
import DateCard from './DateCard';
import { Flex } from '@chakra-ui/react';
import LandingPage from './LandingPage';

const Body = ({ setLastClicked, lastClicked, isLoggedIn, setIsLoggedIn, appName, dates, setDates, getAllDates }) => {
	let display;

	let generateRandomDate = () => {
		//prevent page reload
		// e.preventDefault();
		//choose a random date from the library
		let randomDate = dates[Math.floor(Math.random() * dates.length)];
		console.log(`Random Date:` + randomDate);
		//display full date card
		setLastClicked('date-card');
		return randomDate;
	};

	//if user is not logged in, display login component
	if (!isLoggedIn) {
		display = <Login setIsLoggedIn={setIsLoggedIn} setLastClicked={setLastClicked} />;
	}

	//if user is logged in, conditionally display components based on user interactions
	if (isLoggedIn) {
		if (lastClicked === 'home') {
			display = <LandingPage appName={appName} generateRandomDate={generateRandomDate} />;
		}

		if (lastClicked === 'login') {
			display = <Login setIsLoggedIn={setIsLoggedIn} />;
		}

		if (lastClicked === 'new-date') {
			display = <DateForm setLastClicked={setLastClicked} />;
		}

		if (lastClicked === 'date-library') {
			display = <DateLibrary dates={dates} setDates={setDates} getAllDates={getAllDates} />;
		}

		if (lastClicked === 'date-card') {
			display = <DateCard generateRandomDate={generateRandomDate} />;
		}
	}

	return (
		<Flex id='bodyContainer' w='100%' minWidth='450px' justify='center'>
			{display}
		</Flex>
	);
};

export default Body;
