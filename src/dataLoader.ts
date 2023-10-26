import axios from 'axios';
import employees from './data/employees.json';
import { IEmployee } from './interfaces';
import * as tools from './tools';

const employeesUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousPromiseEmployees = () => {
	return new Promise<IEmployee[]>((resolve, reject) => {
		setTimeout(async () => {
			const rand = tools.getRandomNumber(5);
			switch (rand) {
				case 1:
					reject({
						message: 'Network error'
					});
					break;
				case 2:
					reject({
						message: 'Internet access is currently down'
					});
					break;
				default:
					const employees: IEmployee[] = (await axios.get(employeesUrl)).data
					resolve(employees);
			}
		}, 2000)
	});
}

