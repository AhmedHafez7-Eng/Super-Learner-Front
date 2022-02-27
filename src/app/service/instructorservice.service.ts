import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { instructor } from '../models/instructor.model';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { course } from '../models/course.model';
@Injectable({
  providedIn: 'root'
})
export class InstructorserviceService {

  constructor(private httpclient:HttpClient) { }
  getAllInstructros(): Observable<{instructors:instructor[]}> {
    return this.httpclient.get<{instructors:instructor[]}>(`${environment.baseUrl}instructors`)
  }


getcourses():
  Observable<{courses:course[]}> {
    return this.httpclient.get<{courses:course[]}>(`${environment.baseUrl}courses`)
  }
  getone(id:number) :Observable<{data:instructor}>{
    return this.httpclient.get<{data:instructor}>(`${environment.baseUrl}courseinfo/${id}`)
  }
  getimage(id:number){
    return this.httpclient.get(`${environment.baseUrl}getimage/${id}`)
  }
  deletecourse(id:number){
    return this.httpclient.get(`${environment.baseUrl}delete/${id}`)
     
  }

}