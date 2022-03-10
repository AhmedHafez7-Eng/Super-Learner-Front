import { Component } from '@angular/core';
import {UserService} from './service/user.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check=localStorage.getItem('token')
  // loggedIn!:any;
  // checkval=0
  loggedIn!:any
  router!: string;
   constructor(private _router: Router,private userService: UserService,private activeroute:Router) {
  }
  ngOnInit(): void {
   if(localStorage.getItem('token'))
     this.userService.login(localStorage.getItem('token'))
     
  //   this.userService.isUserLoggedIn().subscribe(
  //    (status) => {this.loggedIn = status
   
    
  //     console.log('isLogged', this.loggedIn)}
  //   )
  
    
   }
  

  // logout(): void {
  //   this.userService.logout();
  //   //this.activeroute.navigate(['/login'])
  // }
  title = 'SuperLearner';
  //check=localStorage.getItem('token')
}
