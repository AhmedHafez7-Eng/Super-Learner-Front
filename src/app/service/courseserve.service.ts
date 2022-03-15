import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { instructor } from "../models/instructor.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseserveService {

  constructor(private httpclient:HttpClient) { }
  getcourses():
  Observable<{courses:course[]}> {
    return this.httpclient.get<{courses:course[]}>(`${environment.baseUrl}courses`)
  }
  add(course:object){
   return this.httpclient.post(`${environment.baseUrl}add`,course)
  
  }
  
}
