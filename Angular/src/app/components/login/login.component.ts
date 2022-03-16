import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../../services/login_service/login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userl: string = "";
  passl:string = "";
  error_stat : boolean = false;
  constructor(private route: Router, private loginstat : LoginStatusService) { }

  ngOnInit(): void {
  }


  login(user:string, pass:string){
    this.userl  = "md";
    this.passl = "md";
    if(this.userl != user || this.passl!=pass){
      this.error_stat = true;
    }
    else if(this.userl == user || this.passl==pass){
      this.loginstat.status(true);
      this.route.navigate(["/directory"]);
    } 
  }

}
