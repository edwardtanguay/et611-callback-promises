import axios from 'axios';
import employees from './data/employees.json';
import { IEmployee } from './interfaces';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousCallbackEmployees = (callback: (employees: IEmployee[]) => void) => {
	const url = 'https://edwardtanguay.vercel.app/share/employees.json';
	(async () => {
		const employees = (await axios.get(url)).data
		console.log('async', employees);
		callback(employees);
	})();
}

