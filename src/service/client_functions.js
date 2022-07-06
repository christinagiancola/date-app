import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://ehwumue3sd.execute-api.us-east-1.amazonaws.com/Mock',
	headers: { 'Content-Type': 'application/json' },
});

const healthCheck = () => {
	axiosInstance
		.get(`/`)
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

// ? Do we really want to get ALL dates or should we break things into groups/pages to avoid very large responses?
const getAllDates = () => {
	axiosInstance
		.get(`/dates`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
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

export { healthCheck, getAllDates, addNewDate, editDateCard, deleteDateCard, getDateCard };
