import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http : HttpClient) { }
  createTransaction(amount:any):Observable<any>{
    return this.http.get(`http://localhost:8080/payment/${amount}`);
  }
}
