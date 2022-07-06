import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosInstance } from '../service/client_functions';
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
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react';

const LoginModal = ({ setIsLoggedIn }) => {
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState('success');
	const isInvalid = password === '' || emailAddress === '';

	const sendUserToServer = (userInfo) => {
		axiosInstance
			.post(`/`, userInfo)
			.then(function (res) {
				const apiResponse = res.data;
				const loginResponse = apiResponse.data;
				setIsLoggedIn(true);
				return loginResponse;
			})
			.catch(function (error) {
				console.log(error);
				setAlertType('error');
			});
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		const userInfo = {
			username: emailAddress,
			password: password,
		};
		sendUserToServer(userInfo);
		setShowAlert(true);
	};

	return (
		<Container w='md' py='12' borderRadius='25' id='login-form' align='center' textTransform='lowercase'>
			<form method='POST' onSubmit={handleSignIn}>
				<Stack margin='auto' spacing={3} mt={5}>
					<FormControl>
						<FormLabel htmlFor='email'>Username:</FormLabel>
						<Input
							isRequired
							type='email'
							id='email'
							// aria-describedby='email-helper-text'
							placeholder='yourname@gmail.com'
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						></Input>
						{/* <FormHelperText id='email-helper-text'>We'll never share your email.</FormHelperText> */}
					</FormControl>
					<FormControl>
						<FormLabel htmlFor='email'>Password:</FormLabel>
						<InputGroup>
							<Input
								isRequired
								type={showPassword ? 'text' : 'password'}
								id='password'
								variant='outline'
								// aria-describedby='password-helper-text'
								value={password}
								onChange={({ target }) => setPassword(target.value)}
							></Input>
							<InputRightElement w='4.5rem'>
								<Button size='sm' textTransform='lowercase' onClick={() => setShowPassword(!showPassword)}>
									Show
								</Button>
							</InputRightElement>
						</InputGroup>
						{/* <FormHelperText id='password-helper-text'>Pick a good one!</FormHelperText> */}
					</FormControl>
					<FormControl>
						<Button type='submit' textTransform='lowercase' disabled={isInvalid}>
							Sign In
						</Button>
					</FormControl>
				</Stack>
			</form>
			{showAlert ? (
				<Box mt='5'>
					<Alert status={alertType} variant='subtle' flexDirection='column'>
						<AlertIcon />
						<AlertTitle>{alertType === 'success' ? 'Login successful' : 'Something went wrong'}</AlertTitle>
						<AlertDescription>
							{alertType === 'success'
								? 'Welcome back'
								: 'Please double check that your username and password info are correct and try again'}
						</AlertDescription>
					</Alert>
				</Box>
			) : (
				<Box />
			)}
		</Container>
	);
};

export default LoginModal;
