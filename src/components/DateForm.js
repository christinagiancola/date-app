import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
	Container,
	Stack,
	Box,
	Button,
	FormControl,
	FormLabel,
	FormHelperText,
	FormErrorMessage,
	Input,
	InputGroup,
	InputRightElement,
	Checkbox,
	CheckboxGroup,
	Radio,
	RadioGroup,
	Select,
	Switch,
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
	const [doesExpire, setDoesExpire] = useState(false);
	const [expirationDate, setExpirationDate] = useState(new Date());

	function handleSubmit(e) {
		e.preventDefault();
		console.log('date form submitted');
	}

	return (
		<Box>
			<form method='POST' onSubmit={handleSubmit}>
				<FormControl>
					<FormLabel htmlFor='name'>Date Idea:</FormLabel>
					<InputGroup>
						<Input isRequired type='text' id='name' value={name} onChange={({ target }) => setName(target.value)} />
					</InputGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='details'>Any extra details?</FormLabel>
					<InputGroup>
						<Input type='text' id='details' value={details} onChange={({ target }) => setDetails(target.value)}></Input>
					</InputGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='location'>Where?</FormLabel>
					<InputGroup>
						<Input
							type='text'
							id='location'
							value={location}
							onChange={({ target }) => setLocation(target.value)}
						></Input>
					</InputGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='timeOfDay'>What time of day?</FormLabel>
					<CheckboxGroup id='timeOfDay'>
						<Stack direction='row'>
							<Checkbox value='morning' mr='10px' onChange={({ target }) => setTimeOfDay(target.value)}>
								Morning
							</Checkbox>
							<Checkbox value='afternoon' mr='10px' onChange={({ target }) => setTimeOfDay(target.value)}>
								Afternoon
							</Checkbox>
							<Checkbox value='evening' mr='10px' onChange={({ target }) => setTimeOfDay(target.value)}>
								Evening
							</Checkbox>
						</Stack>
					</CheckboxGroup>
				</FormControl>

				<FormControl mt='15px'>
					<Stack direction='row'>
						<FormLabel htmlFor='isRepeatable'>Is the date repeatable?</FormLabel>
						<Switch id='isRepeatable' onChange={() => setIsRepeatable(!isRepeatable)} />
					</Stack>
				</FormControl>

				<FormControl mt='15px'>
					<Stack direction='row'>
						<FormLabel htmlFor='isOvernight' defaultValue='false'>
							Pack an overnight bag?
						</FormLabel>
						<Switch id='isOvernight' size='md' onChange={() => setIsOvernight(!isOvernight)} />
					</Stack>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='dayOfWeek'>What Days of the Week?</FormLabel>
					<CheckboxGroup id='dayOfWeek'>
						<Stack direction='row'>
							<Checkbox value='weekday' onChange={() => setIsOnWeekday(!isOnWeekday)}>
								Weekday
							</Checkbox>
							<Checkbox value='weekend' onChange={() => setIsOnWeekend(!isOnWeekend)}>
								Weekend
							</Checkbox>
						</Stack>
					</CheckboxGroup>
				</FormControl>

				<FormControl mt='15px'>
					<FormLabel htmlFor='cost'>What's the estimated budget?</FormLabel>
					<Stack direction='row'>
						<RadioGroup id='cost'>
							<Radio value='0' mr='10px'>
								Free
							</Radio>
							<Radio value='1' mr='10px'>
								$
							</Radio>
							<Radio value='2' mr='10px'>
								$$
							</Radio>
							<Radio value='3' mr='10px'>
								$$$
							</Radio>
						</RadioGroup>
					</Stack>
				</FormControl>

				<FormControl mt='15px'>
					<Stack direction='row'>
						<FormLabel htmlFor='doesExpire'>Does this date idea expire?</FormLabel>
						<Switch id='doesExpire' size='md' onChange={() => setDoesExpire(!doesExpire)} />
					</Stack>
				</FormControl>

				{doesExpire && (
					<FormControl>
						<FormLabel htmlFor='expirationDate'>Expiration Date:</FormLabel>
						<DatePicker
							id='expirationDate'
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
