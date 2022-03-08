import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { instructor } from "../models/instructor.model";
@Injectable({
  providedIn: 'root'
})
export class StudentserveService {

  constructor(private http: HttpClient) { }

getAllStudents(): Observable<{students:instructor[]}> {
    return this.http.get<{students:instructor[]}>(`${environment.baseUrl}students`)
  }

  coursesofstu(id:number){
    return this.http.get(`${environment.baseUrl}courseofstu/${id}`)
  }
  enrolle(ids:any){
    return this.http.post(`${environment.baseUrl}enrolle`,ids)
  }
}
