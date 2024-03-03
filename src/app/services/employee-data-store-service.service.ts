import { Injectable } from '@angular/core';

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

  // constructor() { 
  //   this.FirstName = "";
  //   this.MiddleName = "";
  //   this.LastName = "";
  //   this.Gender = "";
  //   this.DateOfBirth = "";
  //   this.Department = "";
  //   this.Senior = "";
  // }

  addEmployeeDetails(fName:string, mName:string, lname:string, gender:string, dob:string, dept:string, senior:string){
    this.FirstName = fName;
    this.MiddleName = mName;
    this.LastName = lname;
    this.Gender = gender;
    this.DateOfBirth = dob;
    this.Department = dept;
    this.Senior = senior;

    let emparr = [{
      FName:this.FirstName, MName:this.MiddleName, LName:this.LastName, Gender:this.Gender, DOB:this.DateOfBirth, Dept:this.Department,
      Senior:this.Senior
    }];

    this.empList.push(emparr);
  }

  getAllEmployees():any{
    return this.empList;
  }
}
