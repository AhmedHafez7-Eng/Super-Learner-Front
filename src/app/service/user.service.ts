import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { instructor } from '../models/instructor.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user?: any;
  blnDisplayMenu!: boolean;
  private loggedChanged = new Subject<boolean>();
  private loggedChanged2!: boolean;
  constructor(private httpclient: HttpClient) {
    this.blnDisplayMenu = true;
  }

  login(token: any): void {
    localStorage.setItem('token', token);
    this.userlogin().subscribe((res) => {
      this.user = res;
      this.whologin(this.user);
      this.getwhologin();
      this.loggedChanged.next(true);
      if (this.user.role == 'admin') this.loggedChanged2 = true;
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedChanged2 = false;
    this.loggedChanged.next(false);
  }
  isAdmin(): boolean {
    return this.loggedChanged2;
  }
  isUserLoggedIn(): Subject<boolean> {
    return this.loggedChanged;
  }
  whologin(user: instructor) {
    this.user = user;
  }
  getwhologin() {
    return this.user;
  }
  userlogin(): Observable<{ user: instructor }> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.httpclient.get<{ user: instructor }>(
      'http://localhost:8000/api/user',
      { headers }
    );
  }
  updateData(data: object, id: number) {
    return this.httpclient.put<any>(
      `${environment.baseUrl}edit_profile/${id}`,
      data
    );
  }
  ifenroll(ids: object) {
    return this.httpclient.post(`${environment.baseUrl}ifenrolle`, ids);
  }
}
