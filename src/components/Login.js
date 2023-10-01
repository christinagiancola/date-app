import React, { useState, useRef } from 'react';
import { axiosInstance } from '../service/client_functions';
import {
	Container,
	Heading,
	Stack,
	Box,
	Link,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
	Divider,
	FormHelperText,
} from '@chakra-ui/react';
import LoginAlert from './LoginAlert';

// TODO: add google oauth login button
// TODO: test new user sign up
// ? add error for signing up a user that already exists

const Login = ({ setIsLoggedIn, setLastClicked }) => {
	const [emailAddress, setEmailAddress] = useState('johnsmith@hotmail.com');
	const [password, setPassword] = useState('12345');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showSignUp, setShowSignUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState();
	const isInvalidForm = password === '' || emailAddress === '';
	const confirmPasswordRef = useRef(null);

	const redirectToHomePage = () => {
		setTimeout(function () {
			setLastClicked('home');
		}, 2500);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userInfo = {
			username: emailAddress,
			password: password,
		};
		{
			showSignUp ? signUpUser(userInfo) : logInUser(userInfo);
		}
		setShowAlert(true);
	};

	const toggleSignUp = (e) => {
		e.preventDefault();
		setShowSignUp(!showSignUp);
	};

	const logInUser = (userInfo) => {
		axiosInstance
			.get(`/auth/login`, { params: userInfo })
			.then(function (res) {
				setAlertType('success');
				const apiResponse = res.data;
				const loginResponse = apiResponse.data;
				setLastClicked('login');
				setIsLoggedIn(true);
				redirectToHomePage();
				return loginResponse;
			})
			.catch(function (error) {
				setAlertType('error');
				console.log(`error:`, error);
			});
	};

	const signUpUser = (userInfo) => {
		console.log('signUpUser triggered');
		axiosInstance
			.post(`/auth/login`, userInfo)
			.then(function (res) {
				setAlertType('success');
				const apiResponse = res.data;
				const signUpResponse = apiResponse.data;
				setTimeout(function () {
					console.log('*****');
					setIsLoggedIn(true);
				}, 3000);
				return signUpResponse;
			})
			.catch(function (error) {
				setAlertType('error');
				console.log('error:', error);
			});
	};

	return (
		<Container w='md' py='12' borderRadius='25' id='login-form' align='center' textTransform='lowercase'>
			<Heading as='h3' size='md' mb='3'>
				{showSignUp ? 'nice to meet you' : 'welcome back'}
			</Heading>
			{showAlert && alertType ? <LoginAlert alertType={alertType} /> : null}
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
										type={showConfirmPassword ? 'text' : 'password'}
										id='confirmPassword'
										variant='outline'
										value={confirmPassword}
										onChange={({ target }) => setConfirmPassword(target.value)}
										ref={confirmPasswordRef}
									></Input>
									<InputRightElement w='4.5rem'>
										<Button
											size='sm'
											textTransform='lowercase'
											onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										>
											Show
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormHelperText>Passwords in both fields must match.</FormHelperText>
							</FormControl>
						) : null}
						<FormControl>
							<Button type='submit' textTransform='lowercase' disabled={isInvalidForm} mt='4' px='8'>
								{showSignUp ? 'Sign Up' : 'Submit'}
							</Button>
						</FormControl>
						<Divider orientation='horizontal' mt='5' />
						{showSignUp ? (
							<VStack>
								<Heading as='h3' size='md' mt='3'>
									Already have an account?
								</Heading>
								<Link onClick={(e) => toggleSignUp(e)}>Click here to log in.</Link>
							</VStack>
						) : (
							<VStack>
								<Heading as='h3' size='md' mt='3'>
									Are you new here?
								</Heading>
								<Link onClick={(e) => toggleSignUp(e)}>Click here to sign up.</Link>
							</VStack>
						)}
					</Stack>
				</Box>
			</form>
		</Container>
	);
};

export default Login;
