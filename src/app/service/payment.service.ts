import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpclient:HttpClient) { }
  payment(user:object){
    return this.httpclient.post(`${environment.baseUrl}pay`,user)
  }
  status(){
    return this.httpclient.get(`${environment.baseUrl}status`)
  }
}
