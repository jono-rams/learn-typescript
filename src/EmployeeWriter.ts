import { CSVWriter } from './index';

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary']);

employeeWriter.addRows([
  { id: 1, name: 'John', role: 'developer', salary: 100000 },
  { id: 2, name: 'Jane', role: 'designer', salary: 90000 },
  { id: 3, name: 'Jim', role: 'manager', salary: 120000 },
]);

employeeWriter.save('./data/employees.csv');
