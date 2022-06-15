import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class LoadProductsService {
  
  myAppUrl = 'http://localhost/';
  myApiUrl = 'ProyectoFinal/ProyectoFinal-Back/products.php';

  constructor( private http:HttpClient ) { }

  async getProducts()  : Promise<Product[]>{

    let productList = await this.http.get<Product[]>(this.myAppUrl+this.myApiUrl).toPromise();
    
    return productList;

  }

  async getProductById(id:string)  : Promise<Product>{
    let product = await this.http.get<Product>(this.myAppUrl+this.myApiUrl+'?id='+id).toPromise();
    
    return product;

  }
  
  saveProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.myAppUrl+this.myApiUrl, Product)
  }

  updateProduct(id: string, product: Product ) : Observable<Product>{
    debugger
    return this.http.put<Product>(this.myAppUrl + this.myApiUrl +'?id='+id, product);
  }

  deleteProduct(id: string) : Observable<any>{
    debugger
    return this.http.delete<any>(this.myAppUrl + this.myApiUrl +'?id='+id).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.status);
  }

}
