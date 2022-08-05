import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: 'https://ehwumue3sd.execute-api.us-east-1.amazonaws.com/Mock',
	baseURL: 'http://localhost:3000/api/v1',
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

const healthCheck = () => {
	axiosInstance
		.get(`/health`)
		.then(function (res) {
			console.log(res);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
			console.log('called healthCheck()');
		});
};

const addNewDate = (newDate) => {
	axiosInstance
		.post(`/dates`, newDate)
		.then(function (res) {
			const apiResponse = res.data;
			const createdCard = apiResponse.data;
			console.log('New Date Added', createdCard);
		})
		.catch(function (error) {
			console.log(error);
		});
};

// ? Do you replace the old 'date' with a new copy with the updated details? POST or PUT?
const editDateCard = (dateId) => {
	axiosInstance
		.put(`/dates/${dateId}`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const deleteDateCard = (dateId) => {
	axiosInstance
		.delete(`/dates/${dateId}`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const getDateCard = (dateId) => {
	axiosInstance
		.get(`dates/${dateId}`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

export { axiosInstance, healthCheck, addNewDate, editDateCard, deleteDateCard, getDateCard };
