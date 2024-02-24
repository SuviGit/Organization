import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  selectedGender:String = "";

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

  submitEmployeeDetailsForm(form:any){
    console.log(form);
  }
}
