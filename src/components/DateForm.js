import React, { useState } from 'react';
import {
	Container,
	Stack,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	FormHelperText,
	FormErrorMessage,
} from '@chakra-ui/react';

const DateForm = () => {
	const [name, setName] = useState('');
	const [details, setDetails] = useState('');
	const [location, setLocation] = useState('');
	const [isRepeatable, setIsRepeatable] = useState(false);
	const [timeOfDay, setTimeOfDay] = useState([]);
	const [isOvernight, setIsOvernight] = useState(false);
	const [isOnWeekday, setIsOnWeekday] = useState(false);
	const [isOnWeekend, setIsOnWeekend] = useState(false);
	const [cost, setCost] = useState(0);
	const [isPetFriendly, setIsPetFriendly] = useState(false);
	const [expirationDate, setExpirationDate] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		console.log('date form submitted');
	}

	return (
		<Box>
			<form method='POST' onSubmit={handleSubmit}>
				<FormControl>
					<FormLabel htmlFor='name'>Title:</FormLabel>
					<InputGroup>
						<Input
							isRequired
							type='text'
							id='name'
							placeholder='go on a hike'
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>
					</InputGroup>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='details'>Details:</FormLabel>
					<InputGroup>
						<Input type='text' id='details' value={details} onChange={({ target }) => setDetails(target.value)}></Input>
					</InputGroup>
				</FormControl>
				<FormControl>
					<Button type='submit'>Add Date</Button>
				</FormControl>
			</form>
		</Box>
	);
};

export default DateForm;
