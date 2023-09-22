import React from 'react';
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const LoginAlert = ({ alertType }) => {
	return (
		<Box mt='5'>
			<Alert status={alertType} variant='subtle' flexDirection='column'>
				<AlertIcon />
				<AlertTitle>{alertType === 'success' ? 'Success!' : 'Oops, something went wrong.'}</AlertTitle>
				<AlertDescription>
					{alertType === 'success'
						? `let's take you to the homepage...`
						: 'Please double check your info and try again'}
				</AlertDescription>
			</Alert>
		</Box>
	);
};

export default LoginAlert;
