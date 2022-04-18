import { Component, OnInit } from '@angular/core';
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

  constructor(private LoadProductsService:LoadProductsService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  
  async cargarProductos() {
    var productList = this.LoadProductsService.getProducts();
    var productsEl = document.getElementById('productsList')
    console.log(productList);

    (await productList).forEach(product => {
      productsEl.innerHTML += `
             <div class="col-md-6 col-lg-4 col-xl-3 mt-2">
                 <div class="card m-auto" style="width: 18rem;" id="${product.id}">
                 <div class="card-body">
                     <h4 class="card-title">${product.name}</h4>
                     <h5 class="card-title">${product.price}€</h5>
                     <p class="card-text">${product.description}</p>
                     <button id="aniadirCarrito(${product.id})"><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                 </div>
                </div>
            </div>
           `;
    });

    //Productos es un array de objetos, producto, que estan declarados en el archivo JSON
    // productList.forEach((product) => {
    //   productsEl.innerHTML += `
    //         <div class="col-md-6 col-lg-4 col-xl-3 mt-2">
    //             <div class="card m-auto" style="width: 18rem;" id="${producto.id}">
    //             <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
    //             <div class="card-body">
    //                 <h4 class="card-title">${producto.nombre}</h4>
    //                 <h5 class="card-title">${producto.precio}€</h5>
    //                 <p class="card-text">${producto.descripcion}</p>
    //                 <button id="aniadirCarrito(${producto.id})"><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
    //             </div>
    //             </div>
    //         </div>
    //       `;
    // });
}

}
