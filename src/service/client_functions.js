import axios from 'axios';

const truncateString = (string, maxLength) => {
	return string.length > maxLength ? string.slice(0, maxLength - 1) + '...' : string;
};

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
			console.log(error.response);
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
			console.log('New Date Added', apiResponse);
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
			// window.location.reload(false);
			console.log(`deleted date card ${dateId}`);
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

const getAllDates = () => {
	axiosInstance
		.get(`dates`)
		.then(function (res) {
			console.log(res.data);
			return res.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};

const handleLogout = () => {
	axiosInstance.post(`/auth/logout`).catch((error) => {
		console.log(`Error logging out:`, error);
	});
};

export {
	axiosInstance,
	healthCheck,
	addNewDate,
	editDateCard,
	deleteDateCard,
	getDateCard,
	getAllDates,
	truncateString,
	handleLogout,
};
