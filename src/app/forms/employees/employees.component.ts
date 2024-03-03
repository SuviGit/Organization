import { Component } from '@angular/core';
import { EmployeeDataStoreServiceService } from '../../services/employee-data-store-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent {
  
  employeesList = [];
  constructor(private api:EmployeeDataStoreServiceService){}

  ngOnInit(){
    this.employeesList = this.api.getAllEmployees();
  }

}
