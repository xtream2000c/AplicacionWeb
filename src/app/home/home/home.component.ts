import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { CartService } from 'src/app/core/services/cartService/cart.service';
import { LoadProductsService } from 'src/app/core/services/productServices/load-products.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{
    class:'container'
  }
})
export class HomeComponent implements OnInit {
  cart:Product[] = [];
  productos:Product[];
  constructor(private LoadProductsService:LoadProductsService, public cartService:CartService, public router:Router) { }

  async ngOnInit(): Promise<void> {
    this.productos = await this.LoadProductsService.getProducts();

    let cart = await this.cartService.getCartContent();
    if(cart){
      this.cart = await this.cartService.getCartContent();
    }else{
      this.cartService.saveCartContent(this.cart);
    }
  }

  async addToCart(id:string){
    var product = await this.LoadProductsService.getProductById(id);
    if(this.cart.length>=1){
      
      this.cart.push(product);
      await this.cartService.saveCartContent(this.cart);
      window.location.reload();
     
    }else{
      this.cart.push(product);
      await this.cartService.saveCartContent(this.cart);
      window.location.reload();
    }
    console.log(this.cart);
  }

}
