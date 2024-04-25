import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users:any={
    admin:{password:1234,roles:["ADMIN","STUDENT"]},
    user1:{password: 1234,roles: ["STUDENT"]}
  };
  public username:any;
  public isAuthenticated:boolean=false;
  public roles:string[]=[];

  constructor(private router:Router) { }
  public login(username:string,password:string):boolean{
    if(this.users[username] && this.users[username]['password']==password){
        this.isAuthenticated=true;
        this.roles=this.users[username]['roles'];
        this.username=username;
      return true;
    }
    else return false

  }

  logout() {
    this.username=undefined;
    this.roles=[];
    this.isAuthenticated=false;
    this.router.navigateByUrl("/login")
  }
}
