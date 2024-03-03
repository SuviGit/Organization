import { Injectable } from '@angular/core';

interface Employee{
  FirstName:string;
   MiddleName:string;
   LastName:string;
   Gender:string;
   DateOfBirth:string;
   Department:string;
   Senior:string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataStoreServiceService {

   FirstName:string = "";
   MiddleName:string = "";
   LastName:string = "";
   Gender:string = "";
   DateOfBirth:string = "";
   Department:string = "";
   Senior:string = "";

    empList: Array<any> = [];
    emparr = [];
 

  addEmployeeDetails(fName:string, mName:string, lname:string, gender:string, dob:string, dept:string, senior:string){
    this.FirstName = fName;
    this.MiddleName = mName;
    this.LastName = lname;
    this.Gender = gender;
    this.DateOfBirth = dob;
    this.Department = dept;
    this.Senior = senior;

    var empVar = <Employee>{};
    empVar.FirstName = this.FirstName;
    empVar.MiddleName = this.MiddleName;
    empVar.LastName = this.LastName;
    empVar.Gender = this.Gender;
    empVar.DateOfBirth = this.DateOfBirth;
    empVar.Department = this.Department;
    empVar.Senior = this.Senior;

    this.empList.push(empVar);
    console.log(this.empList);
  }

  getAllEmployees():any{
    return this.empList;
  }
}
