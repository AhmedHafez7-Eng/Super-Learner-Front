import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { post } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostseserveService {

  constructor(private posthttp:HttpClient) { }

  addpost(data:post){
    return this.posthttp.post<any>(`${environment.baseUrl}posts`,data)
  }
}
