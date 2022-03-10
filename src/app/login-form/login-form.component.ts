import { Component, OnInit } from '@angular/core';
import { instructor } from '../models/instructor.model';
import { AuthService } from '../service/guard/auth.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user=new instructor()
  token!:string
  loggeduser!:any
  error?:any
  constructor( private userService: UserService,private loginserve:LoginService,private activeroute:Router,private authserve:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.loginserve.login(this.user).
    subscribe((res)=>{this.token=(res.access_token)
    this.userService.login(this.token);
    this.userService.userlogin().subscribe((res)=>{this.loggeduser=res
      if(this.loggeduser.role=='admin')
     { console.log(this.loggeduser.role)
       this.activeroute.navigateByUrl('/admin/dashboard');}
      else  this.activeroute.navigateByUrl('/home');
      
    }
      )
      
        //this.activeroute.navigateByUrl('/home');
     // if(this.token)
     // this.authserve.validation(this.token)
     // console.log(this.authserve.validation(this.token))
    },(error)=>{this.error=error.error.message})

}

}
