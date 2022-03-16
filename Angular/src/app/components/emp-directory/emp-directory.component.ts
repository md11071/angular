import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from 'src/app/services/login_service/login-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-directory',
  templateUrl: './emp-directory.component.html',
  styleUrls: ['./emp-directory.component.css']
})
export class EmpDirectoryComponent implements OnInit {
  detail:any = "";
  detail_stat : boolean = true;

  constructor(private route : Router, private loginstat : LoginStatusService) {
    this.detail = this.loginstat.throw_detail();
    if(this.detail == undefined){
      this.detail_stat = false;
    }
  }

  ngOnInit(): void {
    if(!this.loginstat.islogin()){
      this.route.navigate(["/login"]);
    }
  }
  addEmp(){
    this.route.navigate(["/add_emp"]);
  }

  
  

}
