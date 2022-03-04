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
user!:instructor
  
  private loggedChanged = new Subject<boolean>();
  constructor(private httpclient:HttpClient) { }

  login(token: any): void {
    localStorage.setItem('token', token);
    this.loggedChanged.next(true);
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

}
