import axios from 'axios';
import employees from './data/employees.json';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousCallbackEmployees = () => {
	const url = 'https://edwardtanguay.vercel.app/share/employees.json';
	(async () => {
		const employees = (await axios.get(url)).data
		console.log('async', employees);
		return employees;
	})();
}

