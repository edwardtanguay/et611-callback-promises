import axios from 'axios';
import employees from './data/employees.json';
import { IEmployee } from './interfaces';

const employeesUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousPromiseEmployees = () => {
	return new Promise<IEmployee[]>((resolve) => {
		setTimeout(async () => {
			const employees: IEmployee[] = (await axios.get(employeesUrl)).data
			resolve(employees);
		}, 2000)
	});
}

