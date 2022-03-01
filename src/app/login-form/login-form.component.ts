import { Component, OnInit } from '@angular/core';
import { instructor } from '../models/instructor.model';
import { AuthService } from '../service/guard/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user=new instructor()
  token!:string
  constructor(private loginserve:LoginService,private authserve:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.loginserve.login(this.user).
    subscribe((res)=>{this.token=(res.access_token)
     // if(this.token)
     // this.authserve.validation(this.token)
     // console.log(this.authserve.validation(this.token))
    })
    
}

}
