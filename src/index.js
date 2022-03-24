import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';

const title = 'Date App';
ReactDOM.render(
	<ChakraProvider>
		<App />
	</ChakraProvider>,
	document.getElementById('app')
);
