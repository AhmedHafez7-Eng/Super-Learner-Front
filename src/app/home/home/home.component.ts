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
  constructor(private userService: UserService,private http:HttpClient,private activeroute:Router) { }
  
  ngOnInit(): void {
    
  
  }
  user:any=this.userService.getwhologin()

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
