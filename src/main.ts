import './style.css'
import * as dataLoader from './dataLoader';
import * as appLoader from './appLoader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

  <h2>Asynchronous functions with callbacks and promises</h2>

  <h3>Synchronous employees</h3>
  ${dataLoader.getSynchronousEmployees().map(m => m.lastName).join(', ')}

  <h3>Asynchronous promise employees</h3>
  <div class="employees"></div>
`

appLoader.loadEmployees('.employees');
