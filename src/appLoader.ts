import * as dataLoader from './dataLoader';

export const loadEmployees = (elemIdentifier: string) => {
	(async () => {
		const elem = document.querySelector<HTMLDivElement>(elemIdentifier);
		if (elem) {
			elem.innerText = 'loading...';
			const asynchronousPromiseEmployees = await dataLoader.getAsynchronousPromiseEmployees();
			elem.innerText = asynchronousPromiseEmployees.map(m => m.lastName).join(', ');
		}
	})();
}