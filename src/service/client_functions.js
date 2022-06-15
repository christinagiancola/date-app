import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://ehwumue3sd.execute-api.us-east-1.amazonaws.com/Mock',
});

const healthCheck = () => {
	axiosInstance
		.get('/')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
			console.log('we called axios');
		});
};

const getRandomDate = () => {};

const deleteDateCard = () => {};

export default healthCheck;
