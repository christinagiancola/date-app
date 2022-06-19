import React, { useState, useEffect } from 'react';
import {
	Container,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	FormHelperText,
	FormErrorMessage,
} from '@chakra-ui/react';

const LoginModal = () => {
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const isInvalid = password === '' || emailAddress === '';

	const handleSignIn = (e) => {
		e.preventDefault();
		console.log('login form submitted');
		console.log('emailAddress', emailAddress);
		console.log('password', password);
	};

	return (
		<Container w='md' py='12' borderRadius='25' id='login-form'>
			<form method='POST' onSubmit={handleSignIn}>
				<Stack margin='auto' spacing={5} mt={5}>
					<FormControl>
						<FormLabel htmlFor='email'>Email Address:</FormLabel>
						<Input
							isRequired
							type='email'
							id='email'
							aria-describedby='email-helper-text'
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
								aria-describedby='password-helper-text'
								value={password}
								onChange={({ target }) => setPassword(target.value)}
							></Input>
							<InputRightElement w='4.5rem'>
								<Button size='sm' onClick={() => setShowPassword(!showPassword)}></Button>
							</InputRightElement>
						</InputGroup>
						{/* <FormHelperText id='password-helper-text'>Pick a good one!</FormHelperText> */}
					</FormControl>
					<FormControl>
						<Button type='submit' varientColor='blue' disabled={isInvalid}>
							Sign In
						</Button>
					</FormControl>
				</Stack>
			</form>
		</Container>
	);
};

export default LoginModal;
