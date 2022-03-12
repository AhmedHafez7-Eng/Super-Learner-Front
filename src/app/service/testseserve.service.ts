import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { instructor } from "../models/instructor.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { } from '../models/course.model';
import { test } from '../models/test.model';
import { testDetails } from '../models/testDetails.model';
@Injectable({
  providedIn: 'root'
})
export class TestseserveService {

  constructor(private testhttp:HttpClient) { }
  gettest(course_id:number){
    return this.testhttp.get(`${environment.baseUrl}quiz/${course_id}`)
  }
  getquestions(test_id:number){
    return this.testhttp.get(`${environment.baseUrl}ques/${test_id}`)
  }
  addtest(data:test){
    return this.testhttp.post<any>(`${environment.baseUrl}addTest`,data)
  }
  addQuestion(data:testDetails){
    return this.testhttp.post<any>(`${environment.baseUrl}testsdetails`,data)
  }

  getTestInfo(test_id:number){
    return this.testhttp.get(`${environment.baseUrl}tests/${test_id}`)
  }
}
