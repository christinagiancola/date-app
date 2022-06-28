import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
	Stack,
	Box,
	Button,
	FormControl,
	FormLabel,
	FormHelperText,
	FormErrorMessage,
	Input,
	InputGroup,
	Checkbox,
	CheckboxGroup,
	Radio,
	RadioGroup,
	Switch,
} from '@chakra-ui/react';
import { addNewDate } from '../service/client_functions';

const DateForm = () => {
	const [name, setName] = useState('');
	const [details, setDetails] = useState('');
	const [location, setLocation] = useState('');
	const [isRepeatable, setIsRepeatable] = useState(false);
	const [timeOfDay, setTimeOfDay] = useState([]);
	const [isOvernight, setIsOvernight] = useState(false);
	const [isOnWeekday, setIsOnWeekday] = useState(false);
	const [isOnWeekend, setIsOnWeekend] = useState(false);
	const [doesExpire, setDoesExpire] = useState(false);
	const [expirationDate, setExpirationDate] = useState(new Date());
	// const [cost, setCost] = useState(0);
	// const [isPetFriendly, setIsPetFriendly] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(document.getElementById('newDateForm'));
		formData.set('timeOfDay', timeOfDay);
		formData.set('isOnWeekday', isOnWeekday);
		formData.set('isOnWeekend', isOnWeekend);
		formData.set('isRepeatable', isRepeatable);
		formData.set('isOvernight', isOvernight);
		let dateObj = {};
		formData.forEach((value, key) => (dateObj[key] = value));
		var dateJson = JSON.stringify(dateObj);
		console.log(dateJson);
		addNewDate(dateJson);
	}

	return (
		<Box align='center'>
			<form method='POST' onSubmit={handleSubmit} id='newDateForm'>
				<FormControl>
					<FormLabel htmlFor='name'>Date Idea:</FormLabel>
					<InputGroup>
						<Input
							isRequired
							type='text'
							id='name'
							name='name'
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>
					</InputGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='details'>Any extra details?</FormLabel>
					<InputGroup>
						<Input
							type='text'
							id='details'
							name='details'
							value={details}
							onChange={({ target }) => setDetails(target.value)}
						></Input>
					</InputGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='location'>Where?</FormLabel>
					<InputGroup>
						<Input
							type='text'
							id='location'
							name='location'
							value={location}
							onChange={({ target }) => setLocation(target.value)}
						></Input>
					</InputGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='timeOfDay'>What time of day?</FormLabel>
					<CheckboxGroup id='timeOfDay'>
						<Stack direction='row'>
							<Checkbox
								mr='10px'
								name='timeOfDay'
								value='morning'
								onChange={({ target }) =>
									target.checked
										? setTimeOfDay([...timeOfDay, 'morning'])
										: setTimeOfDay(timeOfDay.filter((x) => x !== 'morning'))
								}
							>
								Morning
							</Checkbox>
							<Checkbox
								mr='10px'
								name='timeOfDay'
								value='afternoon'
								onChange={({ target }) =>
									target.checked
										? setTimeOfDay([...timeOfDay, 'afternoon'])
										: setTimeOfDay(timeOfDay.filter((x) => x !== 'afternoon'))
								}
							>
								Afternoon
							</Checkbox>
							<Checkbox
								name='timeOfDay'
								value='evening'
								mr='10px'
								onChange={({ target }) =>
									target.checked
										? setTimeOfDay([...timeOfDay, 'evening'])
										: setTimeOfDay(timeOfDay.filter((x) => x !== 'evening'))
								}
							>
								Evening
							</Checkbox>
						</Stack>
					</CheckboxGroup>
				</FormControl>

				<FormControl mt='15px'>
					<Stack direction='row'>
						<FormLabel htmlFor='isRepeatable'>Is the date repeatable?</FormLabel>
						<Switch
							name='isRepeatable'
							id='isRepeatable'
							value={isRepeatable}
							onChange={({ target }) => (target.checked ? setIsRepeatable(true) : setIsRepeatable(false))}
						/>
					</Stack>
				</FormControl>

				<FormControl mt='15px'>
					<Stack direction='row'>
						<FormLabel htmlFor='isOvernight' defaultValue='false'>
							Pack an overnight bag?
						</FormLabel>
						<Switch
							name='isOvernight'
							id='isOvernight'
							value={isOvernight}
							onChange={({ target }) => (target.checked ? setIsOvernight(true) : setIsOvernight(false))}
						/>
					</Stack>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='dayOfWeek'>What Days of the Week?</FormLabel>
					<CheckboxGroup id='dayOfWeek'>
						<Stack direction='row'>
							<Checkbox
								// name='dayOfWeek'
								value='weekday'
								onChange={({ target }) => (target.checked ? setIsOnWeekday(true) : setIsOnWeekday(false))}
							>
								Weekday
							</Checkbox>
							<Checkbox
								// name='dayOfWeek'
								value='weekend'
								onChange={({ target }) => (target.checked ? setIsOnWeekend(true) : setIsOnWeekend(false))}
							>
								Weekend
							</Checkbox>
						</Stack>
					</CheckboxGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='cost'>What's the estimated budget?</FormLabel>
					<Stack direction='row'>
						<RadioGroup id='cost'>
							<Radio name='cost' value='0' mr='10px'>
								Free
							</Radio>
							<Radio name='cost' value='1' mr='10px'>
								$
							</Radio>
							<Radio name='cost' value='2' mr='10px'>
								$$
							</Radio>
							<Radio name='cost' value='3' mr='10px'>
								$$$
							</Radio>
						</RadioGroup>
					</Stack>
				</FormControl>

				<FormControl mt='15px'>
					<Stack direction='row'>
						<FormLabel htmlFor='doesExpire'>Does this date idea expire?</FormLabel>
						<Switch
							name='doesExpire'
							id='doesExpire'
							value={doesExpire}
							onChange={({ target }) => (target.checked ? setDoesExpire(true) : setDoesExpire(false))}
						/>
					</Stack>
				</FormControl>

				{doesExpire && (
					<FormControl>
						<FormLabel htmlFor='expirationDate'>Expiration Date:</FormLabel>
						<DatePicker
							name='expirationDate'
							id='expirationDate'
							isClearable
							showPopperArrow={true}
							selected={expirationDate}
							onChange={(date) => setExpirationDate(date)}
						/>
					</FormControl>
				)}

				<FormControl mt='15px'>
					<Button type='submit'>Add Date</Button>
				</FormControl>
			</form>
		</Box>
	);
};

export default DateForm;
