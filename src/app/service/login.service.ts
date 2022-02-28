import { Injectable } from '@angular/core';
import { instructor } from '../models/instructor.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }
  login(user:instructor){
    return this.httpclient.post<any>(`${environment.baseUrl}login`,user)
  }
}
