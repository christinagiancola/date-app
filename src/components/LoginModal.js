import React, { useState } from 'react';
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

	const handleInputChange = (e) => setInput(e.target.value);

	return (
		<Container maxW='sm' bg='blue.100' py='5'>
			<FormControl isRequired>
				<FormLabel htmlFor='email'>Email:</FormLabel>
				<Input
					id='email'
					type='email'
					value={input}
					onChange={handleInputChange}
					placeholder='something@something.com'
					focusBorderColor='blue.400'
					borderColor='blue.200'
					bgColor='white'
				/>
			</FormControl>
			<HStack spacing='1' justify='center'>
				<Text color='muted'>Don't have an account?</Text>
				<Button variant='link' colorScheme='blue'>
					Sign up
				</Button>
			</HStack>
		</Container>
	);
};

export default LoginModal;
