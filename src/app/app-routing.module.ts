import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: UserLoginComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'register',
    component: UserRegisterComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'profile',
    component: UserProfileComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'addProducts',
    component: AddProductComponent,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
