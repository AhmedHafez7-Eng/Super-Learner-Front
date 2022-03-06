import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StudentserveService {

  constructor( private http:HttpClient) { }
  coursesofstu(id:number){
    return this.http.get(`${environment.baseUrl}courseofstu/${id}`)
  }
  enrolle(ids:any){
    return this.http.post(`${environment.baseUrl}enrolle`,ids)
  }
}
