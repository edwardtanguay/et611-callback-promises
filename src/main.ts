import './style.css'
import * as dataLoader from './dataLoader';

const asychronousCallbackEmloyees = dataLoader.getAsynchronousCallbackEmployees();
console.log('main', asychronousCallbackEmloyees);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

  <h2>Asynchronous functions with callbacks and promises</h2>

  <h3>Synchronous employees</h3>
  ${dataLoader.getSynchronousEmployees().map(m => m.lastName).join(', ')}
  
`