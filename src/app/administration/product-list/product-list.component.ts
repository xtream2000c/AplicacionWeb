import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { LoadProductsService } from 'src/app/core/services/productServices/load-products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productos:Product[];

  constructor(private loadProductsService:LoadProductsService, private router:Router ) { }

  async ngOnInit(): Promise<void> {
    this.productos = await this.loadProductsService.getProducts();
  }

  editProduct(id:string){
    this.router.navigate(['/editProduct', id])
  }

  deleteProduct(id){
    this.loadProductsService.deleteProduct(id).subscribe(data => {
      alert("Producto eliminado con exito");
      window.location.reload();
    },
    error=>{
      alert(error);
      console.log(error);
    });;
    
  }

}
