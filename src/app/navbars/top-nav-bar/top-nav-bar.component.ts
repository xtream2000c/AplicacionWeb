import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products';
import { CartService } from 'src/app/core/services/cartService/cart.service';
import { LoginServiceService } from 'src/app/core/services/loginService/login-service.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  navItem1:string = this.loginService.navItem1;
  navItem2:string = this.loginService.navItem2;
  navItem1Icon:string = this.loginService.navItem1Icon;
  navItem2Icon:string = this.loginService.navItem2Icon;
  navItem1Text:string = this.loginService.navItem1Text;
  navItem2Text:string = this.loginService.navItem2Text;
  cart : Product[]=[];

  constructor( public loginService:LoginServiceService, public cartService:CartService ) {  }

  async ngOnInit(): Promise<void> {
    this.loginService.checkLoged();
    let cart = await this.cartService.getCartContent();
    if(cart){
      this.cart = await this.cartService.getCartContent();
    }else{
      this.cartService.saveCartContent(this.cart);
    }
  }

  clear(){
    if (sessionStorage.getItem('user')!= null) {
      sessionStorage.removeItem('user');
    }
    this.loginService.checkLoged();
  }

}
