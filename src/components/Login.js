import React, { useState } from 'react';
import { axiosInstance, parseLoginResponse } from '../service/client_functions';
import {
	Container,
	Stack,
	Box,
	Link,
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
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showSignUp, setShowSignUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const isInvalid = password === '' || emailAddress === '';
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState('success');

	// TODO if newUser === true, show sign up form instead of log in form
	const [newUser, setNewUser] = useState(false);

	// temp for parseLoginResponse(loginResponse)
	const testLoginResponse = {
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJiMGQxZGJhZTA2NTQwOWE1MTY0YjhmIiwiZW1haWwiOiJqb2huc21pdGhAaG90bWFpbC5jb20ifSwiaXNzIjoiZGF0ZS1hLWJhc2UiLCJpYXQiOjE2NTcxMzI3MDQsImV4cCI6MTY1NzIxOTEwNH0.nN6m73MjmugJ2sUNi4t2GDKbH94vqQWeHcj2QPH_THk',
		userId: '62b0d1dbae065409a5164b8f',
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userInfo = {
			username: emailAddress,
			password: password,
		};
		{
			newUser ? signUpUser(userInfo) : logInUser(userInfo);
		}
		setShowAlert(true);
	};

	// TODO: logInUser is a post request
	const logInUser = (userInfo) => {
		axiosInstance
			.get(`/auth/login`, userInfo)
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

	// TODO: create new signUpUser() with a POST request
	const signUpUser = (userInfo) => {
		axiosInstance
			.post(`/auth/login`, userInfo)
			.then(console.log('user signed up'))
			.catch(function (error) {
				setAlertType('error');
				console.log(error);
			});
	};

	const toggleSignUp = (e) => {
		e.preventDefault();
		if (showSignUp === true) {
			setShowSignUp(false);
		}
		if (showSignUp === false) {
			setShowSignUp(true);
		}
		console.log('show sign up?', showSignUp);
	};

	return (
		<Container w='md' py='12' borderRadius='25' id='login-form' align='center' textTransform='lowercase'>
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
			<form method='POST' onSubmit={handleSubmit}>
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
							<FormLabel htmlFor='password'>Password:</FormLabel>
							<InputGroup>
								<Input
									isRequired
									type={showPassword ? 'text' : 'password'}
									id='password'
									variant='outline'
									value={password}
									onChange={({ target }) => setPassword(target.value)}
								></Input>
								<InputRightElement w='4.5rem'>
									<Button size='sm' textTransform='lowercase' onClick={() => setShowPassword(!showPassword)}>
										Show
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						{showSignUp ? (
							<FormControl>
								<FormLabel htmlFor='confirmPassword'>Re-enter Password:</FormLabel>
								<InputGroup>
									<Input
										isRequired
										type={showPassword ? 'text' : 'password'}
										id='confirmPassword'
										variant='outline'
										value={password}
										onChange={({ target }) => setPassword(target.value)}
									></Input>
									<InputRightElement w='4.5rem'>
										<Button size='sm' textTransform='lowercase' onClick={() => setShowPassword(!showPassword)}>
											Show
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
						) : null}
						<FormControl>
							<Button type='submit' textTransform='lowercase' disabled={isInvalid} mt='4' px='8'>
								Submit
							</Button>
						</FormControl>
						{showSignUp ? (
							<Box>
								Already have an account? <Link onClick={(e) => toggleSignUp(e)}>Click here to log in.</Link>
							</Box>
						) : (
							<Box>
								Oh hi! Are you new here? <Link onClick={(e) => toggleSignUp(e)}>Click here to sign up.</Link>
							</Box>
						)}
					</Stack>
				</Box>
			</form>
		</Container>
	);
};

export default Login;
