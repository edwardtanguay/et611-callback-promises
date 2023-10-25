import './style.css'
import * as dataLoader from './dataLoader';

dataLoader.getAsynchronousCallbackEmployees((asynchronousCallbackEmployees) => {
	document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

  <h2>Asynchronous functions with callbacks and promises</h2>

  <h3>Synchronous employees</h3>
  ${dataLoader.getSynchronousEmployees().map(m => m.lastName).join(', ')}

  <h3>Asynchronous callback employees</h3>
  ${asynchronousCallbackEmployees.map(m => m.lastName).join(', ')}
`
});

