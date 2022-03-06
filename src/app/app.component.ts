import { Component } from '@angular/core';
import {UserService} from './service/user.service';
import { OnInit} from '@angular/core';
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
   constructor(private userService: UserService,private activeroute:Router) {
  }
  ngOnInit(): void {
   
    this.userService.isUserLoggedIn().subscribe(
     (status) => {this.loggedIn = status
     
    
      console.log('isLogged', this.loggedIn)}
    )
  
    
  }
  

  // logout(): void {
  //   this.userService.logout();
  //   //this.activeroute.navigate(['/login'])
  // }
  title = 'SuperLearner';
  //check=localStorage.getItem('token')
}
