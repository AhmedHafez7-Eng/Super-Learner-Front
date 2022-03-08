import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';
import {UserService} from '../service/user.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  constructor(private userService: UserService,private http:HttpClient,private activeroute:Router) { }
user!:any
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      const headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      });
      console.log(localStorage.getItem('token'));
      this.http.get('http://localhost:8000/api/user', {headers}).subscribe(
        (result) => {this.user = result
          console.log(this.user)
          this.userService.whologin(this.user)
          this.activeroute.navigateByUrl('/home')
        },
        error => {
          this.userService.logout();
          this.activeroute.navigate(['/login']);
        }
      );
    console.log(this.user)}


  }
  //login(){}
//   logout(){
//    localStorage.removeItem('token')
//   this.user=false
//  // this.activeroute.navigate(['/secure']);
// }

}
