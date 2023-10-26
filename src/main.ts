import './style.css'
import * as dataLoader from './dataLoader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

  <h2>Asynchronous functions with callbacks and promises</h2>

  <h3>Synchronous employees</h3>
  ${dataLoader.getSynchronousEmployees().map(m => m.lastName).join(', ')}

  <h3>Asynchronous promise employees</h3>
  <div class="asynchronousPromiseEmployees"></div>
`

const asynchronousPromiseEmployeesElem = document.querySelector<HTMLDivElement>('.asynchronousPromiseEmployees');
if (asynchronousPromiseEmployeesElem) {
  asynchronousPromiseEmployeesElem.innerText = 'loading...';
  const asynchronousPromiseEmployees = await dataLoader.getAsynchronousPromiseEmployees();
  asynchronousPromiseEmployeesElem.innerText = asynchronousPromiseEmployees.map(m => m.lastName).join(', ');
}