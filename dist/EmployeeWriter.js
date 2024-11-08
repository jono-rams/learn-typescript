"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'John', role: 'developer', salary: 100000 },
    { id: 2, name: 'Jane', role: 'designer', salary: 90000 },
    { id: 3, name: 'Jim', role: 'manager', salary: 120000 },
]);
employeeWriter.save('./data/employees.csv');
