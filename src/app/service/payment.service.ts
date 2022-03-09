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
    return this.httpclient.post('http://127.0.0.1:8000/api/pay',user)
  }
}
