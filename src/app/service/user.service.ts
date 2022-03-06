import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { instructor } from '../models/instructor.model';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {
user!:any
 
  private loggedChanged = new Subject<boolean>();
  constructor(private httpclient:HttpClient) { }

  login(token: any): void {
    localStorage.setItem('token', token);
    this.userlogin().subscribe((res)=>{
      this.user=res
      this.whologin(this.user)
      this.getwhologin()
    this.loggedChanged.next(true);
  
  
  })
  
  }

  logout(): void {
    localStorage.removeItem('token');
     
    this.loggedChanged.next(false);
  }
  isUserLoggedIn(): Subject<boolean> {
    return this.loggedChanged;
  }
  whologin(user:instructor){
    this.user=user
  }
getwhologin(){
  return this.user
}
userlogin():Observable<{user:instructor}>{
  const headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });
 return this.httpclient.get<{user:instructor}>('http://localhost:8000/api/user', {headers})}
  // .subscribe(
  //   (result) => {this.user = result 
  //     return result
  //     // console.log(this.user)
  //     // this.userService.whologin(this.user)
  //     // this.activeroute.navigateByUrl('/home')
  //   }
    // error => {
    //   this.userService.logout();
    //   this.activeroute.navigate(['/login']);
    // }
  //);
//console.log(this.user)}
ifenroll(ids:object){
return this.httpclient.post(`${environment.baseUrl}ifenrolle`,ids)
}

}
