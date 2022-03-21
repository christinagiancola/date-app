import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';

const title = 'Date App';
ReactDOM.render(
	<ChakraProvider>
		<h1>{title}</h1>
	</ChakraProvider>,
	document.getElementById('app')
);
