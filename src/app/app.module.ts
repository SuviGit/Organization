import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {EmployeeDetailsComponent} from './forms/employee-details/employee-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentComponent } from './forms/department/department.component';
import { EmployeesComponent } from './forms/employees/employees.component';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    DepartmentComponent,
    EmployeesComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
