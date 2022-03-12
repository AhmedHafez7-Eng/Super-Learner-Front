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
  user?:any
  loggedIn!:any
  router!: string;
  blnDisplayMenu!:boolean
   constructor(private _router: Router,private userService: UserService,private activeroute:Router) {
  }
  ngOnInit(): void {

    this.userService.userlogin().subscribe((res => this.user = res));



   if(localStorage.getItem('token'))
     this.userService.login(localStorage.getItem('token'))

  //   this.userService.isUserLoggedIn().subscribe(
  //    (status) => {this.loggedIn = status


  //     console.log('isLogged', this.loggedIn)}
  //   )


   }
   ngDoCheck() {        
    this.blnDisplayMenu = this.userService.blnDisplayMenu;        
    }
  

  // logout(): void {
  //   this.userService.logout();
  //   //this.activeroute.navigate(['/login'])
  // }
  title = 'SuperLearner';
  //check=localStorage.getItem('token')
}
