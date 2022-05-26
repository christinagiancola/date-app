import React from 'react';
import { useForm } from 'react-hook-form';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	HStack,
	Button,
	Box,
} from '@chakra-ui/react';

const DateForm = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<FormLabel htmlFor='date-title'>Title</FormLabel>
					<Input id='date-title' type='text' />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='date-details'>Details</FormLabel>
					<Input id='date-details' type='text' />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='location'>Location</FormLabel>
					<Input id='location' type='text' />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='pet-friendly'>Pet Friendly</FormLabel>
					<RadioGroup id='pet-friendly' defaultValue='no'>
						<HStack>
							<Radio value='yes'>Yes</Radio>
							<Radio value='no'>No</Radio>
						</HStack>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='day'>What Day?</FormLabel>
					<CheckboxGroup id='day'>
						<Checkbox value='monday'>Monday</Checkbox>
						<Checkbox value='tuesday'>Tuesday</Checkbox>
						<Checkbox value='wednesday'>Wednesday</Checkbox>
						<Checkbox value='thursday'>Thursday</Checkbox>
						<Checkbox value='friday'>Friday</Checkbox>
						<Checkbox value='saturday'>Saturday</Checkbox>
						<Checkbox value='sunday'>Sunday</Checkbox>
					</CheckboxGroup>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='time'>What Time?</FormLabel>
					<CheckboxGroup id='time'>
						<Checkbox value='morning'>Morning</Checkbox>
						<Checkbox value='afternoon'>Afternoon</Checkbox>
						<Checkbox value='evening'>Evening</Checkbox>
						<Checkbox value='overnight'>Overnight</Checkbox>
					</CheckboxGroup>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='repeat'>Repeating?</FormLabel>
					<RadioGroup id='repeat'>
						<HStack>
							<Radio value='yes'>Yes</Radio>
							<Radio value='no'>No</Radio>
						</HStack>
					</RadioGroup>
				</FormControl>
				<Button type='submit' width='full'>
					Submit
				</Button>
			</form>
		</Box>
	);
};

export default DateForm;
