import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
