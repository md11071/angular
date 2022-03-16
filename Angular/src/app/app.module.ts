import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { EmpDirectoryComponent } from './components/emp-directory/emp-directory.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes : Routes = [
  {path : "login" , component : LoginComponent},
  {path : "directory", component: EmpDirectoryComponent},
  {path: "add_emp", component: AddEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    EmpDirectoryComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
