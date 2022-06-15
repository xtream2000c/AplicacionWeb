import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { LoadProductsService } from 'src/app/core/services/productServices/load-products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class EditProductComponent implements OnInit {
  
  product:Product;
  productName:string;
  productPrice:number;
  productDescription:string;
  productStock:number;
  id:string;

  constructor(private loadProductsService : LoadProductsService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe( params => this.id = params['id']);
    this.product = await this.loadProductsService.getProductById(this.id);
    console.log(this.product);
    this.productName = this.product.name;
    this.productDescription = this.product.description;
    this.productPrice = this.product.price;
    this.productStock = this.product.stock;
  }

  editProduct(){

    this.product.name = this.productName;
    this.product.description = this.productDescription;
    this.product.price = this.productPrice;
    this.product.stock = this.productStock;

    this.loadProductsService.updateProduct(this.id,this.product).subscribe(data => {
      alert('Guardado exitosamente');
    })

    this.router.navigate(['/']);
  }
  

}
