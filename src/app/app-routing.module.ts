import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './forms/employee-details/employee-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentComponent } from './forms/department/department.component';
import { EmployeesComponent } from './forms/employees/employees.component';

const routes: Routes = [
  {path:"",redirectTo:"employeeDetails", pathMatch:"full"},
  {path:"employeeDetails", component:EmployeeDetailsComponent},
  {path:"department", component:DepartmentComponent},
  {path:"employees", component:EmployeesComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
