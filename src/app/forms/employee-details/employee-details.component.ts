import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeDataStoreServiceService } from '../../services/employee-data-store-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
 
  constructor(private api:EmployeeDataStoreServiceService){}

  selectedGender:string = "";

  employeeDetailsForm:FormGroup = new FormGroup({

    FirstName: new FormControl('',Validators.required),
    MiddleName: new FormControl(''),
    LastName: new FormControl('',Validators.required),
    Gender: new FormControl(''),
    DateofBirth: new FormControl(''),
    Department: new FormControl(''),
    Senior: new FormControl('')
  })

  getGender(event:any):string{
    this.selectedGender =  event.target.value;
    return event.target.value;
  }

  getDepartment(event:any):string{
    return event.target.value;
  }

  get employeeFirstName(){
    return this.employeeDetailsForm.controls['FirstName'];
  }

  get employeeLastName(){
    return this.employeeDetailsForm.controls['LastName'];
  }

  get employeeDOB(){
    return this.employeeDetailsForm.controls['DateofBirth'];
  }

  submitEmployeeDetailsForm(form:any){

    this.api.addEmployeeDetails(this.employeeDetailsForm.value.FirstName, this.employeeDetailsForm.value.MiddleName, this.employeeDetailsForm.value.LastName,
                                this.employeeDetailsForm.value.Gender, this.employeeDOB.value, this.employeeDetailsForm.value.Department,
                                this.employeeDetailsForm.value.Senior);

    this.employeeDetailsForm.reset();
  }
}
