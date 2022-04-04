import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	Container,
	FormControl,
	FormLabel,
	Input,
	PasswordField,
	Text,
	HStack,
	Button,
	FormHelperText,
	FormErrorMessage,
} from '@chakra-ui/react';

const LoginModal = () => {
	const [input, setInput] = useState('');
	const [loginData, setLoginData] = useState();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// const handleInputChange = (e) => setInput(e.target.value);
	const onSubmit = (data) => setLoginData(data);

	useEffect(() => {
		console.log(loginData);
	}, [loginData]);

	return (
		<Container maxW='sm' bg='blue.100' py='12' borderRadius='50'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input id='name' type='text' placeholder='name' {...register('userName')} />
				<Input id='email' type='text' placeholder='email' {...register('email')} />
				<Input id='password' type='password' placeholder='password' {...register('password')} />
				<Input type='submit' />
			</form>
			<HStack spacing='1' justify='center'>
				<Text color='muted' py='4'>
					Don't have an account?
				</Text>
				<Button variant='link' colorScheme='blue'>
					Sign up
				</Button>
			</HStack>
		</Container>
	);
};

export default LoginModal;
