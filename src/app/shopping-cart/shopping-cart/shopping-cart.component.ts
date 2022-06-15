import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { CartService } from 'src/app/core/services/cartService/cart.service';
import { CheckOutService } from 'src/app/core/services/checkOutService/check-out.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: Product[];
  showCart:boolean;
  totalPrice:number = 0;
  constructor(public cartService:CartService, private router: Router, private checkOutService:CheckOutService) { }

  async ngOnInit(): Promise<void> {
    this.cart = await this.cartService.getCartContent();
    this.showCart = (this.cart.length > 0) ? true : false;
    this.cart.forEach(Product => {
      
      this.totalPrice = this.totalPrice + Product.price;
    });

    this.totalPrice = Math.round(this.totalPrice * 100) / 100
  }

  async deleteProduct(index, id){
    if(this.cart.some(cartProduct => cartProduct._id.$oid == id)){
      this.cart.splice(index, 1);
      await this.cartService.saveCartContent(this.cart);
      window.location.reload();
    }else{
      alert("El producto ya no esta en el carrito");
      window.location.reload();
    }
  }

  async checkOut(){
    if (sessionStorage.getItem('user')!= null) {
      this.checkOutService.checkOut(this.cart).subscribe(data => {
        debugger
      alert("Pedido realizado con exito, se ha enviado un correo a su direccion de email");
      sessionStorage.removeItem('cart');
      window.location.reload();
      },
      error=>{
        alert(error);
        console.log(error);
      });
      
    }
    else{
      alert("No se ha iniciado sesion, se te redirigira al login")
      this.router.navigate(['login']);
    }
  }

}
