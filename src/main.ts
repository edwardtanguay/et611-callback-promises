import { ColorDataLoader } from './components/ColorDataLoader';
import { EmployeeDataLoader } from './components/EmployeeDataLoader';
import { IEmployee } from './components/interfaces';
import './style.css'

const colors = ColorDataLoader();

EmployeeDataLoader((employees: IEmployee[]) => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Callbacks and Promises</h1>

<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
<p>There are ${employees.length} employees.</p>
`
});