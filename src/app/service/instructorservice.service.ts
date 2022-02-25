import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { instructor } from '../models/instructor.model';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class InstructorserviceService {

  constructor(private httpclient:HttpClient) { }
  getAllInstructros(): Observable<{instructors:instructor[]}> {
    return this.httpclient.get<{instructors:instructor[]}>(`${environment.baseUrl}instructors`)
  }

}
