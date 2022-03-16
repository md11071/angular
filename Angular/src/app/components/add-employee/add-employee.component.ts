import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../../services/login_service/login-status.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private route : Router,private detail : LoginStatusService) { }

  ngOnInit(): void {
    if(!this.detail.islogin()){
      this.route.navigate(["login"]);
    }
  }
  add_emp(empform:any){
    this.detail.emp_details(empform.value);
    this.route.navigate(['directory']);
  }

}
