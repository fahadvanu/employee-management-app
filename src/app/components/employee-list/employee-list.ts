import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  get totalEmployees() {
    return this.employees.length;
  }

  get activeEmployees() {
    return this.employees.filter((employee) => employee.status === 'Active').length;
  }

  get inactiveEmployees() {
    return this.employees.filter((employee) => employee.status === 'Inactive').length;
  }

  employees = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      department: 'Engineering',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Product Manager',
      department: 'Product',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      designation: 'UX Designer',
      department: 'Design',
      status: 'Inactive',
    },
  ];
}
