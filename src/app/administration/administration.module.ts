import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    CreateProductComponent,
    ProductListComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    RouterModule
  ]
})
export class AdministrationModule { }
