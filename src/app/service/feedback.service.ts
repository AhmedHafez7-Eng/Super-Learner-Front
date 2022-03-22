import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { studentCourse } from '../models/studentCourse.model';
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private httpclient: HttpClient) {}
  saveData(id: number, data: studentCourse) {
    return this.httpclient.put<any>(
      `${environment.baseUrl}feedback/${id}`,
      data
    );
  }

  getstudfeedback() {
    return this.httpclient.get<any>(`${environment.baseUrl}student-courses`);
  }
}
