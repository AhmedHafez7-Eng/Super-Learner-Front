import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { instructor } from '../models/instructor.model';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient:HttpClient) { }
  saveData(data:instructor){
    return this.httpclient.post<any>(`${environment.baseUrl}register`,data)
 }
}
