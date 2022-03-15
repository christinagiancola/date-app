import './style.css';

console.log('Hello Webpack Project.');
let handleClick = () => {
	console.log('Button Clicked!');
};
let button = document.getElementById('test-button');
button.addEventListener('click', handleClick);
