import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  departments = [
    {departmentId: 1, name:"IT"},
    {departmentId: 2, name:"Human Resource"},
    {departmentId: 3, name:"Sales"},
    {departmentId: 4, name:"Marketing"},
    {departmentId: 5, name:"Customer Service"},
    {departmentId: 6, name:"Finance"}
  ];

}
