import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://ehwumue3sd.execute-api.us-east-1.amazonaws.com/Mock',
});

const healthCheck = () => {
	axiosInstance
		.get(`/`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
			console.log('called healthCheck()');
		});
};

// ? How to do this so only one date is returned? Or do you have to get all dates and then pull a random one from the list on the client side?
const getRandomDate = () => {};

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

const addNewDate = () => {
	axiosInstance
		.post(`/dates`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

// ? Do you replace the old 'date' with a new copy with the updated details? POST or PUT?
const editDateCard = (date, dateID) => {
	axiosInstance
		.put(`/dates/${dateId}`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const deleteDateCard = (dateID) => {
	axiosInstance
		.delete(`/dates/${dateId}`)
		.then(function (res) {
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

export default healthCheck;
