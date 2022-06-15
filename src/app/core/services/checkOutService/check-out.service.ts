import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  myAppUrl = 'http://localhost/';
  myApiUrl = 'ProyectoFinal/ProyectoFinal-Back/checkout.php';
  cart: Product[] = [];
  
  constructor( private http:HttpClient ) { }

  checkOut(cart: Product[]): Observable<any> {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let request={
      cart:cart,
      user:user
    }
    return this.http.post<any>(this.myAppUrl+this.myApiUrl, request).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.status);
  }

}
