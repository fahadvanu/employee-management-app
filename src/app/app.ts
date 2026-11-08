import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  imports: [Header, EmployeeList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('employee-management-app');
}
