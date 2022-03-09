import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { instructor } from "../models/instructor.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { course } from '../models/course.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }
  deleteinst(id:number){
    return this.httpclient.get(`${environment.baseUrl}delete/instructor/${id}`)
  }
  deletecourse(id:number){
    return this.httpclient.get(`${environment.baseUrl}delete/course/${id}`)
  }
  deletestudent(id:number){

 return this.httpclient.get(`${environment.baseUrl}delete/student/${id}`)
  }
}
