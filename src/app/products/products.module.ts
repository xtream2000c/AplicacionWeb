import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ManageProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ]
})
export class ProductsModule { }
