import { Injectable } from '@angular/core';
import { Product } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  async getCartContent(){
    let cart:Product[] = JSON.parse(sessionStorage.getItem('cart'));
    return cart;
  }

  async saveCartContent(cart : Product[]){
    try {
      sessionStorage.setItem("cart", JSON.stringify(cart));
      return true;
    } catch (error) {
      return false;
    }    
  }
}
