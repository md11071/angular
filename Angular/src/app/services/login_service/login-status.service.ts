import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  stat:boolean = false
  detail:any;
  constructor() { }

  status( stat: boolean){
    if(stat){
      this.stat = true
    }
  }
  islogin(){
    if(this.stat){
      return true
    }else{
      return false
    }

  }
  emp_details(details:any){
    this.detail = details;
  }
  throw_detail(){
    return this.detail;
  }
}
