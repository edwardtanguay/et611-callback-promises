import * as dataLoader from './dataLoader';

export const loadEmployees = (elemIdentifier: string) => {
	(async () => {
		const elem = document.querySelector<HTMLDivElement>(elemIdentifier);
		if (elem) {
			elem.innerText = 'loading...';
			try {
				const asynchronousPromiseEmployees = await dataLoader.getAsynchronousPromiseEmployees();
				elem.innerText = asynchronousPromiseEmployees.map(m => m.lastName).join(', ');
			}
			catch (err: any) {
				elem.innerHTML = `<span class="error">${err.message}</span>`;
			}
		}
	})();
}