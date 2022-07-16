import React, { useState } from 'react';
import { axiosInstance, parseLoginResponse } from '../service/client_functions';
import {
	Container,
	Stack,
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	FormHelperText,
} from '@chakra-ui/react';

// TODO: add sign up link, which toggled between sign up form and log in form
// TODO: add google oauth login button
// TODO: parseLoginResponse()

const Login = ({ setIsLoggedIn }) => {
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState('success');
	const isInvalid = password === '' || emailAddress === '';
	const [showSignUp, setShowSignUp] = useState(false);

	// temp for parseLoginResponse(loginResponse)
	const testLoginResponse = {
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJiMGQxZGJhZTA2NTQwOWE1MTY0YjhmIiwiZW1haWwiOiJqb2huc21pdGhAaG90bWFpbC5jb20ifSwiaXNzIjoiZGF0ZS1hLWJhc2UiLCJpYXQiOjE2NTcxMzI3MDQsImV4cCI6MTY1NzIxOTEwNH0.nN6m73MjmugJ2sUNi4t2GDKbH94vqQWeHcj2QPH_THk',
		userId: '62b0d1dbae065409a5164b8f',
	};

	// TODO: logInUser should be called signUpUser since it's a post request
	const logInUser = (userInfo) => {
		axiosInstance
			.post(`/auth/login`, userInfo)
			.then(function (res) {
				const apiResponse = res.data;
				const loginResponse = apiResponse.data;
				setIsLoggedIn(true);
				return loginResponse;
			})
			.catch(function (error) {
				// move parseLoginResponse() to .then once connected to the server & replace testLoginResponse with loginResponse
				parseLoginResponse(testLoginResponse);
				setAlertType('error');
				console.log(error);
			});
	};

	// TODO: create new logInUser() with a GET request

	const handleLogin = (e) => {
		e.preventDefault();
		const userInfo = {
			username: emailAddress,
			password: password,
		};
		logInUser(userInfo);
		setShowAlert(true);
	};

	return (
		<Container w='md' py='12' borderRadius='25' id='login-form' align='center' textTransform='lowercase'>
			<form method='POST' onSubmit={handleLogin}>
				<Box>
					<Stack margin='auto' spacing={3} mt={5}>
						<FormControl>
							<FormLabel htmlFor='email'>Username:</FormLabel>
							<Input
								isRequired
								type='email'
								id='email'
								aria-describedby='email-helper-text'
								value={emailAddress}
								onChange={({ target }) => setEmailAddress(target.value)}
							></Input>
							<FormHelperText id='email-helper-text'>please enter a valid email address</FormHelperText>
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
							<Button type='submit' textTransform='lowercase' disabled={isInvalid} mt='4' px='8'>
								Submit
							</Button>
						</FormControl>
					</Stack>
				</Box>
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

export default Login;
