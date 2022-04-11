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
				<Input id='name' bg='white' my='1' width='85%' type='text' placeholder='name' {...register('userName')} />
				<Input id='email' bg='white' my='1' width='85%' type='text' placeholder='email' {...register('email')} />
				<Input
					id='password'
					bg='white'
					my='1'
					width='85%'
					type='password'
					placeholder='password'
					{...register('password')}
				/>
				<Input bg='blue.300' color='white' width='85%' my='3' type='submit' />
			</form>
			<HStack spacing='1' justify='center'>
				<Text color='muted' my='s'>
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
