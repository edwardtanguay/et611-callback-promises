import './style.css'
import * as dataLoader from './dataLoader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

  <h2>Asynchronous functions with callbacks and promises</h2>

  <h3>Asynchronous employees</h3>
  ${dataLoader.getAsynchronousEmployees().map(m => m.lastName).join(', ')}
`