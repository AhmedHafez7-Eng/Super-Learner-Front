import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';
import {UserService} from '../../service/user.service';
import { Router } from '@angular/router';

import { instructor } from 'src/app/models/instructor.model';


declare var timeline:any;
// var myapp = angular.module('myapp', ['angular-timeline']);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  user!:any
  loggedIn!:boolean
  constructor(private userService: UserService,private http:HttpClient,private activeroute:Router) { }
  
  
  ngOnInit(): void {
    // this.userService.isUserLoggedIn().subscribe(
    //   ( status) => {this.loggedIn = status
    //    console.log('isLogged', this.loggedIn);
      this.userService.userlogin().subscribe((res)=>{this.user=res
        console.log(this.user) }
        )
      
    //  })

    //  timeline(document.querySelectorAll('.timeline'), {
		// 	forceVerticalMode: 700,
		// 	mode: 'horizontal',
		// 	verticalStartPosition: 'left',
		// 	visibleItems: 4
		// });
    
    }

// login(){
//   if(localStorage.getItem('token')){
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     });
   
//     this.http.get('http://localhost:8000/api/user', {headers}).subscribe(
//       result => this.user = result
     
//       )
//       console.log(this.user)
     
//     ;}
//}


}
